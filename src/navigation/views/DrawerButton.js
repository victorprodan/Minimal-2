import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import theme from '../../theme';
import styles from './styles/DrawerButtonStyles';

const DrawerButton = ({ openDrawer }) => (
  <TouchableWithoutFeedback onPress={openDrawer} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
    <View style={styles.container}>
      <Icon name="menu" size={35} color={theme.colors.primaryText} />
    </View>
  </TouchableWithoutFeedback>
);

DrawerButton.propTypes = {
  openDrawer: PropTypes.func.isRequired
};

export default connect(null, {
  openDrawer: () => {
    Keyboard.dismiss();
    return NavigationActions.navigate({ routeName: 'DrawerOpen' });
  }
})(DrawerButton);
