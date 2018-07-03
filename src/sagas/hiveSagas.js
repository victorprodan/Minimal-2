import { put, select } from 'redux-saga/effects';
import { Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { NavigationActions } from 'react-navigation';
import store from '../redux/store';
import Api, { ApiActions } from '../services/api';
import LoginRepository from '../repositories/loginRepository';
import UserRepository from '../repositories/userRepository';
import ImageRepository from '../repositories/imageRepository';
import { Creators as LoginCreators } from '../modules/login/reducer';
import {
  Types as HiveTypes,
  Creators as HiveActions,
  profileSettingBeingEdited,
  profileSettingValue
} from '../modules/hive/reducer';
import ErrorHandler from '../services/errorHandler';
import Notification from '../lib/Notification';
import * as ImageUtil from '../util/Image';

export function* openImageDetails({ image }) {
  yield put(NavigationActions.navigate({ routeName: 'ImageDetails', params: { id: image.id } }));
}

export function* deleteAccount() {
  yield Alert.alert(
    'Delete account?',
    'All your posts, comments, photos and other data associated with the account will be permanently deleted and cannot be recovered.',
    [{ text: 'Cancel', style: 'cancel' }, { text: 'Delete', style: 'destructive', onPress: performDeleteAccount }]
  );
}

const performDeleteAccount = () => {
  store.dispatch(ApiActions.directCall(LoginRepository.deleteAccount()));
  store.dispatch(LoginCreators.logout());
};

export function* updateProfile() {
  const setting = yield select(profileSettingBeingEdited);
  const value = yield select(profileSettingValue);

  yield put(
    ApiActions.directCall(LoginRepository.updateProfileValue(setting, value), {
      commit: HiveTypes.SAVE_PROFILE_SUCCESS,
      rollback: HiveTypes.SAVE_PROFILE_ERROR
    })
  );
}

export function* saveProfileError({ error }) {
  yield ErrorHandler.notify('Save profile error', error);
}

export function* changeProfilePicture() {
  yield ImagePicker.showImagePicker({ noData: true }, response => {
    if (response.didCancel) {
      // nothing to do really
    } else if (response.error) {
      store.dispatch(HiveActions.cameraError(response.error));
    } else {
      store.dispatch(HiveActions.uploadProfilePictureStarted(ImageUtil.getImageUri(response)));
      store.dispatch({
        type: 'transloadit/UPLOAD_FILE',
        meta: {
          offline: {
            effect: { fileUri: ImageUtil.getImageUri(response), template: 'profile', authToken: Api.getAuthToken() },
            commit: { type: HiveTypes.UPLOAD_PROFILE_PICTURE_SUCCESS },
            rollback: { type: HiveTypes.UPLOAD_PROFILE_PICTURE_FAIL }
          }
        }
      });
    }
  });
}

export function* profileCameraError({ error }) {
  yield Notification.show({ type: 'error', title: 'Camera error', message: error });
}

export function* updateSetting({ setting, value }) {
  yield put(ApiActions.directCall(UserRepository.updateSetting(setting, value)));
}

export function* deleteImage({ id }) {
  yield put(NavigationActions.back());
  yield put(ApiActions.directCall(ImageRepository.deleteImage(id)));
}
