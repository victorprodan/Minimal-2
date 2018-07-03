import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles/LinkPostStyles';
import SimpleTextHeader from './components/SimpleTextHeader';
import SummaryBar from './components/SummaryBar';
import ActionBar from './components/ActionBar';
import LinkPreview from './components/LinkPreview';

const LinkPost = props => (
  <View style={styles.container}>
    <SimpleTextHeader
      post={props.post}
      text={props.post.text}
      edited={props.post.edited}
      onProfilePress={props.onProfilePress}
      onDetailsPress={props.onDetailsPress}
    />

    <View style={styles.linkContainer}>
      <LinkPreview {...props.post.content} expanded={props.detailsMode} />
    </View>

    <SummaryBar post={props.post} onDetailsPress={props.onDetailsPress} />

    <ActionBar post={props.post} onComment={props.onComment} />
  </View>
);

LinkPost.propTypes = {
  post: PropTypes.object.isRequired,
  onDetailsPress: PropTypes.func,
  onProfilePress: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired,
  detailsMode: PropTypes.bool.isRequired
};

LinkPost.defaultProps = {
  detailsMode: false
};

export default LinkPost;
