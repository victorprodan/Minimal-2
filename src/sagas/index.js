import { takeEvery, takeLatest, all } from 'redux-saga/effects';

// types
import { Types as ApplicationTypes } from '../modules/reducer';
import { Types as WelcomeTypes } from '../modules/welcome/reducer';
import { Types as LoginTypes } from '../modules/login/reducer';
import { Types as CameraTypes } from '../modules/camera/reducer';
import { Types as HomeTypes } from '../modules/home/reducer';
import { Types as HiveTypes } from '../modules/hive/reducer';
import { Types as NavTypes } from '../navigation/reducer';

// sagas
import * as Startup from './startupSagas';
import * as Welcome from './welcomeSagas';
import * as Login from './loginSagas';
import * as Camera from './cameraSagas';
import * as Home from './homeSagas';
import * as Hive from './hiveSagas';
import * as Nav from './navigationSagas';

// takeLatest will cancel the task if it's already running; takeEvery will run them in parallel
export default function* root() {
  yield all([
    takeLatest(ApplicationTypes.STARTUP, Startup.startup),
    takeLatest(ApplicationTypes.INIT_FINISHED, Startup.initFinished),
    takeLatest(ApplicationTypes.INIT_ERROR, Startup.initError),
    takeLatest(WelcomeTypes.OPEN_NICKNAME, Welcome.openNickname),
    takeLatest(WelcomeTypes.OPEN_WELCOME_FINISH, Welcome.openWelcomeFinish),
    takeLatest(WelcomeTypes.FINALIZE_PROFILING, Welcome.finalizeProfiling),
    takeLatest(WelcomeTypes.PROFILING_FINALIZED, Welcome.openTourStart),
    takeLatest(WelcomeTypes.FINISH_WELCOME, Welcome.finishWelcome),
    takeEvery(LoginTypes.LOGIN_STARTED, Login.login),
    takeEvery(LoginTypes.RETRIEVE_USER, Login.retrieveUser),
    takeLatest(LoginTypes.FACEBOOK_LOGIN_DETECTED, Login.facebookLogin),
    takeLatest(LoginTypes.LOGIN_SUCCESS, Login.loginSuccess),
    takeLatest(LoginTypes.LOGIN_ERROR, Login.loginError),
    takeLatest(LoginTypes.LOGOUT, Login.logout),
    takeLatest(LoginTypes.OPEN_TERMS, Login.openTerms),
    takeLatest(LoginTypes.OPEN_PRIVACY, Login.openPrivacy),
    takeLatest(LoginTypes.SAVE_EMAIL, Login.saveEmail),
    takeLatest(CameraTypes.TAKE_PICTURE, Camera.navigateToPhotoConfirmation),
    takeLatest(CameraTypes.SELECT_MEDIA, Camera.navigateToMediaConfirmation),
    takeLatest(CameraTypes.TAKE_VIDEO, Camera.navigateToVideoConfirmation),
    takeLatest(CameraTypes.SAVE_IMAGE, Camera.saveImage),
    takeLatest(CameraTypes.SAVE_VIDEO, Camera.saveVideo),
    takeLatest(CameraTypes.DISCARD_IMAGE, Camera.discardImage),
    takeLatest(CameraTypes.DISCARD_VIDEO, Camera.discardVideo),
    takeLatest(CameraTypes.NAVIGATE_HOME_FROM_CONFIRMATION, Camera.navigateHomeFromConfirmation),
    takeLatest(CameraTypes.CAMERA_ERROR, Camera.cameraError),
    takeLatest(HomeTypes.LOAD_NEXT_POSTS_PAGE, Home.loadNextPostsPage),
    takeLatest(HomeTypes.REFRESH_FEED, Home.refreshPosts),
    takeLatest(HomeTypes.OPEN_CAMERA, Home.openCamera),
    takeLatest(HomeTypes.OPEN_CAMERA_ROLL, Home.openCameraRoll),
    takeLatest(HomeTypes.OPEN_CREATE_POST, Home.openCreatePost),
    takeLatest(HomeTypes.OPEN_LIKE_LIST, Home.openLikeList),
    takeLatest(HomeTypes.OPEN_REPLY_LIST, Home.openReplyList),
    takeLatest(HomeTypes.OPEN_POST_DETAILS, Home.openPostDetails),
    takeLatest(HomeTypes.REFRESH_POST_DETAILS, Home.refreshPostDetails),
    takeLatest(HomeTypes.OPEN_POST_PROFILE, Home.openPostProfile),
    takeLatest(HomeTypes.REPLY_TO_COMMENT, Home.replyToComment),
    takeLatest(HomeTypes.TOGGLE_POST_LIKE, Home.togglePostLike),
    takeLatest(HomeTypes.TOGGLE_COMMENT_LIKE, Home.toggleCommentLike),
    takeLatest(HomeTypes.TOGGLE_REPLY_LIKE, Home.toggleReplyLike),
    takeLatest(HomeTypes.SUBMIT_NEW_POST, Home.submitNewPost),
    takeLatest(HomeTypes.ACTION_STARTED, Home.performAction),
    takeLatest(HomeTypes.MODAL_SAVE, Home.modalSave),
    takeLatest(HomeTypes.OPEN_POST_DETAILS_FROM_P_N, Home.getPostDetailsForPN),
    takeLatest(HomeTypes.POST_RETRIEVED_FOR_P_N, Home.openPostDetailsFromPN),
    takeLatest(NavTypes.OPEN_MY_PROFILE, Nav.openMyProfile),
    takeLatest(HiveTypes.OPEN_IMAGE_DETAILS, Hive.openImageDetails),
    takeLatest(HiveTypes.DELETE_ACCOUNT, Hive.deleteAccount),
    takeEvery(HiveTypes.EDIT_PROFILE_SAVE_VALUE, Hive.updateProfile),
    takeEvery(HiveTypes.SAVE_PROFILE_ERROR, Hive.saveProfileError),
    takeEvery(HiveTypes.CHANGE_PROFILE_PICTURE, Hive.changeProfilePicture),
    takeEvery(HiveTypes.CAMERA_ERROR, Hive.profileCameraError),
    takeLatest(HiveTypes.SETTING_TOGGLED, Hive.updateSetting),
    takeLatest(HiveTypes.DELETE_IMAGE, Hive.deleteImage),
    takeEvery('Navigation/NAVIGATE', Nav.onNavigation)
  ]);
}
