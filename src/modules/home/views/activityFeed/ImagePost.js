import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import styles from './styles/ImagePostStyles';
import SimpleTextHeader from './components/SimpleTextHeader';
import SummaryBar from './components/SummaryBar';
import ActionBar from './components/ActionBar';
import theme from '../../../../theme';

const ImagePost = props => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <SimpleTextHeader
        post={props.post}
        text={props.post.text || 'shared an image'}
        edited={props.post.edited}
        onProfilePress={props.onProfilePress}
        onDetailsPress={props.onDetailsPress}
      />
    </View>

    <TouchableWithoutFeedback style={styles.imageContainer} onPress={props.onDetailsPress}>
      <View style={styles.imageContentContainer}>
        <Image
          source={{ uri: props.post.content.image_url }}
          style={{
            height: theme.metrics.device.height / 2.5,
            width: theme.metrics.device.height / 2.5
          }}
          resizeMode="cover"
        />
      </View>
    </TouchableWithoutFeedback>

    <View style={styles.stampAndActionContainer}>
      <SummaryBar post={props.post} onDetailsPress={props.onDetailsPress} />

      <ActionBar post={props.post} onComment={props.onComment} />
    </View>
  </View>
);

ImagePost.propTypes = {
  post: PropTypes.object.isRequired,
  onDetailsPress: PropTypes.func,
  onProfilePress: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired
};

export default ImagePost;
