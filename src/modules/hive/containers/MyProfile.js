import { connect } from 'react-redux';
import MyProfile from '../views/MyProfile';

export default connect(state => ({
  user: state.data.user
}))(MyProfile);
