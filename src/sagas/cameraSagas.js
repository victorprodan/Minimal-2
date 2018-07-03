import { put, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
import FetchBlob from 'react-native-fetch-blob';
import Api from '../services/api';
import Notification from '../lib/Notification';
import { Types, Creators, image, video } from '../modules/camera/reducer';
import store from '../redux/store';

export function* navigateToPhotoConfirmation() {
  yield put(NavigationActions.navigate({ routeName: 'PhotoConfirmation' }));
}

export function* navigateToMinimalaConfirmation() {
  yield put(NavigationActions.navigate({ routeName: 'MinimalaConfirmation' }));
}

export function* navigateToVideoConfirmation() {
  yield put(NavigationActions.navigate({ routeName: 'VideoConfirmation' }));
}

export function* discardImage() {
  const imagePath = yield select(image);
  FetchBlob.fs.unlink(imagePath);
}

export function* discardVideo() {
  const videoPath = yield select(video);
  FetchBlob.fs.unlink(videoPath);
}

export function* navigateHomeFromConfirmation() {
  yield navigateHomeAction();
}

export function* saveImage({ imageUri, comment, shouldPost }) {
  yield navigateHomeAction();

  if (!shouldPost) {
    yield Notification.show({
      title: '',
      message: 'The image is being uploaded in the background and will appear in your profile in a few seconds',
      type: 'info'
    });
  }

  yield put({
    type: 'transloadit/UPLOAD_FILE',
    meta: {
      offline: {
        effect: {
          fileUri: imageUri,
          extraParams: { comment, post: shouldPost ? '1' : '0' },
          authToken: Api.getAuthToken()
        },
        commit: { type: Types.UPLOAD_SUCCESS },
        rollback: { type: Types.UPLOAD_FAIL }
      }
    }
  });
}

export function* saveVideo({ videoUri, comment }) {
  yield navigateHomeAction();

  yield put({
    type: 'transloadit/UPLOAD_FILE',
    meta: {
      offline: {
        effect: { fileUri: videoUri, template: 'video', extraParams: { comment }, authToken: Api.getAuthToken() },
        commit: { type: Types.UPLOAD_SUCCESS },
        rollback: { type: Types.UPLOAD_FAIL }
      }
    }
  });
}

export function* cameraError({ error }) {
  yield Notification.show({ type: 'error', title: 'Camera error', message: error });
}

function* navigateHomeAction() {
  const navState = yield select(state => state.nav);
  const cameraRoute = navState.routes[0].routes[0].routes[0].routes[1]; // App.DrawerClose.Home.Camera
  yield put(NavigationActions.back({ key: cameraRoute.key }));
}

export const openAndroidCamera = (MinimalaType = 'photo') => {
  ImagePicker.launchCamera(
    {
      MinimalaType,
      quality: 0.9,
      noData: true
    },
    response => {
      if (response.didCancel) {
        return;
      } else if (response.error) {
        store.dispatch(Creators.cameraError(response.error));
      } else {
        if (MinimalaType === 'photo') {
          store.dispatch(Creators.takePicture(`file://${response.path}`));
        } else {
          store.dispatch(Creators.takeVideo(`file://${response.path}`));
        }
      }
    }
  );
};
