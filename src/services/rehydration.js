import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import config from '../config/redux';
import { Creators as StartupActions } from '../modules/reducer';

const updateReducers = store => {
  const reducerVersion = config.persist.reducerVersion;
  const startup = () => store.dispatch(StartupActions.startup());

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        // console.log('Reducer Version Change Detected');
        persistStore(store, {}, startup).purge();
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, {}, startup);
      }
    })
    .catch(() => {
      persistStore(store, {}, startup);
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};

export default { updateReducers };
