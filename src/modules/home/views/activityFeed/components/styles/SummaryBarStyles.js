import { StyleSheet } from 'react-native';
import theme from '../../../../../../theme';

export default StyleSheet.create({
  // level 1
  detailsContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'flex-end'
  },
  // level 2
  dateText: {
    color: theme.colors.primaryText,
    fontSize: 16
  },
  commentsContainer: {
    flexDirection: 'row'
  },
  // level 3
  iconComment: {
    marginLeft: 30
  },
  commentsText: {
    color: theme.colors.primaryText,
    fontSize: 14,
    marginLeft: 5
  }
});
