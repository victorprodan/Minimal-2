import EmailInput from '../modules/login/screens/EmailInput';
import Login from '../modules/login/screens/Login';
import Privacy from '../modules/login/screens/Privacy';
import Terms from '../modules/login/screens/Terms';
import Carousel from '../modules/welcome/screens/Carousel';
import AppNavigator from './AppNavigator';
import WelcomeNavigator from './WelcomeNavigator';
import StackNavigator from './navigators/StackNavigator';

const TopNavigator = StackNavigator({
  App: { screen: AppNavigator, navigationOptions: () => ({ header: null }) },
  Login: { screen: Login },
  Welcome: { screen: WelcomeNavigator, navigationOptions: () => ({ header: null }) },
  Terms: { screen: Terms },
  Privacy: { screen: Privacy },
  EmailInput: { screen: EmailInput },
  Carousel: { screen: Carousel }
});

export default TopNavigator;
