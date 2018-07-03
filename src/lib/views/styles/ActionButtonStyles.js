import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const CONTAINER = {
  width: '100%',
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 1
};

export default StyleSheet.create({
  enabled: {
    ...CONTAINER,
    backgroundColor: theme.colors.primaryText,
    width: theme.metrics.device.width
  },
  disabled: {
    ...CONTAINER,
    backgroundColor: theme.colors.disabled
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: theme.colors.snow
  }
});
