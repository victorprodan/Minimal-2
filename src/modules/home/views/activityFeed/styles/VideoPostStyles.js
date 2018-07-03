import { StyleSheet } from 'react-native';
import theme from '../../../../../theme';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.snow,
    paddingTop: 17,
    paddingBottom: 5
  },
  video: {
    height: 300,
    width: '100%'
  },
  stampAndActionContainer: {
    paddingHorizontal: 10
  },
  headerContainer: {
    paddingHorizontal: 10
  }
});
