import datastoreReducer from './datastoreReducer';
import applicationReducer from '../modules/reducer';
import volatileReducer from '../modules/volatileReducer';
import offlineReducer from './offline/reducer';
import reactNavigationReducer from '../navigation/reactNavigationReducer';
import navigationReducer from '../navigation/reducer';
import loginReducer from '../modules/login/reducer';
import homeReducer from '../modules/home/reducer';
import cameraReducer from '../modules/camera/reducer';
import hiveReducer from '../modules/hive/reducer';
import welcomeReducer from '../modules/welcome/reducer';

export default {
  data: datastoreReducer,
  application: applicationReducer,
  volatile: volatileReducer,
  offline: offlineReducer,
  nav: reactNavigationReducer, // react-navigation
  navigation: navigationReducer,
  login: loginReducer,
  home: homeReducer,
  camera: cameraReducer,
  hive: hiveReducer,
  welcome: welcomeReducer
};
