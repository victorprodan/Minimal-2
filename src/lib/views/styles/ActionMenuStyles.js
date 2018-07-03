import { StyleSheet } from 'react-native';
import theme from '../../../theme';

export default StyleSheet.create({
  modalContainer: {
    margin: 0,
    padding: 0,
    width: '100%'
  },
  actionMenuContainer: {
    backgroundColor: theme.colors.snow,
    bottom: 0,
    position: 'absolute',
    width: '100%'
  },
  actionMenuItem: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  iconStyle: {
    marginRight: 10,
    paddingTop: 2
  },
  menuTitle: {
    fontSize: 17
  }
});
