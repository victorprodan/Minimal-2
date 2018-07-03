import { put } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { Creators as HomeActions } from '../modules/home/reducer';
import { ApiActions } from '../services/api';
import { Types as DatastoreTypes } from '../redux/datastoreReducer';
import DataRepository from '../repositories/initialDataRepository';
import ImageRepository from '../repositories/imageRepository';

export function* navigateBack() {
  yield put(NavigationActions.back());
}

export function* openMyProfile() {
  yield put(NavigationActions.navigate({ routeName: 'MyProfile' }));
  yield put(ApiActions.directCall(ImageRepository.getImages(), { commit: DatastoreTypes.IMAGES_RETRIEVED }));
}

export function* onNavigation({ routeName }) {
  if (routeName === 'Home') {
    yield put(HomeActions.navigatedHome());
    yield put(
      ApiActions.directCall(DataRepository.getData(), {
        commit: DatastoreTypes.INITIAL_DATA_RETRIEVED,
        rollback: DatastoreTypes.INIT_ERROR
      })
    );
  }
}
