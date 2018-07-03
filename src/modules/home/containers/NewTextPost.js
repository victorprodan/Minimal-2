import { connect } from 'react-redux';
import NewTextPost from '../views/NewTextPost';
import { Creators as HomeActions } from '../reducer';

export default connect(
  state => ({
    user: state.data.user,
    newPostMessage: state.home.newPostMessage
  }),
  {
    onNewPostMessageChange: HomeActions.newPostMessageChange,
    onSubmitNewPost: HomeActions.submitNewPost
  }
)(NewTextPost);
