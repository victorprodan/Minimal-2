import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5
  },
  image: {
    width: theme.metrics.device.width / 2 - 15,
    height: theme.metrics.device.width / 2 - 15,
    marginVertical: 5,
    marginHorizontal: 5
  }
});
