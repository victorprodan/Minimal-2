import { TabNavigator, TabBarBottom } from 'react-navigation';
import theme from '../../theme';

const defaults = {
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: theme.colors.snow,
    inactiveTintColor: theme.colors.purple,
    labelStyle: { marginBottom: 5 },
    style: { backgroundColor: theme.colors.secondary }
  }
};

export default (screens, options = {}) => TabNavigator(screens, { ...defaults, ...options });
