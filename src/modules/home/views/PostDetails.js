import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles/PostDetailsStyles';
import TextPostDetails from './activityFeed/TextPostDetails';
import LinkPostDetails from './activityFeed/LinkPostDetails';
import ImagePostDetails from './activityFeed/ImagePostDetails';
import VideoPostDetails from './activityFeed/VideoPostDetails';
import AutoPostDetails from './activityFeed/AutoPostDetails';

class PostDetails extends React.PureComponent {
  getPostType(type) {
    switch (type) {
      case 'text':
        return TextPostDetails;
      case 'link':
        return LinkPostDetails;
      case 'image':
        return ImagePostDetails;
      case 'video':
        return VideoPostDetails;
      case 'auto':
        return AutoPostDetails;
      default:
        return TextPostDetails;
    }
  }

  renderPost(post) {
    const Post = this.getPostType(post.post_type);
    return (
      <Post
        post={post}
        onCommentReply={this.props.onCommentReply}
        onCommentlike={this.props.onCommentlike}
        onReplyLike={this.props.onReplyLike}
      />
    );
  }

  render() {
    return <View style={styles.container}>{this.props.post ? this.renderPost(this.props.post) : null}</View>;
  }
}

PostDetails.propTypes = {
  post: PropTypes.object.isRequired,
  onCommentReply: PropTypes.func.isRequired,
  onCommentlike: PropTypes.func.isRequired,
  onReplyLike: PropTypes.func.isRequired
};

export default PostDetails;
