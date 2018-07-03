import { StyleSheet } from 'react-native';
import theme from '../../../../../../theme';

export default StyleSheet.create({
  // level 1
  postContainer: {
    flexDirection: 'column',
    marginBottom: 17
  },
  userInfoContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginBottom: 20
  },
  // level 2
  contentsContainer: {
    marginLeft: 10,
    paddingHorizontal: 10
  },
  // level 3
  headerContainer: {
    alignSelf: 'flex-start'
  },
  headerText: {
    color: theme.colors.primaryText,
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: -0.3,
    marginBottom: 5,
    marginTop: 5
  },
  mainText: {
    fontSize: 18,
    letterSpacing: -0.3,
    color: theme.colors.primaryText,
    marginRight: 50,
    paddingBottom: 2
  },
  editedLabel: {
    fontSize: 15,
    color: theme.colors.alert
  },

  // temp
  userNameContainer: {
    justifyContent: 'center',
    flexDirection: 'column'
  },
  userName: {
    marginLeft: 15,
    fontSize: 22,
    fontWeight: '600',
    color: theme.colors.primaryText
  }
});
