// adapted from https://github.com/jevakallio/redux-offline

import { Types, Creators } from './reducer';
import effectResolver from './effectResolver';

const decaySchedule = [
  1000, //After 1 seconds
  1000 * 5, //After 5 seconds
  1000 * 15, //After 15 seconds
  1000 * 30, //After 30 seconds
  1000 * 60, //After 1 minute
  1000 * 60 * 3, //After 3 minutes
  1000 * 60 * 5, //After 5 minutes
  1000 * 60 * 10, //After 10 minutes
  1000 * 60 * 30, //After 30 minutes
  1000 * 60 * 60 //After 1 hour
];

const after = (timeout = 0) => new Promise(resolve => setTimeout(resolve, timeout));

const complete = (action, success, payload) => ({
  ...action,
  payload,
  meta: { ...action.meta, success, completed: true }
});

const take = state => (state.offline.outbox.length > 0 ? [state.offline.outbox[0]] : []);

const discard = error => !('code' in error) || (error.code >= 400 && error.code < 500);

const retry = (action, retries) => decaySchedule[retries] || null;

const send = (action, dispatch, retries = 0) => {
  const metadata = action.meta.offline;

  dispatch(Creators.offlineBusy(true));

  return effectResolver(metadata.effect, action)
    .then(result => dispatch(complete(metadata.commit, true, result)))
    .catch(error => {
      if (discard(error, action, retries)) {
        console.log('Discarding action', action.type); // eslint-disable-line
        return dispatch(complete(metadata.rollback, false, error));
      }
      const delay = retry(action, retries);
      if (delay != null) {
        console.log('Retrying action', action.type, 'with delay', delay); // eslint-disable-line
        return dispatch(Creators.offlineScheduleRetry(delay));
      } else {
        console.log('Discarding action', action.type, 'because retry did not return a delay'); // eslint-disable-line
        return dispatch(complete(metadata.rollback, false, error));
      }
    });
};

export default store => next => action => {
  // allow other middleware to do their things
  const result = next(action);

  // find any actions to send, if any
  const state = store.getState();
  const actions = take(state);

  // if the are any actions in the queue that we are not yet processing, send those actions
  if (actions.length > 0 && !state.offline.busy && !state.offline.retryScheduled && state.offline.online) {
    send(actions[0], store.dispatch, state.offline.retryCount);
  }

  if (action.type === Types.OFFLINE_SCHEDULE_RETRY) {
    const retryToken = state.offline.retryToken;
    after(action.delay).then(() => store.dispatch(Creators.offlineCompleteRetry(retryToken)));
  }

  return result;
};
