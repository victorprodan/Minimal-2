import StackNavigator from './navigators/StackNavigator';
import Settings from '../modules/hive/screens/Settings';
import EditProfile from '../modules/hive/screens/EditProfile';
import Notifications from '../modules/hive/screens/Notifications';
import Terms from '../modules/login/screens/Terms';
import Privacy from '../modules/login/screens/Privacy';

const SettingsNavigator = StackNavigator({
  Settings: { screen: Settings },
  EditProfile: { screen: EditProfile },
  Notifications: { screen: Notifications },
  Terms: { screen: Terms },
  Privacy: { screen: Privacy }
});

export default SettingsNavigator;
