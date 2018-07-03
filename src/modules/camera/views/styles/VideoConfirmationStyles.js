import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  // todo: clean up
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.primaryText
  },
  overallContainer: {
    flex: 1
  },
  image: {
    flex: 1
  },
  keyboardAvoidingContainer: {
    justifyContent: 'flex-end'
  },
  videoContainer: {
    flex: 1,
    backgroundColor: 'black'
  },
  video: {
    height: '100%'
  },
  actionContainer: {
    backgroundColor: theme.colors.snow
  },
  textInput: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    fontSize: 16,
    color: theme.colors.darkBlue
  },
  buttonGroupBackground: {
    height: 50,
    backgroundColor: theme.colors.primary
  },
  buttonsContainer: {
    height: 30,
    marginTop: 10,
    width: '95%',
    backgroundColor: 'transparent',
    borderColor: theme.colors.snow,
    borderRadius: 4
  },
  buttonGroupText: {
    fontSize: 14,
    color: theme.colors.snow
  },
  buttonGroupTextSelected: {
    fontSize: 14,
    color: theme.colors.primary
  }
});
