import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

export default StyleSheet.create({
  // level 1
  replyMainContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: theme.colors.lightGrey
  },
  linkContainer: {
    marginTop: 10,
    marginBottom: 5
  },
  commentContentContainer: {
    paddingHorizontal: 10
  },
  replyContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 10
  },
  likeButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  commentsContainer: {
    flexDirection: 'row'
  },
  commentsText: {
    color: theme.colors.grey,
    fontSize: 10,
    marginLeft: 5
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  // level 3
  contentsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center'
  },
  likeText: {
    marginLeft: 5,
    fontSize: 11
  },
  replyDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 60,
    paddingTop: 5,
    paddingBottom: 10
  },
  // level 4
  headerReplyText: {
    color: theme.colors.primaryText,
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: -0.3
  },
  replyText: {
    letterSpacing: -0.3,
    color: theme.colors.primaryText,
    marginRight: 50,
    fontWeight: 'normal'
  },
  dateReplyText: {
    color: theme.colors.grey,
    fontSize: 12,
    marginBottom: 5
  },
  dotSeparator: {
    marginTop: 2,
    marginHorizontal: 12,
    height: 4,
    width: 4,
    backgroundColor: theme.colors.grey,
    borderRadius: 5
  },
  moreActionsContainer: {
    position: 'absolute',
    right: 0,
    bottom: -3
  },
  editedLabel: {
    fontSize: 12,
    color: theme.colors.grey
  }
});
