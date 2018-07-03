import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: '#000'
  },
  image: {
    width: '100%',
    height: theme.metrics.device.height - theme.metrics.header.totalHeight + 40,
    backgroundColor: '#000'
  },
  spinnerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center'
  }
});
