import { createActions, createReducer } from 'reduxsauce';
import { Types as ApplicationTypes } from './reducer';
import R from 'ramda';

export const { Types, Creators } = createActions(
  {
    pushNotificationReceived: ['postId'],
    updateTransloaditUploadProgress: ['file', 'written', 'total']
  },
  { prefix: 'volatile/' }
);

const initialState = {
  initFinished: false,
  redirectToPost: null,
  uploads: {}
};

const initFinished = state => ({ ...state, initFinished: true });
const setRedirectPost = (state, action) => ({ ...state, redirectToPost: action.postId });
const updateTransloaditUploadProgress = (state, action) => ({
  ...state,
  uploads: R.pickBy(value => value < 1, { ...state.uploads, [action.file]: action.written / action.total })
});

export default createReducer(initialState, {
  [ApplicationTypes.INIT_FINISHED]: initFinished,
  [Types.PUSH_NOTIFICATION_RECEIVED]: setRedirectPost,
  [Types.UPDATE_TRANSLOADIT_UPLOAD_PROGRESS]: updateTransloaditUploadProgress
});

export const redirectToPost = state => state.volatile.redirectToPost;
