import { StyleSheet } from 'react-native';
import theme from '../../../../../theme';

export default StyleSheet.create({
  mainContainer: {
    marginBottom: 60
  },
  // level 1
  container: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: theme.colors.lightGrey
  },
  // level 2
  linkContainer: {
    marginTop: 10
  },
  commentContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  replyContainer: {
    flexDirection: 'row',
    marginLeft: 50,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  likeButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  // level 3
  contentsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 50,
    paddingBottom: 10,
    marginHorizontal: 10
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  // level 4
  headerText: {
    color: theme.colors.primaryText,
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: -0.3
  },
  headerReplyText: {
    color: theme.colors.primaryText,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: -0.3
  },
  mainText: {
    fontSize: 15,
    letterSpacing: -0.3,
    color: theme.colors.primaryText,
    marginRight: 50
  },
  replyText: {
    letterSpacing: -0.3,
    color: theme.colors.primaryText,
    marginRight: 50,
    fontWeight: 'normal'
  },
  dateText: {
    color: theme.colors.grey,
    fontSize: 12,
    marginBottom: 5
  },
  likeText: {
    marginLeft: 5,
    fontSize: 11
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  mainCommentText: {
    marginTop: 3,
    marginRight: 40,
    width: theme.metrics.device.width * 0.7
  },
  buttonReply: {
    fontWeight: 'bold',
    color: theme.colors.secondary,
    fontSize: 11
  },
  dotSeparator: {
    marginTop: 2,
    marginHorizontal: 12,
    height: 4,
    width: 4,
    backgroundColor: theme.colors.grey,
    borderRadius: 5
  },
  replyActionsContainer: {
    flexDirection: 'row'
  },
  buttonText: {
    fontWeight: 'bold',
    color: theme.colors.darkGray,
    marginLeft: 10,
    fontSize: 12
  },
  moreActionsContainer: {
    position: 'absolute',
    right: 0,
    bottom: -3
  },
  commentsContainer: {
    flexDirection: 'row'
  },
  commentsText: {
    color: theme.colors.grey,
    fontSize: 12,
    marginLeft: 5
  },
  editedLabel: {
    fontSize: 12,
    color: theme.colors.grey
  }
});
