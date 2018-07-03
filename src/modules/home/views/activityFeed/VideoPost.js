import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform, StatusBar } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import styles from './styles/VideoPostStyles';
import SimpleTextHeader from './components/SimpleTextHeader';
import SummaryBar from './components/SummaryBar';
import ActionBar from './components/ActionBar';

const VideoPost = props => {
  const video = props.post.content[Platform.OS];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <SimpleTextHeader
          post={props.post}
          text={props.post.text || 'shared a video'}
          edited={props.post.edited}
          onProfilePress={props.onProfilePress}
          onDetailsPress={props.onDetailsPress}
        />
      </View>

      <VideoPlayer
        video={{ uri: video.url }}
        thumbnail={{ uri: props.post.content.thumbnail.url }}
        videoWidth={video.width}
        videoHeight={video.height}
        endWithThumbnail={true}
        style={styles.video}
        customStyles={{ videoWrapper: { backgroundColor: 'black' } }}
        onFullscreenPlayerDidDismiss={() => StatusBar.setHidden(false)}
      />

      <View style={styles.stampAndActionContainer}>
        <SummaryBar post={props.post} onDetailsPress={props.onDetailsPress} />

        <ActionBar post={props.post} onComment={props.onComment} />
      </View>
    </View>
  );
};

VideoPost.propTypes = {
  post: PropTypes.object.isRequired,
  onDetailsPress: PropTypes.func,
  onProfilePress: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired
};

export default VideoPost;
