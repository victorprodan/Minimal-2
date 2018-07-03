import { connect } from 'react-redux';
import UploadIndicator from '../views/UploadIndicator';

export default connect(state => ({
  uploads: state.volatile.uploads
}))(UploadIndicator);
