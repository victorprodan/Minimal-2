import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  // level 1
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  // level 2
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  // level 3
  containerPage: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  // level 4
  MinimalLogoText: {
    position: 'absolute',
    top: theme.metrics.device.height * 0.1,
    resizeMode: 'contain'
  },
  carousel: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignItems: 'center'
  },
  descriptionContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: theme.metrics.device.height * 0.7
  },
  buttonContainer: {
    alignItems: 'center',
    bottom: theme.metrics.device.height * 0.07
  },
  button: {
    height: theme.metrics.device.height * 0.08,
    width: theme.metrics.device.width * 0.8,
    borderRadius: 4,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 20,
    letterSpacing: -0.6,
    fontWeight: 'bold',
    color: theme.colors.snow
  },
  // level 5
  whiteText: {
    fontSize: 17,
    color: theme.colors.snow,
    backgroundColor: 'transparent',
    letterSpacing: -0.6,
    lineHeight: 23
  },
  boldText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: theme.colors.secondary,
    backgroundColor: 'transparent',
    lineHeight: 23
  },
  // Pagination
  paginationContainer: {
    backgroundColor: 'transparent',
    bottom: theme.metrics.device.height * 0.05,
    flexDirection: 'row',
    width: theme.metrics.device.width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  page: {
    width: 8,
    height: 8,
    marginRight: 10,
    borderRadius: 4,
    backgroundColor: theme.colors.snow
  },
  pageSelected: {
    width: 8,
    height: 8,
    marginRight: 10,
    borderRadius: 4,
    backgroundColor: theme.colors.secondary
  }
});
