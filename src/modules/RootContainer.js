import React from 'react';
import { View, StatusBar } from 'react-native';
import theme from '../theme';
import AppWithNavigationState from '../navigation/AppWithNavigationState';
import Notification from '../lib/Notification';
import ActionMenu from '../lib/views/ActionMenu';

class RootContainer extends React.Component {
  render() {
    return (
      <View style={theme.styles.container}>
        <StatusBar barStyle="light-content" hidden={true} backgroundColor="#0000" translucent={true} />
        <AppWithNavigationState />
        <Notification ref={ref => Notification.setComponent(ref)} />
        <ActionMenu ref={ref => ActionMenu.setComponent(ref)} />
      </View>
    );
  }
}

export default RootContainer;
