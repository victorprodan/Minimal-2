import React from 'react';
import EditProfile from '../containers/EditProfile';

const EditProfileScreen = () => <EditProfile />;

EditProfileScreen.navigationOptions = () => ({
  headerTitle: 'Edit Profile'
});

export default EditProfileScreen;
