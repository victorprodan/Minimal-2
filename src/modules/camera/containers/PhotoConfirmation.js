import { connect } from 'react-redux';
import PhotoConfirmation from '../views/PhotoConfirmation';
import { Creators as CameraActions } from '../reducer';

export default connect(
  state => ({
    imageUri: state.camera.imageUri
  }),
  {
    onSave: CameraActions.saveImage
  }
)(PhotoConfirmation);
