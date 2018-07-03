import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles/TextPostStyles';
import SimpleTextHeader from './components/SimpleTextHeader';
import SummaryBar from './components/SummaryBar';
import ActionBar from './components/ActionBar';

const TextPost = props => (
  <View style={styles.container}>
    <SimpleTextHeader
      post={props.post}
      text={props.post.text}
      edited={props.post.edited}
      onProfilePress={props.onProfilePress}
      onDetailsPress={props.onDetailsPress}
    />
    <SummaryBar post={props.post} onDetailsPress={props.onDetailsPress} />
    <ActionBar post={props.post} onComment={props.onComment} />
  </View>
);

TextPost.propTypes = {
  post: PropTypes.object.isRequired,
  onDetailsPress: PropTypes.func,
  onProfilePress: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired
};

export default TextPost;
