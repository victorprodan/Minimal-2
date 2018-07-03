import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
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
  textInput: {
    height: 50,
    color: theme.colors.primaryText,
    fontSize: 22,
    margin: 10
  },
  buttonGroupBackground: {
    height: 50,
    borderColor: theme.colors.primaryText
  },
  buttonsContainer: {
    height: 30,
    marginTop: 10,
    width: '95%',
    backgroundColor: theme.colors.primaryText,
    borderColor: theme.colors.snow,
    borderRadius: 4
  },
  buttonGroupText: {
    fontSize: 14,
    color: theme.colors.snow
  },
  buttonGroupTextSelected: {
    fontSize: 14,
    color: theme.colors.primaryText
  },
  actionContainer: {
    backgroundColor: theme.colors.snow,
    height: theme.metrics.device.height * 0.4,
    justifyContent: 'flex-end'
  }
});
