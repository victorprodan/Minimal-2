import { createActions, createReducer } from 'reduxsauce';
import R from 'ramda';
import { Types as AppTypes } from '../modules/reducer';
import { Types as LoginTypes } from '../modules/login/reducer';
import { Types as HiveTypes } from '../modules/hive/reducer';
import { Types as HomeTypes } from '../modules/home/reducer';
import * as DatastoreUtil from '../util/Datastore';
import datastore from '../services/jsonapiStore';

export const { Types, Creators } = createActions(
  {
    initialDataRetrieved: ['payload'],
    currentUserRetrieved: ['payload'],
    usersRetrieved: ['payload'],
    postsRetrieved: ['payload'],
    nextPostPageRetrieved: ['payload'],
    communitiesRetrieved: ['payload'],
    imagesRetrieved: ['payload'],
    avatarUpdated: ['avatar'],
    postDeleted: ['payload']
  },
  { prefix: 'datastore/' }
);

const initialState = {
  communities: [],

  // user-dependent from here on
  user: null,
  posts: [],
  lastPostId: 0,
  images: [],
  users: [],
  points: [],
  ranks: []
};

const getLastPostId = posts => {
  if (!posts) {
    return 0;
  }
  const lastPost = R.last(posts);
  return lastPost ? parseInt(lastPost.id) : 0;
};

const updateInitialData = (state, action) => ({
  ...state,
  user: action.payload.current_user,
  users: action.payload.users,
  communities: action.payload.communities,
  posts: action.payload.posts,
  lastPostId: getLastPostId(action.payload.posts)
});
const updateCurrentUser = (state, action) => ({ ...state, user: DatastoreUtil.cloneModel(action.payload) });
const resetStore = state => ({ ...state, user: null, posts: [], images: [], users: [], points: [] });
const updateUsers = (state, action) => ({ ...state, users: action.payload });
const updatePosts = (state, action) => ({
  ...state,
  posts: action.payload || [],
  lastPostId: getLastPostId(action.payload),
  users: datastore.findAll('users')
});
const addNextPostPage = (state, action) => ({
  ...state,
  posts: state.posts.concat(action.payload),
  lastPostId: getLastPostId(action.payload) || -1 // -1 means we've reached the end
});
const deletePost = (state, action) => ({ ...state, posts: state.posts.filter(post => post.id !== action.payload.id) });
const updateImages = (state, action) => ({ ...state, images: action.payload });
const updateProfilePicture = (state, action) => {
  state.user.setAttribute('avatar', action.imageUrl);
  state.user.setAttribute('local_avatar', action.imageUrl);
  return { ...state, user: DatastoreUtil.cloneModel(state.user) };
};
const updateSetting = (state, action) => {
  state.user.setAttribute('settings', R.merge(state.user.settings, { [action.setting]: action.value }));
  return { ...state, user: DatastoreUtil.cloneModel(state.user) };
};
const deleteImage = (state, action) => ({ ...state, images: state.images.filter(image => image.id !== action.id) });
const updateAvatar = (state, action) => {
  state.user.setAttribute('avatar', action.data.avatar);
  state.user.setAttribute('local_avatar', null);
  return { ...state };
};
const updatePost = (state, action) => {
  const index = state.posts.findIndex(post => post.id === action.payload.id);
  return { ...state, posts: R.update(index, DatastoreUtil.cloneModel(action.payload), state.posts) };
};
const togglePostLike = (state, action) => {
  const index = state.posts.findIndex(post => post.id === action.post.id);
  action.post.setAttribute('liked', !action.post.liked);
  return { ...state, posts: R.update(index, DatastoreUtil.cloneModel(action.post), state.posts) };
};

export default createReducer(initialState, {
  [AppTypes.INIT_FINISHED]: updateInitialData,
  [Types.INITIAL_DATA_RETRIEVED]: updateInitialData,
  [LoginTypes.LOGIN_SUCCESS]: updateCurrentUser,
  [LoginTypes.LOGOUT_SUCCESS]: resetStore,
  [Types.IMAGES_RETRIEVED]: updateImages,
  [Types.USERS_RETRIEVED]: updateUsers,
  [Types.POSTS_RETRIEVED]: updatePosts,
  [Types.NEXT_POST_PAGE_RETRIEVED]: addNextPostPage,
  [Types.POST_DELETED]: deletePost,
  [HiveTypes.SAVE_PROFILE_SUCCESS]: updateCurrentUser,
  [HiveTypes.UPLOAD_PROFILE_PICTURE_STARTED]: updateProfilePicture,
  [HiveTypes.SETTING_TOGGLED]: updateSetting,
  [HiveTypes.DELETE_IMAGE]: deleteImage,
  [Types.AVATAR_UPDATED]: updateAvatar,
  [HomeTypes.POST_RETRIEVED]: updatePost,
  [HomeTypes.TOGGLE_POST_LIKE]: togglePostLike
});

// selectors
export const user = state => state.data.user;
export const lastPostId = state => state.data.lastPostId;
export const posts = state => state.data.posts;
