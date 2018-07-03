import { StyleSheet, Platform } from 'react-native';
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
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1
  },
  firstDescriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  secondDescriptionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  contentContainer: {
    width: theme.metrics.device.width,
    flex: 1,
    justifyContent: 'flex-end'
  },
  submitButtonContainer: {
    flexShrink: 1
  },
  // level 4
  title: {
    fontSize: 21,
    color: theme.colors.primaryText,
    backgroundColor: 'transparent',
    letterSpacing: -0.5,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 40
  },
  firstDescriptionText: {
    fontSize: 17,
    backgroundColor: 'transparent',
    letterSpacing: -0.4,
    color: theme.colors.snow,
    lineHeight: 23
  },
  secondDescriptionText: {
    fontSize: 13,
    backgroundColor: 'transparent',
    letterSpacing: -0.3,
    color: theme.colors.primaryText,
    lineHeight: 17
  },
  nicknameInput: {
    width: '100%',
    paddingHorizontal: 10,
    backgroundColor: theme.colors.snow,
    fontSize: 20,
    borderTopWidth: 1,
    borderColor: theme.colors.grey,
    height: Platform.OS === 'ios' ? 65 : 45,
    alignItems: 'center'
  },
  charactersLeftStyle: {
    fontSize: 12,
    color: theme.colors.grey,
    justifyContent: 'flex-end',
    position: 'absolute',
    backgroundColor: 'transparent',
    letterSpacing: -0.2,
    bottom: Platform.OS === 'ios' ? 25 : 18,
    left: theme.metrics.device.width * 0.7
  },
  buttonContainerStyle: {
    marginRight: 0,
    marginLeft: 0
  },
  buttonStyle: {
    height: theme.metrics.device.height * 0.07,
    paddingTop: 8,
    paddingBottom: 12
  }
});
