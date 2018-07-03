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
    flex: 2
  },
  descriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 6
  },
  loader: {
    width: 80,
    height: 80
  },
  lottieLoader: {
    height: 80,
    width: 80
  },
  appHeader: {
    fontSize: 30,
    color: theme.colors.primaryText,
    fontWeight: 'bold'
  },
  linkContainer: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButtonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1
  },
  // level 4
  appLogo: {
    top: theme.metrics.device.height * 0.25,
    width: theme.metrics.device.width / 4,
    resizeMode: 'contain'
  },
  whiteText: {
    fontSize: 17,
    color: theme.colors.primaryText,
    backgroundColor: 'transparent',
    letterSpacing: -0.6,
    lineHeight: 23
  },
  linkText: {
    fontSize: 12,
    backgroundColor: 'transparent',
    letterSpacing: -0.3,
    color: theme.colors.primaryText
  },
  linkTextLine: {
    flexDirection: 'row'
  },
  // Bold Text
  boldText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: theme.colors.snow,
    backgroundColor: 'transparent',
    lineHeight: 23
  },

  // TappableLink
  tappableLinkText: {
    color: theme.colors.alert,
    fontSize: 12,
    backgroundColor: 'transparent',
    letterSpacing: -0.3
  }
});
