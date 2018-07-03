import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.snow,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.colors.lightGrey
  },
  descriptionText: {
    marginBottom: 10,
    fontSize: 15
  },
  bar: {
    paddingVertical: 5
  }
});
