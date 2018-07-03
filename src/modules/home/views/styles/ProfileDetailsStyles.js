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
  backgroundOpacity: {
    flex: 1,
    opacity: 0.95,
    backgroundColor: theme.colors.purple
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
    fontSize: 24
    // top: 20
  },
  profileOverview: {
    flex: 1,
    marginTop: 120,
    width: '100%',
    backgroundColor: theme.colors.snow,
    paddingBottom: 10
  },
  avatarContainer: {
    position: 'absolute',
    left: theme.metrics.device.width * 0.5 - 70,
    top: 75
  },
  // level 6
  joinedAndHiveContainer: {
    width: '100%',
    flexDirection: 'column',
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
    alignSelf: 'flex-start',
    paddingTop: 20,
    paddingLeft: 16,
    marginBottom: 5
  },
  avatarStyle: {
    borderWidth: 3,
    borderColor: theme.colors.primaryText
  },
  // level 8
  joinedTitle: {
    fontSize: 16,
    lineHeight: 20,
    color: theme.colors.primary,
    letterSpacing: -0.2
  },
  joinedValue: {
    fontSize: 22,
    color: theme.colors.primary,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontWeight: '500'
  },
  communityTitle: {
    textAlign: 'left',
    fontSize: 18,
    lineHeight: 20,
    color: theme.colors.primary,
    letterSpacing: -0.2
  },
  communityView: {
    flexDirection: 'row',
    backgroundColor: 'transparent'
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.primaryText,
    width: '50%',
    marginLeft: 16,
    marginBottom: 7
  },
  // CommunityStyles
  community: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  communityText: {
    paddingLeft: 5,
    fontSize: 22,
    lineHeight: 24,
    letterSpacing: -0.3,
    fontWeight: '500',
    color: theme.colors.primaryText
  }
});
