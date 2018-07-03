import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements';
import styles from './styles/ActionMenuStyles';
import Separator from '../views/Separator';
import theme from '../../theme';

const ActionMenuItem = ({ item }) => {
  const IconClass = item.icon.type && item.icon.type !== 'icons8' ? Icon : theme.Icon;
  return (
    <TouchableOpacity
      onPress={() => {
        ActionMenu.hide();
        setTimeout(item.onPress, 350);
      }}
    >
      <View style={styles.actionMenuItem}>
        <IconClass style={styles.iconStyle} name={item.icon.name} type={item.icon.type} size={21} />
        <Text style={styles.menuTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

class ActionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      menuItems: []
    };
    this.hide = this.hide.bind(this);
  }

  static setComponent(component) {
    this.component = component;
  }

  static show(menuItems) {
    if (!this.component) {
      throw 'You must first render the ActionMenu component and set it using `ActionMenu.setComponent`';
    }
    this.component.setState({ isVisible: true, menuItems });
  }

  static hide() {
    if (!this.component) {
      throw 'You must first render the ActionMenu component and set it using `ActionMenu.setComponent`';
    }
    this.component.hide();
  }

  hide() {
    this.setState({ isVisible: false });
  }

  render() {
    return (
      <Modal
        style={styles.modalContainer}
        isVisible={this.state.isVisible}
        onBackdropPress={this.hide}
        onBackButtonPress={this.hide}
      >
        <View style={styles.actionMenuContainer}>
          {this.state.menuItems.map(item => <ActionMenuItem key={item.title} item={item} />)}
          <Separator />
          <TouchableOpacity onPress={this.hide}>
            <View style={styles.actionMenuItem}>
              <theme.Icon style={styles.iconStyle} name="icons8-exit" size={21} />
              <Text style={styles.menuTitle}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

ActionMenuItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ActionMenu;
