import { connect } from 'react-redux';
import AddTextPostButton from '../views/AddTextPostButton';

export default connect(state => ({
  user: state.data.user
}))(AddTextPostButton);
