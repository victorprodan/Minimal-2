import { DrawerNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';
import SettingsNavigator from './SettingsNavigator';
import MyProfileNavigator from './MyProfileNavigator';
import Drawer from './views/Drawer';

const AppNavigator = DrawerNavigator(
  {
    Home: { screen: HomeNavigator },
    Settings: { screen: SettingsNavigator },
    MyProfile: { screen: MyProfileNavigator }
  },
  {
    contentComponent: Drawer
  }
);

export default AppNavigator;
