import { connect } from 'react-redux';
import PostDetails from '../views/PostDetails';
import { Creators as HomeActions } from '../../home/reducer';

export default connect(
  state => ({
    post: state.home.selectedPost || {}
  }),
  {
    onCommentReply: HomeActions.replyToComment,
    onCommentlike: HomeActions.toggleCommentlike,
    onReplylike: HomeActions.toggleReplylike
  }
)(PostDetails);
