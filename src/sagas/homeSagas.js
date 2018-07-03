import { Platform, Alert } from 'react-native';
import { put, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { Types as DatastoreTypes, user as userSelector } from '../redux/datastoreReducer';
import { Types, Creators } from '../modules/home/reducer';
import store from '../redux/store';
import { ApiActions } from '../services/api';
import PostRepository from '../repositories/postRepository';
import UserRepository from '../repositories/userRepository';
import { lastPostId as lastPostIdSelector } from '../redux/datastoreReducer';
import * as Camera from './cameraSagas';
import ActionMenu from '../lib/views/ActionMenu';

export function* loadNextPostsPage() {
  const lastPostId = yield select(lastPostIdSelector);
  if (lastPostId === -1) {
    return yield put({ type: DatastoreTypes.NEXT_POST_PAGE_RETRIEVED, payload: [] });
  }
  yield put(
    ApiActions.directCall(PostRepository.getPosts({ lastPostId }), { commit: DatastoreTypes.NEXT_POST_PAGE_RETRIEVED })
  );
}

export function* refreshPosts() {
  yield put(
    ApiActions.directCall(PostRepository.getPosts({ lastPostId: null }), { commit: DatastoreTypes.POSTS_RETRIEVED })
  );
}

export function* openCreatePost() {
  yield put(NavigationActions.navigate({ routeName: 'NewTextPost' }));
}

export function* openlikeList({ object }) {
  if (object.likes.length > 0) {
    yield put(NavigationActions.navigate({ routeName: 'likeList' }));
  }
}

export function* openReplyList({ comment }) {
  if (comment.comment_replies.length > 0) {
    yield put(NavigationActions.navigate({ routeName: 'ReplyList' }));
  }
}

export function* openPostDetails({ post }) {
  yield put(ApiActions.directCall(PostRepository.getPost({ id: post.id }), { commit: Types.POST_RETRIEVED }));
  yield put(NavigationActions.navigate({ routeName: 'PostDetails' }));
}

export function* refreshPostDetails({ post }) {
  yield put(
    ApiActions.directCall(PostRepository.getPost({ id: post.id }), { commit: Types.REFRESH_POST_DETAILS_FINISHED })
  );
}

export function* openPostProfile({ user }) {
  const loggedInUser = yield select(userSelector);
  if (user.id === loggedInUser.id) {
    yield put(NavigationActions.navigate({ routeName: 'MyHomeProfile' }));
  } else {
    yield put(ApiActions.directCall(UserRepository.getUser(user.id), { commit: Types.USER_UPDATED }));
    yield put(NavigationActions.navigate({ routeName: 'ProfileDetails' }));
  }
}

export function* openCamera() {
  if (Platform.OS === 'ios') {
    yield put(NavigationActions.navigate({ routeName: 'Camera' }));
  } else {
    ActionMenu.show([
      {
        title: 'Take picture',
        onPress: () => Camera.openAndroidCamera('photo'),
        icon: { name: 'ios-camera-outline', type: 'ionicon' }
      },
      {
        title: 'Record video',
        onPress: () => Camera.openAndroidCamera('video'),
        icon: { name: 'ios-videocam-outline', type: 'ionicon' }
      }
    ]);
  }
}

export function* openCameraRoll() {
  yield put(NavigationActions.navigate({ routeName: 'CameraRoll' }));
}

export function* replyToComment({ text, comment }) {
  yield put(
    ApiActions.directCall(PostRepository.createCommentReply({ text, comment }), { commit: Types.POST_RETRIEVED })
  );
}

export function* togglePostlike({ post }) {
  yield put(ApiActions.directCall(PostRepository.togglePostlike({ post }), { commit: Types.POST_RETRIEVED }));
}

export function* toggleCommentlike({ comment }) {
  yield put(ApiActions.directCall(PostRepository.toggleCommentlike({ comment }), { commit: Types.POST_RETRIEVED }));
}

export function* toggleReplylike({ reply }) {
  yield put(ApiActions.directCall(PostRepository.toggleReplylike({ reply }), { commit: Types.POST_RETRIEVED }));
}

export function* submitNewPost({ text }) {
  yield put(NavigationActions.back());
  yield put(ApiActions.directCall(PostRepository.createPost({ text })));
}

export function* performAction({ action, object }) {
  switch (action) {
    case 'Post.delete':
      yield put(ApiActions.directCall(PostRepository.deletePost(object), { commit: DatastoreTypes.POST_DELETED }));
      return yield put(NavigationActions.back()); // in case we are in the post details screen
    case 'Comment.delete':
      return yield put(ApiActions.directCall(PostRepository.deleteComment(object), { commit: Types.POST_RETRIEVED }));
    case 'Reply.delete':
      return yield put(ApiActions.directCall(PostRepository.deleteReply(object), { commit: Types.POST_RETRIEVED }));
    case 'Post.report':
      return confirmReport(() => PostRepository.reportPost(object));
    case 'Comment.report':
      return confirmReport(() => PostRepository.reportComment(object));
    case 'Reply.report':
      return confirmReport(() => PostRepository.reportReply(object));
  }
}

const confirmReport = promiseCreator =>
  Alert.alert(
    'Report content?',
    'Reporting this content indicates you find it inappropriate. A community manager will contact you to resolve the issue.',
    [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Report', style: 'destructive', onPress: () => store.dispatch(ApiActions.directCall(promiseCreator())) }
    ]
  );

export function* modalSave({ action, object, value }) {
  let repoMethod = null;
  switch (action) {
    case 'Post.edit':
      repoMethod = 'editPost';
      break;
    case 'Post.comment':
      repoMethod = 'createComment';
      break;
    case 'Comment.edit':
      repoMethod = 'editComment';
      break;
    case 'Comment.reply':
      repoMethod = 'createReply';
      break;
    case 'Reply.edit':
      repoMethod = 'editReply';
      break;
  }

  yield put(ApiActions.directCall(PostRepository[repoMethod](object, value), { commit: Types.POST_RETRIEVED }));
}

export function* getPostDetailsForPN({ postId }) {
  yield put(ApiActions.directCall(PostRepository.getPost({ id: postId }), { commit: Types.POST_RETRIEVED_FOR_P_N }));
}

export function* openPostDetailsFromPN({ payload }) {
  // this will cause another post reload; the first load is needed because the post may not be loaded
  // a possible solution would be to get a "slim" post representation, but for now I think this is overkill
  yield put(Creators.openPostDetails(payload, false));
}
