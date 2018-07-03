import { connect } from 'react-redux';
import EditProfileAvatar from '../views/EditProfileAvatar';
import { Creators } from '../reducer';

export default connect(
  state => ({
    avatar: state.data.user.local_avatar || state.data.user.avatar
  }),
  {
    onPress: Creators.changeProfilePicture
  }
)(EditProfileAvatar);
