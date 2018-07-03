import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  // level 1
  container: {
    flex: 1
  },
  // level 2
  backgroundImage: {
    width: '100%',
    height: '100%'
  },
  // level 3
  backgroundOpacity: {
    flex: 1,
    opacity: 0.85,
    backgroundColor: theme.colors.snow
  },
  // level 4
  profileContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  // level 5
  nicknameText: {
    color: theme.colors.secondary,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    top: 15
  },
  nameText: {
    color: theme.colors.primaryText,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    paddingLeft: 20
  },
  profileOverview: {
    flex: 1,
    marginTop: 120,
    width: '100%',
    backgroundColor: theme.colors.snow,
    paddingBottom: 10
  },
  avatarContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 40,
    top: 40
  },
  userNameContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // level 6
  joinedAndHiveContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 80
  },
  divider: {
    height: 0.5,
    backgroundColor: theme.colors.grey,
    opacity: 0.3,
    marginHorizontal: 16
  },
  aboutText: {
    fontWeight: '300',
    marginVertical: 20,
    marginHorizontal: 16,
    paddingBottom: 2
  },
  // level 7
  joinedContainer: {
    left: 16,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    marginBottom: 5
  },
  communitiesContainer: {
    right: 16,
    marginBottom: 5
  },
  avatarStyle: {
    borderWidth: 2,
    borderColor: theme.colors.primaryText
  },
  // level 8
  joinedTitle: {
    fontSize: 16,
    lineHeight: 20,
    color: theme.colors.primaryText,
    letterSpacing: -0.2
  },
  joinedValue: {
    fontSize: 14,
    color: theme.colors.alert,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontWeight: '500'
  },
  communityTitle: {
    textAlign: 'right',
    fontSize: 16,
    lineHeight: 20,
    color: theme.colors.primaryText,
    letterSpacing: -0.2
  },
  communityView: {
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  // CommunityStyles
  community: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  communityText: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.3,
    fontWeight: '500',
    color: theme.colors.alert
  }
});
