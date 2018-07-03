import { createActions, createReducer } from 'reduxsauce';

// actions
export const { Types, Creators } = createActions(
  {
    // app startup, the user is retrieved from the auth provider
    retrieveUser: null,

    loginStarted: null,
    facebookLoginDetected: ['user'],
    loginSuccess: null,
    loginError: ['error'],

    logout: null,
    logoutSuccess: null,

    openTerms: null,
    openPrivacy: null,

    emailChange: ['value'],
    saveEmail: null
  },
  { prefix: 'login/' }
);

// initial state
const initialState = {
  loggingIn: null,
  authProviderUser: null,
  savingUser: false
};

// reducers
const loginStarted = state => ({ ...state, loggingIn: 'facebook', savingUser: false });
const loginSuccess = state => ({ ...state, loggingIn: null });
const loginError = state => ({ ...state, loggingIn: null });
const setAuthProviderUser = (state, action) => ({ ...state, authProviderUser: action.user });
const updateEmail = (state, action) => ({
  ...state,
  authProviderUser: { ...state.authProviderUser, email: action.value }
});
const startUserSave = state => ({ ...state, savingUser: true });

export default createReducer(initialState, {
  [Types.LOGIN_STARTED]: loginStarted,
  'application/INIT_FINISHED': loginSuccess,
  'application/INIT_ERROR': loginError,
  [Types.LOGIN_ERROR]: loginError,
  [Types.FACEBOOK_LOGIN_DETECTED]: setAuthProviderUser,
  [Types.EMAIL_CHANGE]: updateEmail,
  [Types.SAVE_EMAIL]: startUserSave
});

export const authProviderUser = state => state.login.authProviderUser;
