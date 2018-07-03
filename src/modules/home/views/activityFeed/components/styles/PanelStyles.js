import { StyleSheet } from 'react-native';
import theme from '../../../../../../theme';

export default StyleSheet.create({
  // level 1
  sectionHeader: {
    backgroundColor: theme.colors.primary,
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  sectionHeaderText: {
    color: theme.colors.snow,
    fontSize: 15
  },
  iconContainerStyle: {
    paddingRight: 20
  }
});
