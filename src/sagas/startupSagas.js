import { put, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { Creators as LoginActions } from '../modules/login/reducer';
import { Creators as HomeActions } from '../modules/home/reducer';
import { Types as AppActions } from '../modules/reducer';
import { user } from '../redux/datastoreReducer';
import ActionCable from '../services/actionCable';
import SplashScreen from '../lib/SplashScreen';
import Api, { ApiActions } from '../services/api';
import DataRepository from '../repositories/initialDataRepository';
import LoginRepository from '../repositories/loginRepository';
import ErrorHandler from '../services/errorHandler';
import { redirectToPost } from '../modules/volatileReducer';
import startOfflineWatcher from '../redux/offline/watcher';
import PN from '../config/pushNotifications';

export function* startup() {
  startOfflineWatcher();
  yield put({ type: 'offline/OFFLINE_BUSY', busy: false });

  const loggedInUser = yield select(user);
  if (loggedInUser) {
    Api.setAuthToken(loggedInUser.auth_token);
    ActionCable.setAuthToken(loggedInUser.auth_token);

    yield put(
      ApiActions.directCall(DataRepository.getData(), {
        commit: AppActions.INIT_FINISHED,
        rollback: AppActions.INIT_ERROR
      })
    );
  } else {
    yield put(LoginActions.retrieveUser());
  }
}

export function* initFinished() {
  const loggedInUser = yield select(user);
  const pnPost = yield select(redirectToPost);
  yield put(navOnInitFinished(loggedInUser, pnPost));

  yield SplashScreen.close();

  yield put(ApiActions.directCall(LoginRepository.registerDevice(PN.getDeviceInfo())));
}

export function* initError({ error }) {
  yield put(resetNavigation('Login'));
  yield SplashScreen.close();
  yield ErrorHandler.notify('Initialization error', error);
}

const navOnInitFinished = (loggedInUser, pnPost) => {
  if (loggedInUser.profiling_completed)
    if (pnPost) {
      return HomeActions.openPostDetailsFromPN(pnPost); // push notification received while the app was sleeping
    } else {
      return resetNavigation('App'); // normal navigation
    }
  else return resetNavigation('Welcome'); // profiling, first app start
};

const resetNavigation = route =>
  NavigationActions.reset({ index: 0, key: null, actions: [NavigationActions.navigate({ routeName: route })] });
