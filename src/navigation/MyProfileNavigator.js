import StackNavigator from './navigators/StackNavigator';
import MyProfile from '../modules/hive/screens/MyProfile';
import EditProfile from '../modules/hive/screens/EditProfile';
import ImageDetails from '../modules/hive/screens/ImageDetails';

const MyProfileNavigator = StackNavigator({
  MyProfile: { screen: MyProfile },
  EditProfile: { screen: EditProfile },
  ImageDetails: { screen: ImageDetails }
});

export default MyProfileNavigator;
