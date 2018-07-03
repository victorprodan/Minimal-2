import { connect } from 'react-redux';
import ReplyList from '../views/ReplyList';
import { Creators as HomeActions } from '../reducer';

export default connect(
  state => ({
    comment: state.home.selectedComment,
    currentUser: state.data.user,
    postsDetailsLoading: state.home.postsDetailsLoading
  }),
  {
    onAction: HomeActions.actionStarted,
    onProfilePress: HomeActions.openPostProfile,
    onRefreshPostDetails: HomeActions.refreshPostDetails,
    onReplyLike: HomeActions.toggleReplyLike,
    onLikeCountPress: HomeActions.openLikeList
  }
)(ReplyList);
