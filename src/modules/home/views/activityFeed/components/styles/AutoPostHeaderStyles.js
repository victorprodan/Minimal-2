import { StyleSheet } from 'react-native';
import theme from '../../../../../../theme';

export default StyleSheet.create({
  // level 1
  postContainer: {
    flex: 1,
    marginLeft: 20,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 17
  },
  // level 2
  contentsContainer: {
    flex: 1
  },
  messageContainer: {
    width: theme.metrics.device.width,
    paddingRight: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userInfoContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 20
  },

  // level 3
  boldText: {
    fontWeight: 'bold',
    color: theme.colors.alert,
    paddingRight: 5
  },
  logo: {
    marginTop: 3,
    marginRight: 10
  },
  text: {
    color: theme.colors.primaryText,
    fontSize: 24,
    letterSpacing: -0.3,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 2
  },
  profilePictureChanged: {
    height: 200,
    width: theme.metrics.device.width
  },
  profilePictureContainer: {
    paddingTop: 60,
    justifyContent: 'center',
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
  }
  // avatarStyle: {
  //   paddingLeft: 30,
  //   paddingTop: 20
  // }
});
