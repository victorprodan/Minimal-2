import { createActions, createReducer } from 'reduxsauce';
import { Types as LoginTypes } from './login/reducer';

export const { Types, Creators } = createActions(
  {
    startup: null,
    initFinished: ['payload'],
    initError: ['error']
  },
  { prefix: 'application/' }
);

const initialState = {
  loginProvider: null
};

const setFacebookLoginProvider = state => ({ ...state, loginProvider: 'facebook' });
const resetLoginProvider = state => ({ ...state, loginProvider: null });

export default createReducer(initialState, {
  [LoginTypes.FACEBOOK_LOGIN_DETECTED]: setFacebookLoginProvider,
  [LoginTypes.LOGOUT_SUCCESS]: resetLoginProvider
});

export const loginProvider = state => state.application.loginProvider;
