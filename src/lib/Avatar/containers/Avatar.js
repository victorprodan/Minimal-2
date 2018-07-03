import { connect } from 'react-redux';
import Avatar from '../views/Avatar';

export default connect(state => ({
  currentUser: state.data.user
}))(Avatar);
