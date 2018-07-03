import { connect } from 'react-redux';
import MediaConfirmation from '../views/MediaConfirmation';
import { Creators as CameraActions } from '../reducer';

export default connect(
  state => ({
    MediaUri: state.camera.MediaUri,
    assetType: state.home.assetType
  }),
  {
    onSave: CameraActions.saveImage
  }
)(MediaConfirmation);
