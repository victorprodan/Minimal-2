import { StyleSheet } from 'react-native';
import theme from '../../../../../theme';

export default StyleSheet.create({
  // level 1
  container: {
    width: theme.metrics.device.width,
    height: theme.metrics.device.height - theme.metrics.statusBar.height - theme.metrics.header.totalHeight,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 17,
    paddingBottom: 5
  },
  linkContainer: {
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
    marginBottom: 20
  }
});
