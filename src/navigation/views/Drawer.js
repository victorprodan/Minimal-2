import React from 'react';
import { connect } from 'react-redux';
import { Creators as LoginActions } from '../../modules/login/reducer';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Text } from '../../lib/Text';
import PropTypes from 'prop-types';
import styles from './styles/DrawerStyles';
import theme from '../../theme';
import { Creators as NavActions } from '../reducer';

const MenuItem = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.itemContainer}>
    <Icon
      name={props.iconName}
      style={styles.iconStyle}
      size={props.size}
      color={props.active ? theme.colors.alert : theme.colors.primaryText}
    />
    <Text style={props.active ? styles.currentItem : styles.item}>{props.title}</Text>
  </TouchableOpacity>
);

const Drawer = props => (
  <View style={styles.container}>
    <View style={styles.sectionsContainer}>
      <MenuItem
        onPress={() => props.navigation.navigate('Home')}
        iconName="burst-mode"
        title="TIMELINE"
        active={props.activeItemKey === 'Home'}
        size={30}
      />
      <MenuItem
        onPress={() => props.navigation.dispatch(NavActions.openMyProfile())}
        iconName="face"
        title="MY PROFILE"
        active={props.activeItemKey === 'MyProfile'}
        size={30}
      />
      <MenuItem
        onPress={() => props.navigation.navigate('Settings')}
        iconName="settings"
        title="SETTINGS"
        active={props.activeItemKey === 'Settings'}
        size={30}
      />
      <MenuItem onPress={props.onLogoutPressed} iconName="directions-walk" title="LOG OUT" size={30} />
    </View>
  </View>
);

MenuItem.propTypes = {
  onPress: PropTypes.func,
  iconName: PropTypes.string,
  title: PropTypes.string,
  active: PropTypes.bool,
  size: PropTypes.number
};

Drawer.propTypes = {
  activeItemKey: PropTypes.string,
  navigation: PropTypes.object,
  onLogoutPressed: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired
  // Also:
  // getLabel(),
  // items: [],
  // onItemPress(),
  // renderIcon(),
  // router,
  // screenProps
};

export default connect(
  state => ({
    settings: state.data.user.settings
  }),
  {
    onLogoutPressed: LoginActions.logout
  }
)(Drawer);
