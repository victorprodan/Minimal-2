import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    openMyProfile: null
  },
  { prefix: 'nav/' }
);

const initialState = {};

export default createReducer(initialState, {});
