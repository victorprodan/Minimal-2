import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    flex: 1
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowColor: '#444',
    shadowRadius: 1,
    position: 'absolute'
  }
});
