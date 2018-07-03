import { connect } from 'react-redux';
import ImageDetails from '../views/ImageDetails';

export default connect(state => ({
  image: state.hive.selectedImage
}))(ImageDetails);
