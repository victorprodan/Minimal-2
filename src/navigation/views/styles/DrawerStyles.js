import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const item = {
  fontSize: 18,
  backgroundColor: 'transparent',
  paddingLeft: 10
};

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  topBarImage: {
    width: '100%',
    height: theme.metrics.header.totalHeight,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 20
  },
  logo: {
    marginBottom: 5
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  sectionsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingLeft: 45
  },

  // MenuItem
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15
  },
  iconStyle: {
    backgroundColor: 'transparent'
  },
  currentItem: {
    color: theme.colors.alert,
    ...item,
    fontWeight: '600'
  },
  item: {
    color: theme.colors.primaryText,
    ...item
  }
});
