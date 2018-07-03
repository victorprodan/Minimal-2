import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  camera: {
    flex: 1
  },
  buttonsContainer: {
    height: 100,
    width: '100%',
    position: 'absolute',
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
