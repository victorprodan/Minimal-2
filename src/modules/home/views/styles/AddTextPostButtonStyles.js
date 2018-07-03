import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  // level 1
  container: {
    height: theme.metrics.device.height - theme.metrics.statusBar.height - theme.metrics.header.height,
    flex: 1,
    width: theme.metrics.device.width,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 10,
    marginBottom: 12
  },
  // level 2
  shareContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginLeft: 20,
    marginBottom: 12
  },
  headerContainer: {
    flexDirection: 'row'
  },
  avatar: {
    paddingLeft: 220
  },
  swipeTextContainer: {
    flexDirection: 'row'
  },
  swipeText: {
    color: theme.colors.primaryText,
    fontSize: 14
  },
  actionContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 4,
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  // level 3
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  userNameContainer: {
    justifyContent: 'center',
    flexDirection: 'column'
  },
  userName: {
    marginLeft: 15,
    fontSize: 22,
    fontWeight: '600',
    color: theme.colors.primaryText,
    width: theme.metrics.device.width - 90
  },
  textContainer: {
    marginVertical: 20,
    flex: 1,
    color: theme.colors.primaryText,
    fontSize: 26
  },
  buttonStyle: {
    width: 60,
    height: 28
  },
  buttonContainerStyle: {
    justifyContent: 'flex-end'
  },
  //level 4
  actionText: {
    marginLeft: 5,
    fontSize: 14,
    color: theme.colors.primaryText
  }
});
