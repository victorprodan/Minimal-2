import { connect } from 'react-redux';
import EditProfile from '../views/EditProfile';
import { Creators } from '../reducer';

export default connect(
  state => ({
    user: state.data.user,
    visibleModal: state.hive.profileSettingBeingEdited,
    busy: state.hive.busySavingProfile,
    temporaryValue: state.hive.profileSettingValue
  }),
  {
    onEditStarted: Creators.editProfileValueStarted,
    onEditCancelled: Creators.editProfileValueCancelled,
    onSave: Creators.editProfileSaveValue,
    onValueChanged: Creators.editProfileValueChanged
  }
)(EditProfile);
