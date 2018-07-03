import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  sectionContainer: {
    flex: 1,
    height: theme.metrics.device.height - theme.metrics.statusBar.height - theme.metrics.header.height,
    width: theme.metrics.device.width
  },
  newPostContainer: {
    height: theme.metrics.device.height - theme.metrics.statusBar.height - theme.metrics.header.height,
    width: theme.metrics.device.width
  },
  refreshButton: {
    position: 'absolute',
    top: 30,
    right: 20,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.snow,
    borderRadius: 20
  },
  contentContainer: {
    flex: 1,
    width: theme.metrics.device.width
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  itemContainer: {
    marginBottom: 12,
    backgroundColor: theme.colors.alert
  },
  postContainer: {
    flex: 1,
    backgroundColor: theme.colors.primaryText
  },
  // NewPostsIndicator
  newPostsContainer: {
    height: 45,
    width: '100%',
    backgroundColor: theme.colors.secondary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  newPostsText: {
    color: theme.colors.snow,
    fontWeight: '500',
    flex: 1,
    textAlign: 'center'
  },
  newPostsDismissIcon: {
    color: theme.colors.snow
  },
  newPostsDismissIconContainer: {
    marginRight: 20
  },

  // Footer
  footerContainer: {
    width: '100%'
  },
  footerSpinnerContainer: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },

  // Temp
  frontFace: {
    height: 300,
    backgroundColor: theme.colors.purple
  },
  backFace: {
    height: 300,
    backgroundColor: theme.colors.valid
  },
  base: {
    height: 300,
    backgroundColor: theme.colors.alert
  }
});
