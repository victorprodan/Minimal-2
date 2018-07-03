import { connect } from 'react-redux';
import Camera from '../views/Camera';
import { Creators as CameraActions } from '../reducer';

export default connect(
  state => ({
    videoMode: state.camera.videoMode,
    recording: state.camera.recording
  }),
  {
    onImageTaken: CameraActions.takePicture,
    onVideoTaken: CameraActions.takeVideo,
    onCameraError: CameraActions.cameraError,
    onRecordingStarted: CameraActions.startRecording,
    onRecordingStopped: CameraActions.stopRecording
  }
)(Camera);
