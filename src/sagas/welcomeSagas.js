import { Keyboard } from 'react-native';
import { put, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { ApiActions } from '../services/api';
import UserRepository from '../repositories/userRepository';
import { Types as WelcomeActions, nickname as nicknameSelector } from '../modules/welcome/reducer';
import { Types as ApplicationActions } from '../modules/reducer';

export function* openNickname() {
  yield put(NavigationActions.navigate({ routeName: 'Nickname' }));
}

export function* openWelcomeFinish() {
  yield Keyboard.dismiss();
  yield put(NavigationActions.navigate({ routeName: 'WelcomeFinish' }));
}

export function* finalizeProfiling() {
  const nickname = yield select(nicknameSelector);
  yield put(
    ApiActions.directCall(UserRepository.finalizeProfiling(nickname), {
      commit: WelcomeActions.PROFILING_FINALIZED,
      rollback: ApplicationActions.INIT_ERROR
    })
  );
}

export function* openTourStart() {
  yield put(
    NavigationActions.reset({ index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'Carousel' })] })
  );
}

export function* finishWelcome() {
  yield put(
    NavigationActions.reset({ index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'App' })] })
  );
}
