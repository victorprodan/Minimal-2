import { connect } from 'react-redux';
import Home from '../views/Home';
import { Creators as HomeActions } from '../reducer';

export default connect(
  state => ({
    posts: state.data.posts,
    postsLoading: state.home.postsLoading,
    newPostsPublished: state.home.newPostsPublished,
    reloading: state.home.reloadingInitialData,
    lastPostId: state.data.lastPostId
  }),
  {
    onFeedEndReached: HomeActions.loadNextPostsPage,
    onFeedRefresh: HomeActions.refreshFeed,
    onCameraPress: HomeActions.openCamera,
    onCamerRollPress: HomeActions.openCameraRoll,
    onCreatePost: HomeActions.openCreatePost,
    onNewPostsIndicatorDismiss: HomeActions.newPostsIndicatorDismissed
  }
)(Home);
