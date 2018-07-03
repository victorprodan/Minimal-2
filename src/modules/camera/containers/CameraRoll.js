import { connect } from 'react-redux';
import CameraRoll from '../views/CameraRoll';
import { Creators as CameraActions } from '../reducer';

export default connect(
  state => ({
    assetType: state.home.assetType
  }),
  {
    onMinimalaSelected: CameraActions.selectMinimala
  }
)(CameraRoll);
