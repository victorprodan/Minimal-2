import { createActions, createReducer } from 'reduxsauce';
import * as DatastoreUtil from '../../util/Datastore';

// actions
export const { Types, Creators } = createActions(
  {
    // Home navigation
    openCamera: null,
    openCameraRoll: ['assetType'],
    openCreatePost: null,
    navigatedHome: null,

    // Home interactions
    loadNextPostsPage: null,
    refreshFeed: null,
    newPostMessageChange: ['newPostMessage'], // on create post text change
    submitNewPost: ['text'],
    newPostPublished: ['data'], // from action cable
    newPostsIndicatorDismissed: null,

    // Post interactions
    openPostDetails: ['post', 'commentMode'],
    postRetrieved: ['payload'],
    recipeRetrieved: ['payload'], // for recipe posts
    openPostProfile: ['user'],
    openReplyList: ['comment'],
    userUpdated: ['payload'],

    // ActionBar interactions
    togglePostLike: ['post'],
    toggleCommentLike: ['comment'],
    toggleReplyLike: ['reply'],
    actionStarted: ['action', 'object'],
    openLikeList: ['object'],

    // PostDetails interactions
    refreshPostDetails: ['post'],
    refreshPostDetailsFinished: null,
    replyToComment: ['text', 'comment'],

    // Post modal
    modalStateChanged: ['action'],
    modalSave: ['object', 'action', 'value'],

    // Push Notifications
    openPostDetailsFromPN: ['postId'],
    postRetrievedForPN: ['payload']
  },
  { prefix: 'home/' }
);

// initial state
const initialState = {
  postsLoading: false, // feed refresh and next page load
  postsDetailsLoading: false, // post details refresh
  reloadingInitialData: false, // display activity indicator while navigating home

  selectedPost: null,
  selectedPostCommentMode: false,
  selectedUser: {},
  selectedComment: {},
  selectedlikes: {},

  newPostMessage: null,
  newPostsPublished: false,

  modalAction: '',
  modalObject: null,
  assetType: ''
};

// Initializers
const setInitialState = state => ({ ...state, reloadingInitialData: false, newPostsPublished: false });

// Home navigation
const openCreatePost = state => ({ ...state, newPostMessage: null });
const onHomeNavigationStarted = state => ({ ...state, reloadingInitialData: true, newPostsPublished: false });
const openCameraRoll = (state, action) => ({ ...state, assetType: action.assetType });

// Home actions
const postsLoading = state => ({ ...state, postsLoading: true });
const postsFinishedLoading = state => ({ ...state, postsLoading: false });
const refreshFeed = state => ({ ...state, postsLoading: true, newPostsPublished: false });
const newPostMessageChange = (state, action) => ({ ...state, newPostMessage: action.newPostMessage });
const setNewPostsPublished = state => ({ ...state, newPostsPublished: true });
const resetNewPostsIndicator = state => ({ ...state, newPostsPublished: false });

// Post actions
const setSelectedPost = (state, action) => ({
  ...state,
  selectedPost: action.post,
  selectedPostCommentMode: action.commentMode,
  modalAction: action.commentMode ? 'Post.comment' : '',
  modalObject: action.post
});
const updateSelectedPost = (state, action) => ({
  ...state,
  selectedPost: DatastoreUtil.cloneModel(action.payload),
  selectedComment: DatastoreUtil.cloneModel(state.selectedComment)
});
const updateSelectedRecipe = (state, action) => {
  state.selectedPost.setAttribute('recipe', action.payload);
  return { ...state, selectedPost: DatastoreUtil.cloneModel(state.selectedPost) };
};
const setSelectedUser = (state, action) => ({ ...state, selectedUser: action.user });
const updateSelectedUser = (state, action) => ({ ...state, selectedUser: action.payload });

// PostDetails actions
const refreshPostDetails = state => ({ ...state, postsDetailsLoading: true });
const refreshPostDetailsFinished = state => ({ ...state, postsDetailsLoading: false });
const openLikeList = (state, action) => ({ ...state, selectedlikes: action.object.likes });

// Post modal
const updateModalState = (state, action) => ({
  ...state,
  modalAction: ['.edit', '.comment', '.reply'].some(string => action.action.endsWith(string)) ? action.action : '',
  modalObject: action.object
});
const resetModalState = state => ({ ...state, modalAction: '', modalObject: null });
const openReplyList = (state, action) => ({ ...state, selectedComment: action.comment });

// importing datastoreReducers crashes, so hardcoded for now
export default createReducer(initialState, {
  // Initializers
  'datastore/INITIAL_DATA_RETRIEVED': setInitialState,

  // Home navigation
  [Types.OPEN_CREATE_POST]: openCreatePost,
  [Types.NAVIGATED_HOME]: onHomeNavigationStarted,
  [Types.OPEN_CAMERA_ROLL]: openCameraRoll,

  // Home actions
  [Types.LOAD_NEXT_POSTS_PAGE]: postsLoading,
  'datastore/NEXT_POST_PAGE_RETRIEVED': postsFinishedLoading,
  [Types.REFRESH_FEED]: refreshFeed,
  'datastore/POSTS_RETRIEVED': postsFinishedLoading,
  [Types.NEW_POST_MESSAGE_CHANGE]: newPostMessageChange,
  [Types.NEW_POST_PUBLISHED]: setNewPostsPublished,
  [Types.NEW_POSTS_INDICATOR_DISMISSED]: resetNewPostsIndicator,

  // Post actions
  [Types.OPEN_POST_DETAILS]: setSelectedPost,
  [Types.POST_RETRIEVED]: updateSelectedPost,
  [Types.RECIPE_RETRIEVED]: updateSelectedRecipe,
  [Types.OPEN_POST_PROFILE]: setSelectedUser,
  [Types.USER_UPDATED]: updateSelectedUser,

  // PostDetails actions
  [Types.REFRESH_POST_DETAILS]: refreshPostDetails,
  [Types.REFRESH_POST_DETAILS_FINISHED]: refreshPostDetailsFinished,
  [Types.OPEN_LIKE_LIST]: openLikeList,
  [Types.OPEN_REPLY_LIST]: openReplyList,

  // Post modal
  [Types.ACTION_STARTED]: updateModalState,
  [Types.MODAL_STATE_CHANGED]: updateModalState,
  [Types.MODAL_SAVE]: resetModalState
});
