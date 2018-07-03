import { AsyncStorage } from 'react-native';
import jsonapiDatastorePersistence from '../transforms/jsonapiDatastorePersistence';

export const persist = {
  reducerVersion: '1',
  storeConfig: {
    key: 'persist',
    storage: AsyncStorage,
    blacklist: ['volatile', 'nav', 'hive', 'home', 'camera', 'welcome'],
    transforms: [jsonapiDatastorePersistence],
    debug: __DEV__
  }
};

export default { persist };
