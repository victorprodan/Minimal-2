import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { Text } from '../../../lib/Text';
import moment from 'moment';
import { Icon } from 'react-native-elements';
import styles from './styles/ReplyListStyles';
import Avatar from '../../../lib/Avatar';
import theme from '../../../theme';
import ActionMenu from '../../../lib/views/ActionMenu';
import ActionButton from '../../../lib/views/ActionButton';
import LinkPreview from './activityFeed/components/LinkPreview';

const DotSeparator = () => <View style={styles.dotSeparator} />;

const CURRENT_USER_STYLES = { backgroundColor: theme.colors.snow };

const buildActionMenu = (onAction, reply, currentUser) => {
  const reportItem = {
    title: 'Report content',
    onPress: () => onAction(CommentReply.REPORT, reply),
    icon: { name: 'icons8-error(1)' }
  };

  if (currentUser.id !== reply.user.id) {
    return [reportItem];
  }

  return [
    {
      title: 'Edit reply',
      onPress: () => onAction(CommentReply.EDIT, reply),
      icon: { name: 'edit2' }
    },
    {
      title: 'Delete reply',
      onPress: () => onAction(CommentReply.DELETE, reply),
      icon: { name: 'icons8-trash-can(1)' }
    },
    reportItem
  ];
};

const CommentReply = props => (
  <View style={[styles.container, props.currentUser.id === props.reply.user.id ? CURRENT_USER_STYLES : null]}>
    <View style={styles.replyContainer}>
      <Avatar user={props.reply.user} onPress={props.onProfilePress} />
      <View style={styles.contentsContainer}>
        <View>
          <Text style={styles.headerReplyText}>{props.reply.user.display_name}</Text>
          <Text style={styles.dateReplyText}>{moment(props.reply.created_at).fromNow()}</Text>
          <Text style={styles.replyText}>
            {props.reply.text} {props.reply.edited ? <Text style={styles.editedLabel}> (edited)</Text> : null}
          </Text>
          {props.reply.content.title ? (
            <View style={styles.linkContainer}>
              <LinkPreview {...props.reply.content} />
            </View>
          ) : null}
        </View>
      </View>
    </View>
    <View style={styles.commentContentContainer}>
      <View style={styles.replyDetailsContainer}>
        <TouchableOpacity onPress={props.onlike} hitSlop={{ top: 20, bottom: 20, left: 20, right: 5 }}>
          <View style={styles.likeContainer}>
            <theme.Icon name="like" size={13} color={props.reply.liked ? theme.colors.secondary : theme.colors.grey} />
            <Text style={styles.likeText}>like</Text>
          </View>
        </TouchableOpacity>
        {props.reply.likes.length ? (
          <View style={styles.likeButtonContainer}>
            <DotSeparator />
            <TouchableOpacity
              style={styles.commentsContainer}
              hitSlop={{ top: 17, bottom: 17, left: 10, right: 10 }}
              onPress={() => props.onLikeCountPress(props.reply)}
            >
              <theme.Icon name="like" size={13} color={theme.colors.grey} />
              <Text style={styles.commentsText}>{props.reply.likes.length}</Text>
            </TouchableOpacity>
          </View>
        ) : null}
        <TouchableOpacity
          style={styles.moreActionsContainer}
          onPress={() => ActionMenu.show(buildActionMenu(props.onAction, props.reply, props.currentUser))}
        >
          <Icon size={32} name="ios-more" type="ionicon" color={theme.colors.grey} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const ReplyList = props => (
  <View style={styles.replyMainContainer}>
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={props.postsDetailsLoading}
          onRefresh={() => props.onRefreshPostDetails(props.comment.post)}
        />
      }
    >
      <View style={styles.mainContainer}>
        <View style={styles.repliesContainer}>
          {props.comment.comment_replies
            .sort((first, second) => new Date(first.created_at) - new Date(second.created_at))
            .map(reply => (
              <CommentReply
                key={reply.id}
                reply={reply}
                onlike={() => props.onReplyLike(reply)}
                onProfilePress={() => props.onProfilePress(reply.user)}
                onLikeCountPress={props.onLikeCountPress}
                onAction={props.onAction}
                currentUser={props.currentUser}
              />
            ))}
        </View>
      </View>
    </ScrollView>
    <ActionButton text="Reply" onPress={() => props.onAction('Comment.reply', props.comment)} />
  </View>
);

CommentReply.propTypes = {
  reply: PropTypes.object.isRequired,
  onlike: PropTypes.func.isRequired,
  onProfilePress: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  onLikeCountPress: PropTypes.func.isRequired
};

ReplyList.propTypes = {
  comment: PropTypes.object.isRequired,
  onProfilePress: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired,
  postsDetailsLoading: PropTypes.bool.isRequired,
  onRefreshPostDetails: PropTypes.func.isRequired,
  onReplyLike: PropTypes.func.isRequired,
  onLikeCountPress: PropTypes.func.isRequired
};

CommentReply.EDIT = 'Reply.edit';
CommentReply.DELETE = 'Reply.delete';
CommentReply.REPORT = 'Reply.report';

export default ReplyList;
