import { connect } from 'react-redux';
import Post from '../views/Post';
import { Creators as HomeActions } from '../../home/reducer';

export default connect(null, {
  onPostDetailsPress: HomeActions.openPostDetails,
  onPostProfilePress: HomeActions.openPostProfile
})(Post);
