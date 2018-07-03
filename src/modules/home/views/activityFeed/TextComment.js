import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Text } from '../../../../lib/Text';
import moment from 'moment';
import { Icon } from 'react-native-elements';
import styles from './styles/TextCommentStyles';
import Avatar from '../../../../lib/Avatar';
import theme from '../../../../theme';
import ActionMenu from '../../../../lib/views/ActionMenu';
import { Creators as HomeActions } from '../../reducer';
import LinkPreview from './components/LinkPreview';

const DotSeparator = () => <View style={styles.dotSeparator} />;

const CURRENT_USER_STYLES = { backgroundColor: theme.colors.snow };

const buildActionMenu = (onAction, comment, currentUser) => {
  const reportItem = {
    title: 'Report content',
    onPress: () => onAction(Comment.REPORT, comment),
    icon: { name: 'icons8-error(1)' }
  };

  if (currentUser.id !== comment.user.id) {
    return [reportItem];
  }

  return [
    {
      title: 'Edit comment',
      onPress: () => onAction(Comment.EDIT, comment),
      icon: { name: 'edit2' }
    },
    {
      title: 'Delete comment',
      onPress: () => onAction(Comment.DELETE, comment),
      icon: { name: 'icons8-trash-can(1)' }
    },
    reportItem
  ];
};

const CommentReply = props => (
  <View style={[styles.container, props.currentUser.id === props.reply.user.id ? CURRENT_USER_STYLES : null]}>
    <View style={styles.replyContainer}>
      <Avatar user={props.reply.user} size="xsmall" onPress={props.onProfilePress} />
      <View style={styles.contentsContainer}>
        <View>
          <Text style={styles.headerReplyText} numberOfLines={1}>
            {props.reply.user.name}{' '}
            <Text style={styles.replyText}>
              {props.reply.text} {props.reply.edited ? <Text style={styles.editedLabel}> (edited)</Text> : null}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  </View>
);

const Comment = props =>
  props.comment.user ? (
    <TouchableWithoutFeedback onPress={() => props.onReplyListPress(props.comment)}>
      <View>
        <View style={[styles.container, props.currentUser.id === props.comment.user.id ? CURRENT_USER_STYLES : null]}>
          <View style={styles.commentContainer}>
            <Avatar user={props.comment.user} size="small" onPress={() => props.onProfilePress(props.comment.user)} />
            <View style={styles.contentsContainer}>
              <TouchableWithoutFeedback onPress={() => props.onProfilePress(props.comment.user)}>
                <View>
                  <Text style={styles.headerText}>{props.comment.user.name}</Text>
                  <Text style={styles.dateText}>{moment(props.comment.created_at).fromNow()}</Text>
                </View>
              </TouchableWithoutFeedback>
              <View>
                <Text style={styles.mainText}>
                  {props.comment.text} {props.comment.edited ? <Text style={styles.editedLabel}> (edited)</Text> : null}
                </Text>
              </View>
              {props.comment.content.title ? (
                <View style={styles.linkContainer}>
                  <LinkPreview {...props.comment.content} />
                </View>
              ) : null}
            </View>
          </View>
          <View style={styles.detailsContainer}>
            <TouchableOpacity onPress={props.onlike} hitSlop={{ top: 20, bottom: 20, left: 20, right: 5 }}>
              <View style={styles.likeContainer}>
                <Icon
                  name="whatshot"
                  size={15}
                  color={props.comment.liked ? theme.colors.secondary : theme.colors.grey}
                />
                <Text style={styles.likeText}>Like</Text>
              </View>
            </TouchableOpacity>

            {props.comment.likes.length ? (
              <View style={styles.likeButtonContainer}>
                <DotSeparator />
                <TouchableOpacity
                  style={styles.commentsContainer}
                  hitSlop={{ top: 17, bottom: 17, left: 10, right: 10 }}
                  onPress={() => props.onlikeCountPress(props.comment)}
                >
                  <theme.Icon name="like" size={15} color={theme.colors.grey} />
                  <Text style={styles.commentsText}>{props.comment.likes.length}</Text>
                </TouchableOpacity>
              </View>
            ) : null}
            <DotSeparator />
            <TouchableOpacity onPress={props.onReply} hitSlop={{ top: 20, bottom: 20, left: 5, right: 20 }}>
              <Text style={styles.buttonReply}>Reply</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.moreActionsContainer}
              onPress={() => ActionMenu.show(buildActionMenu(props.onAction, props.comment, props.currentUser))}
            >
              <Icon size={32} name="ios-more" type="ionicon" color={theme.colors.grey} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.repliesContainer}>
          {props.comment.comment_replies
            .sort((first, second) => new Date(first.created_at) - new Date(second.created_at))
            .map(reply => (
              <CommentReply
                key={reply.id}
                reply={reply}
                onlike={() => props.onReplylike(reply)}
                onReply={props.onReply}
                onProfilePress={() => props.onProfilePress(reply.user)}
                onAction={props.onAction}
                currentUser={props.currentUser}
              />
            ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  ) : null;

CommentReply.propTypes = {
  reply: PropTypes.object.isRequired,
  onlike: PropTypes.func.isRequired,
  onReply: PropTypes.func.isRequired,
  onProfilePress: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  onlike: PropTypes.func.isRequired,
  onReplylike: PropTypes.func.isRequired,
  onReply: PropTypes.func.isRequired,
  onProfilePress: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  onReplyListPress: PropTypes.func.isRequired,
  onlikeCountPress: PropTypes.func.isRequired
};

Comment.EDIT = 'Comment.edit';
Comment.DELETE = 'Comment.delete';
Comment.REPORT = 'Comment.report';

export default connect(
  state => ({
    currentUser: state.data.user
  }),
  {
    onAction: HomeActions.actionStarted,
    onReplyListPress: HomeActions.openReplyList,
    onlikeCountPress: HomeActions.openlikeList
  }
)(Comment);
