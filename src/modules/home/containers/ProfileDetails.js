import { connect } from 'react-redux';
import ProfileDetails from '../views/ProfileDetails';

export default connect(state => ({
  user: state.home.selectedUser,
  pointsInfo: state.home.selectedUser && state.home.selectedUser.points_info
}))(ProfileDetails);
