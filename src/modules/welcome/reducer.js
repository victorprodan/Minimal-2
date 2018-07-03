import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    openNickname: null,
    nicknameChanged: ['nickname'],
    openWelcomeFinish: null,
    finalizeProfiling: null,
    profilingFinalized: ['payload'],
    openTourStart: null,
    finishWelcome: null
  },
  { prefix: 'welcome/' }
);

const initialState = {
  nickname: ''
};

const updateNickname = (state, action) => ({ ...state, nickname: action.nickname });

export default createReducer(initialState, {
  [Types.NICKNAME_CHANGED]: updateNickname
});

export const nickname = state => state.welcome.nickname;
