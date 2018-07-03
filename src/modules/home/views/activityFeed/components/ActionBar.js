import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../../../../../lib/Text';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import ActionMenu from '../../../../../lib/views/ActionMenu';
import styles from './styles/ActionBarStyles';
import theme from '../../../../../theme';
import { Creators as HomeActions } from '../../../reducer';
// import Btn from 'react-native-micro-animated-button';

const buildActionMenu = ({ onAction, post, currentUser }) => {
  const reportItem = {
    title: 'Report content',
    onPress: () => onAction(ActionBar.REPORT, post),
    icon: { name: 'icons8-error(1)' }
  };

  if (currentUser.id !== post.user.id) {
    return [reportItem];
  }

  return [
    {
      title: 'Edit post',
      onPress: () => onAction(ActionBar.EDIT, post),
      icon: { name: 'edit2' }
    },
    {
      title: 'Delete post',
      onPress: () => onAction(ActionBar.DELETE, post),
      icon: { name: 'icons8-trash-can(1)' }
    },
    reportItem
  ];
};

const ActionBar = props => (
  <View style={styles.actionsContainer}>
    <TouchableOpacity
      style={styles.actionContainer}
      onPress={() => props.onLike(props.post)}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 10 }}
    >
      <Icon name="whatshot" size={20} color={props.post.liked ? theme.colors.alert : theme.colors.primaryText} />
      <Text
        style={[
          styles.actionText,
          props.post.liked ? { color: theme.colors.alert } : { color: theme.colors.primaryText }
        ]}
      >
        Like
      </Text>
    </TouchableOpacity>
    {/* <View style={styles.actionContainer}>
      <Btn
        label="Like"
        backgroundColor="white"
        width={100}
        onPress={() => this.btn.success()}
        ref={ref => (this.btn = ref)}
        successIcon="check"
        foregroundColor={theme.colors.primaryText}
      />
    </View> */}
    <TouchableOpacity
      style={styles.actionContainer}
      onPress={props.onComment}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 10 }}
    >
      <Icon size={20} name="insert-comment" color={theme.colors.primaryText} />
      <Text style={styles.actionText}>Comment</Text>
    </TouchableOpacity>
    {props.post.post_type !== 'auto' && props.post.user ? (
      <TouchableOpacity style={styles.moreActionsContainer} onPress={() => ActionMenu.show(buildActionMenu(props))}>
        <Icon size={32} name="ios-more" type="ionicon" color={theme.colors.primaryText} />
      </TouchableOpacity>
    ) : null}
  </View>
);

ActionBar.propTypes = {
  post: PropTypes.object.isRequired,
  onComment: PropTypes.func.isRequired,

  currentUser: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
  onAction: PropTypes.func.isRequired
};

ActionBar.EDIT = 'Post.edit';
ActionBar.DELETE = 'Post.delete';
ActionBar.REPORT = 'Post.report';

export default connect(
  state => ({
    currentUser: state.data.user
  }),
  {
    onLike: HomeActions.togglePostLike,
    onAction: HomeActions.actionStarted
  }
)(ActionBar);
