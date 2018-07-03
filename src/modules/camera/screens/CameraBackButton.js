import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import BackButton from '../../../navigation/views/BackButton';

const CameraBackButton = ({ recording, onPress }) => <BackButton enabled={!recording} onPress={onPress} />;

CameraBackButton.propTypes = {
  recording: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default connect(
  state => ({
    recording: state.camera.recording
  }),
  {
    onPress: () => NavigationActions.back()
  }
)(CameraBackButton);
