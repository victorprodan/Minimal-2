import Pushwoosh from 'pushwoosh-react-native-plugin';
import { DeviceEventEmitter } from 'react-native';
import Config from 'react-native-config';
import { AppState, Platform } from 'react-native';
import store from '../redux/store';
import Notification from '../lib/Notification';
import { Creators as HomeActions } from '../modules/home/reducer';
import { Creators as VolatileActions } from '../modules/volatileReducer';

let deviceToken = null;

Pushwoosh.init({
  pw_appid: Config.PUSHWOOSH_APPID,
  project_number: Config.FCM_SENDER_ID
});

Pushwoosh.register(token => (deviceToken = token));

if (Platform.OS == 'ios') {
  Pushwoosh.setShowPushnotificationAlert(false);
} else {
  Pushwoosh.setLightScreenOnNotification(true);
  Pushwoosh.setEnableLED(true);
}

DeviceEventEmitter.addListener('pushReceived', notification => {
  console.log('pushReceived: ', notification); // eslint-disable-line

  const message = Platform.OS == 'ios' ? notification.aps.alert : notification.title;
  const foreground = AppState.currentState === 'active';
  const data = notification.u && JSON.parse(notification.u);
  const postId = data && data.post_id;

  if (foreground) {
    Notification.show({
      type: 'info',
      title: 'New activity',
      message: message,
      onPress: () => postId && store.dispatch(HomeActions.openPostDetailsFromPN(postId))
    });
  }
});

DeviceEventEmitter.addListener('pushOpened', notification => {
  console.log('pushOpened: ', notification); // eslint-disable-line

  const data = notification.u && JSON.parse(notification.u);
  const postId = data && data.post_id;
  if (postId) {
    navigateToPost(postId);
  }
});

const navigateToPost = postId => {
  if (store.getState().volatile.initFinished) {
    // imMinimalate redirect
    store.dispatch(HomeActions.openPostDetailsFromPN(postId));
  } else {
    // the init code will perform the redirect after the app is loaded
    store.dispatch(VolatileActions.pushNotificationReceived(postId));
  }
};

export default {
  getDeviceInfo() {
    return { token: deviceToken, os: 'ios' };
  }
};
