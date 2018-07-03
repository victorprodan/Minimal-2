// adapted from https://github.com/jevakallio/redux-offline

import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    statusChanged: ['payload'],
    offlineScheduleRetry: ['delay'],
    offlineCompleteRetry: null,
    offlineBusy: ['busy'],
    offlineSend: ['payload']
  },
  { prefix: 'offline/' }
);

const initialState = {
  busy: false,
  lastTransaction: 0,
  online: false,
  outbox: [],
  retryToken: 0,
  retryCount: 0,
  retryScheduled: false
};

const updateOfflineStatus = (state, action) => ({ ...state, online: action.payload.online });
const scheduleRetry = state => ({
  ...state,
  busy: false,
  retryScheduled: true,
  retryCount: state.retryCount + 1,
  retryToken: state.retryToken + 1
});
const completeRetry = state => ({ ...state, retryScheduled: false });
const updateBusyState = (state, action) => ({ ...state, busy: action.busy });
const enqueue = (state, action) => {
  const transaction = state.lastTransaction + 1;
  const stamped = { ...action, meta: { ...action.meta, transaction } };
  const outbox = state.outbox;
  return {
    ...state,
    lastTransaction: transaction,
    outbox: [...outbox, stamped]
  };
};
const dequeue = state => {
  const [, ...rest] = state.outbox;
  return { ...state, outbox: rest, retryCount: 0, busy: false };
};

const reducer = createReducer(initialState, {
  [Types.STATUS_CHANGED]: updateOfflineStatus,
  [Types.OFFLINE_SCHEDULE_RETRY]: scheduleRetry,
  [Types.OFFLINE_COMPLETE_RETRY]: completeRetry,
  [Types.OFFLINE_BUSY]: updateBusyState
});

export default (state = initialState, action) => {
  // Add offline actions to queue
  if (action.meta && action.meta.offline) {
    return enqueue(state, action);
  }

  // Remove completed actions from queue (success or fail)
  if (action.meta != null && action.meta.completed === true) {
    return dequeue(state);
  }

  return reducer(state, action);
};
