import { StyleSheet } from 'react-native';
import theme from '../../../../../../theme';

export default StyleSheet.create({
  // level 1
  actionsContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  // level 2
  actionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 4
  },
  moreActionsContainer: {
    flexShrink: 1,
    marginTop: 2
  },
  // level 3
  actionText: {
    fontSize: 15,
    color: theme.colors.primaryText,
    marginLeft: 6
  },
  // small fixes
  iconFix: {
    marginTop: 5
  }
});
