import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  // level 1
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  // level 2
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  // level 3
  logoContainer: {
    alignItems: 'center',
    flex: 8,
    top: theme.metrics.device.height * 0.1
  },
  titleContainer: {
    top: theme.metrics.device.height * 0.02,
    alignItems: 'center',
    flex: 2
  },
  firstDescriptionContainer: {
    alignItems: 'center',
    flex: 2
  },
  secondDescriptionContainer: {
    alignItems: 'center',
    flex: 4
  },
  // level 4
  appLogo: {
    top: theme.metrics.device.height * 0.14,
    height: 100,
    width: 100,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 21,
    paddingBottom: 20,
    color: theme.colors.primaryText,
    backgroundColor: 'transparent',
    letterSpacing: -0.5,
    fontWeight: 'bold'
  },
  descriptionText: {
    fontSize: 17,
    backgroundColor: 'transparent',
    letterSpacing: -0.4,
    color: theme.colors.primaryText,
    lineHeight: 23
  }
});
