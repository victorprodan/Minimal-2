import StackNavigator from './navigators/StackNavigator';
import Welcome from '../modules/welcome/screens/Welcome';
import Nickname from '../modules/welcome/screens/Nickname';
import WelcomeFinish from '../modules/welcome/screens/WelcomeFinish';

const WelcomeNavigator = StackNavigator({
  Welcome: { screen: Welcome },
  Nickname: { screen: Nickname },
  WelcomeFinish: { screen: WelcomeFinish }
});

export default WelcomeNavigator;
