import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Icon } from 'react-native-elements';
import theme from '../../../theme';
import styles from './styles/CameraStyles';

const FLASH_MODES = [
  { type: RNCamera.Constants.FlashMode.auto, icon: 'flash-auto', index: 0 },
  { type: RNCamera.Constants.FlashMode.on, icon: 'flash-on', index: 1 },
  { type: RNCamera.Constants.FlashMode.off, icon: 'flash-off', index: 2 }
];

const CAMERA_TYPES = [
  { type: RNCamera.Constants.Type.back, index: 0 },
  { type: RNCamera.Constants.Type.front, index: 1 }
];

class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flashMode: FLASH_MODES[0],
      cameraType: CAMERA_TYPES[0]
    };
  }

  toggleFlashMode() {
    this.setState({ flashMode: FLASH_MODES[(this.state.flashMode.index + 1) % 3] });
  }

  toggleType() {
    this.setState({ cameraType: CAMERA_TYPES[(this.state.cameraType.index + 1) % 2] });
  }

  onMainButtonPress() {
    const { videoMode, recording, onRecordingStopped, onRecordingStarted } = this.props;
    const camera = this.camera;
    if (!videoMode) {
      this.takePicture();
    } else {
      if (recording) {
        camera.stopRecording();
        onRecordingStopped();
      } else {
        this.takeVideo();
        onRecordingStarted();
      }
    }
  }

  // eslint-disable-next-line
  takeVideo = async () => {
    // enable eslint above if you want to get stuck on commit
    const { onVideoTaken, onCameraError } = this.props;
    const camera = this.camera;
    try {
      const data = await camera.recordAsync();
      onVideoTaken(data.uri.replace('file://', ''));
    } catch (error) {
      onCameraError(error);
    }
  };

  // eslint-disable-next-line
  takePicture = async () => {
    // enable eslint above if you want to get stuck on commit
    const { onImageTaken, onCameraError } = this.props;
    const camera = this.camera;
    const options = { quality: 0.9 };
    try {
      const data = await camera.takePictureAsync(options);
      onImageTaken(data.uri.replace('file://', ''));
    } catch (error) {
      onCameraError(error);
    }
  };

  render() {
    const flashDisabled = this.props.videoMode || this.state.cameraType.index === 1;
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => (this.camera = ref)}
          style={styles.camera}
          flashMode={this.state.flashMode.type}
          type={this.state.cameraType.type}
          keepAwake={true}
          playSoundOnCapture={true}
        />
        <View style={styles.buttonsContainer}>
          <Icon
            name={flashDisabled ? FLASH_MODES[2].icon : this.state.flashMode.icon}
            size={30}
            color={flashDisabled ? theme.colors.grey : theme.colors.snow}
            onPress={flashDisabled ? null : this.toggleFlashMode.bind(this)}
            underlayColor="transparent"
          />
          <Icon
            name="ios-radio-button-on"
            type="ionicon"
            size={70}
            color={this.props.recording ? theme.colors.grey : theme.colors.snow}
            onPress={this.onMainButtonPress.bind(this)}
            underlayColor="transparent"
          />
          <Icon
            name="ios-reverse-camera-outline"
            type="ionicon"
            size={35}
            color={this.props.recording ? theme.colors.primary : theme.colors.snow}
            onPress={this.props.recording ? null : this.toggleType.bind(this)}
            underlayColor="transparent"
          />
        </View>
      </View>
    );
  }
}

Camera.propTypes = {
  videoMode: PropTypes.bool.isRequired,
  recording: PropTypes.bool.isRequired,
  onImageTaken: PropTypes.func.isRequired,
  onVideoTaken: PropTypes.func.isRequired,
  onCameraError: PropTypes.func.isRequired,
  onRecordingStarted: PropTypes.func.isRequired,
  onRecordingStopped: PropTypes.func.isRequired
};

export default Camera;
