import { AppState, NetInfo } from 'react-native';
import store from '../store';

let wasOnline;
const updateState = isOnline => {
  if (wasOnline !== isOnline) {
    wasOnline = isOnline;
    store.dispatch({ type: 'offline/STATUS_CHANGED', payload: { online: isOnline } });
  }
};

export default () => {
  NetInfo.isConnected.addEventListener('connectionChange', updateState);
  AppState.addEventListener('change', () => {
    NetInfo.isConnected.fetch().then(updateState);
  });
};
