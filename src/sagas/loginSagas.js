import { NavigationActions } from 'react-navigation';
import { call, put, select } from 'redux-saga/effects';
import PN from '../config/pushNotifications';
import SplashScreen from '../lib/SplashScreen';
import { Creators, Types, authProviderUser } from '../modules/login/reducer';
import { Types as AppActions, loginProvider } from '../modules/reducer';
import store from '../redux/store';
import DataRepository from '../repositories/initialDataRepository';
import LoginRepository from '../repositories/loginRepository';
import ActionCable from '../services/actionCable';
import Api, { ApiActions } from '../services/api';
import ErrorHandler from '../services/errorHandler';
import Facebook from '../services/facebook';

export function* login() {
  yield Facebook.login()
    .then(user => store.dispatch(Creators.facebookLoginDetected(user)))
    .catch(error => store.dispatch(Creators.loginError(error)));
}

export function* retrieveUser() {
  const provider = yield select(loginProvider);

  if (!provider) {
    // no previous login detected
    return yield put(Creators.loginError(null));
  }

  try {
    const user = yield call(Facebook.getUserInfo);
    return yield put(Creators.facebookLoginDetected(user));
  } catch (error) {
    return yield put(Creators.loginError(error));
  }
}

export function* facebookLogin({ user }) {
  // always true for testing
  if (user.email) {
    return yield put(NavigationActions.navigate({ routeName: 'EmailInput' }));
  }
  yield put(
    ApiActions.directCall(LoginRepository.createFromFacebook(user), {
      commit: Types.LOGIN_SUCCESS,
      rollback: Types.LOGIN_ERROR
    })
  );
}

export function* loginSuccess() {
  yield put(
    ApiActions.directCall(DataRepository.getData(), {
      commit: AppActions.INIT_FINISHED,
      rollback: AppActions.INIT_ERROR
    })
  );
}

export function* openTerms() {
  yield put(NavigationActions.navigate({ routeName: 'Terms' }));
}

export function* openPrivacy() {
  yield put(NavigationActions.navigate({ routeName: 'Privacy' }));
}

export function* loginError({ error }) {
  if (error) {
    ErrorHandler.notify('Login error', error);
  }
  yield SplashScreen.close();
}

export function* logout() {
  yield put(
    NavigationActions.reset({ index: 0, key: null, actions: [NavigationActions.navigate({ routeName: 'Login' })] })
  );

  yield put(ApiActions.directCall(LoginRepository.logout(PN.getDeviceInfo())));

  const provider = yield select(loginProvider);
  if (provider === 'facebook') {
    Facebook.logOut();
  }

  Api.setAuthToken(null);
  ActionCable.setAuthToken(null);

  yield put(Creators.logoutSuccess());
}

export function* saveEmail() {
  const user = yield select(authProviderUser);
  yield put(Creators.facebookLoginDetected(user));
}
