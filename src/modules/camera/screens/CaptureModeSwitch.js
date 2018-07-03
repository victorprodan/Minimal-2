import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderIconButton from '../../../navigation/views/HeaderIconButton';
import { Creators } from '../reducer';

const CaptureModeSwitch = ({ videoMode, recording, onPress }) => (
  <HeaderIconButton
    iconName={videoMode ? 'videocam' : 'photo-camera'}
    iconType="material"
    onPress={onPress}
    enabled={!recording}
  />
);

CaptureModeSwitch.propTypes = {
  videoMode: PropTypes.bool.isRequired,
  recording: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default connect(
  state => ({
    videoMode: state.camera.videoMode,
    recording: state.camera.recording
  }),
  {
    onPress: Creators.toggleVideoMode
  }
)(CaptureModeSwitch);
