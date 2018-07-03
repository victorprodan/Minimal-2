import { connect } from 'react-redux';
import likeList from '../views/LikeList';
import { Creators as HomeActions } from '../reducer';

export default connect(
  state => ({
    likeList: state.home.selectedlikes
  }),
  {
    onUserPress: HomeActions.openPostProfile
  }
)(likeList);
