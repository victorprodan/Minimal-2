import { StyleSheet } from 'react-native';
import theme from '../../../../../theme';

export default StyleSheet.create({
  // level 1
  container: {
    flex: 1,
    width: '100%',
    height: theme.metrics.device.height - theme.metrics.header.height - theme.metrics.statusBar.height,
    backgroundColor: theme.colors.snow,
    paddingTop: 17,
    paddingBottom: 5
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: theme.metrics.device.height - theme.metrics.header.height - theme.metrics.statusBar.height,
    backgroundColor: theme.colors.snow,
    opacity: 0
  },
  backgroundImage: {
    width: '100%',
    height: theme.metrics.device.height - theme.metrics.header.height - theme.metrics.statusBar.height
  },
  imageContainer: {
    alignItems: 'center',
    flex: 6,
    alignSelf: 'center',
    justifyContent: 'center',
    width: theme.metrics.device.width,
    height: '100%',
    marginBottom: 10
  },
  imageContentContainer: {
    alignSelf: 'center',
    paddingTop: 20
  },
  // level 2
  stampAndActionContainer: {
    // paddingBottom: 20,
    height: 100,
    flex: 2,
    paddingHorizontal: 10,
    justifyContent: 'flex-end'
  },
  headerContainer: {
    justifyContent: 'flex-start',
    flex: 2,
    height: 70,
    width: '100%',
    paddingHorizontal: 10
  }
});
