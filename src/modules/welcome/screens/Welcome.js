import React from 'react';
import { View } from 'react-native';
import Welcome from '../containers/Welcome';

const WelcomeScreen = () => <Welcome />;

WelcomeScreen.navigationOptions = () => ({
  headerLeft: <View />
});

export default WelcomeScreen;
