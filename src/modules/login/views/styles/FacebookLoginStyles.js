import { StyleSheet, Platform } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: 51,
    width: 300,
    borderRadius: 26,
    backgroundColor: theme.colors.primaryText
  },
  fontStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: -0.6,
    ...Platform.select({
      android: {
        paddingBottom: 3
      }
    })
  }
});
