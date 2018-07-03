import React from 'react';
import Home from '../containers/Home';
import DrawerButton from '../../../navigation/views/DrawerButton';

const HomeScreen = () => <Home />;

HomeScreen.navigationOptions = () => ({
  headerLeft: <DrawerButton />
});

export default HomeScreen;
