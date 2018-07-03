import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 20,
    borderColor: theme.colors.primaryText,
    borderWidth: 3
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginBottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primaryText
  },
  editIcon: {
    transform: [{ rotate: '45deg' }],
    opacity: 1
  }
});
