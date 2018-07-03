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
    justifyContent: 'center',
    flex: 6
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3
  },
  firstDescriptionContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 5
  },
  // level 4
  appLogo: {
    top: theme.metrics.device.height * 0.05,
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 21,
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
