import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  infoText: {
    fontSize: 22,
    color: theme.colors.primaryText,
    backgroundColor: 'transparent',
    textAlign: 'left',
    marginHorizontal: 20,
    marginVertical: 30
  },
  menuContainer: {
    marginHorizontal: 20
  },

  // Setting
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: theme.metrics.device.width - 40,
    height: 60
  },
  settingText: {
    fontSize: 17,
    color: theme.colors.primaryText,
    backgroundColor: 'transparent'
  }
});
