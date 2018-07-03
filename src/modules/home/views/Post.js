import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles/PostDetailsStyles';
import TextPost from './activityFeed/TextPost';
import LinkPost from './activityFeed/LinkPost';
import ImagePost from './activityFeed/ImagePost';
import VideoPost from './activityFeed/VideoPost';
import AutoPost from './activityFeed/AutoPost';

class Post extends React.PureComponent {
  getPostType(type) {
    switch (type) {
      case 'text':
        return TextPost;
      case 'link':
        return LinkPost;
      case 'image':
        return ImagePost;
      case 'video':
        return VideoPost;
      case 'auto':
        return AutoPost;
      default:
        return TextPost;
    }
  }

  renderPost(post) {
    const Post = this.getPostType(post.post_type);
    return (
      <Post
        post={post}
        onDetailsPress={() => this.props.onPostDetailsPress(post, false)}
        onProfilePress={() => this.props.onPostProfilePress(post.user)}
        onComment={() => this.props.onPostDetailsPress(post, true)}
      />
    );
  }

  render() {
    return <View style={styles.container}>{this.props.post ? this.renderPost(this.props.post) : null}</View>;
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  onPostDetailsPress: PropTypes.func.isRequired,
  onPostProfilePress: PropTypes.func.isRequired
};

export default Post;
