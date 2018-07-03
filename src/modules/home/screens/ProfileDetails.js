import React from 'react';
import ProfileDetails from '../containers/ProfileDetails';

const ProfileDetailsScreen = () => <ProfileDetails />;

ProfileDetailsScreen.navigationOptions = () => ({
  headerTitle: 'About this profile'
});

export default ProfileDetailsScreen;
