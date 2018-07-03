import React from 'react';
import MyProfile from '../containers/MyProfile';
import DrawerButton from '../../../navigation/views/DrawerButton';
import HeaderIconButton from '../../../navigation/views/HeaderIconButton';

const MyProfileScreen = () => <MyProfile />;

MyProfileScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: <DrawerButton />,
  headerRight: (
    <HeaderIconButton
      iconName="calendar-edit"
      iconType="material-community"
      onPress={() => navigation.navigate('EditProfile')}
    />
  )
});

export default MyProfileScreen;
