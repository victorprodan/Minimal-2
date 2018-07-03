import React from 'react';
import Settings from '../containers/Settings';
import DrawerButton from '../../../navigation/views/DrawerButton';

const SettingsScreen = () => <Settings />;

SettingsScreen.navigationOptions = () => ({
  headerTitle: 'Settings',
  headerLeft: <DrawerButton />
});

export default SettingsScreen;
