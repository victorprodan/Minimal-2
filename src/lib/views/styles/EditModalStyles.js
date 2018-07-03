import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  modal: {
    margin: 0
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '80%',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    padding: 10,
    fontSize: 36
  },
  spinnerContainer: {
    opacity: 0.7,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: theme.colors.primaryText,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: theme.colors.primaryText
  },
  cancelButton: {
    backgroundColor: theme.colors.grey
  },
  saveButtonEnabled: {
    backgroundColor: theme.colors.alert
  },
  saveButtonDisabled: {
    backgroundColor: theme.colors.primaryText
  },
  saveButtonEnabledText: {
    color: theme.colors.snow
  },
  saveButtonDisabledText: {
    color: theme.colors.grey
  },

  // Button
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: theme.colors.snow,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
