import React from 'react';
import MyProfile from '../../hive/containers/MyProfile';

const MyHomeProfileScreen = () => <MyProfile />;

MyHomeProfileScreen.navigationOptions = () => ({
  headerTitle: 'Profile'
});

export default MyHomeProfileScreen;
