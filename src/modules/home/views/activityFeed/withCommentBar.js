import React from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/TextPostDetailsStyles';
import KeyboardAvoidingContainer from '../../../../lib/views/KeyboardAvoidingContainer';
import TextComment from './TextComment';
import { Creators as HomeActions } from '../../../home/reducer';
import EditPostModal from './components/EditPostModal';

export default WrappedComponent =>
  connect(
    state => ({
      postsDetailsLoading: state.home.postsDetailsLoading
    }),
    {
      onPostProfilePress: HomeActions.openPostProfile,
      onRefreshPostDetails: HomeActions.refreshPostDetails,
      onAction: HomeActions.actionStarted,
      onlikeListPress: HomeActions.openlikeList
    }
  )(props => (
    <KeyboardAvoidingContainer>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={props.postsDetailsLoading}
            onRefresh={() => props.onRefreshPostDetails(props.post)}
          />
        }
      >
        <View>
          <WrappedComponent
            post={props.post}
            onProfilePress={() => props.onPostProfilePress(props.post.user)}
            onDetailsPress={() => props.onlikeListPress(props.post)}
            onComment={() => props.onAction('Post.comment', props.post)}
            detailsMode={true}
          />

          <View style={styles.commentsContainer}>
            {props.post.comments
              .sort((first, second) => new Date(first.created_at) - new Date(second.created_at))
              .map(comment => (
                <TextComment
                  key={comment.id}
                  comment={comment}
                  onReply={() => props.onAction('Comment.reply', comment)}
                  onlike={() => props.onCommentlike(comment)}
                  onReplylike={props.onReplylike}
                  onProfilePress={props.onPostProfilePress}
                />
              ))}
          </View>
        </View>
      </ScrollView>
      <EditPostModal />
    </KeyboardAvoidingContainer>
  ));
