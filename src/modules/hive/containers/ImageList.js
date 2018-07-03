import { connect } from 'react-redux';
import ImageList from '../views/ImageList';
import { Creators } from '../reducer';

export default connect(
  state => ({
    images: state.data.images
  }),
  {
    onImageSelected: Creators.openImageDetails
  }
)(ImageList);
