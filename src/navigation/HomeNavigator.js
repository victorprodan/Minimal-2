import StackNavigator from './navigators/StackNavigator';
import Home from '../modules/home/screens/Home';
import PostDetails from '../modules/home/screens/PostDetails';
import likeList from '../modules/home/screens/LikeList';
import ReplyList from '../modules/home/screens/ReplyList';
import NewTextPost from '../modules/home/screens/NewTextPost';
import Camera from '../modules/camera/screens/Camera';
import CameraRoll from '../modules/camera/screens/CameraRoll';
import MediaConfirmation from '../modules/camera/screens/MediaConfirmation';
import PhotoConfirmation from '../modules/camera/screens/PhotoConfirmation';
import VideoConfirmation from '../modules/camera/screens/VideoConfirmation';
import ProfileDetails from '../modules/home/screens/ProfileDetails';
import MyHomeProfile from '../modules/home/screens/MyHomeProfile';

const HomeNavigator = StackNavigator({
  Home: { screen: Home },
  PostDetails: { screen: PostDetails },
  likeList: { screen: likeList },
  ReplyList: { screen: ReplyList },
  NewTextPost: { screen: NewTextPost },
  Camera: { screen: Camera },
  CameraRoll: { screen: CameraRoll },
  MediaConfirmation: { screen: MediaConfirmation },
  PhotoConfirmation: { screen: PhotoConfirmation },
  VideoConfirmation: { screen: VideoConfirmation },
  ProfileDetails: { screen: ProfileDetails },
  MyHomeProfile: { screen: MyHomeProfile }
});

export default HomeNavigator;
