import { connect } from 'react-redux';
import VideoConfirmation from '../views/VideoConfirmation';
import { Creators as CameraActions } from '../reducer';

export default connect(
  state => ({
    videoUri: state.camera.videoUri
  }),
  {
    onSave: CameraActions.saveVideo
  }
)(VideoConfirmation);
