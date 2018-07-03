import React from 'react';
import DropdownAlert from 'react-native-dropdownalert';

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClose: null
    };
  }

  static setComponent(component) {
    this.component = component;
  }

  static show({ type, title, message, onPress }) {
    if (!this.component) {
      throw 'You must first render the Notification component and set it using `Notification.setComponent`';
    }

    this.component.setState({ onClose: onPress ? data => (data.action === 'tap' ? onPress() : null) : null });
    this.component.dropdown.alertWithType(type || 'error', title || '', message || '');
  }

  render() {
    return (
      <DropdownAlert
        ref={ref => (this.dropdown = ref)}
        showCancel={!this.state.onClose}
        closeInterval={5000}
        updateStatusBar={false}
        tapToCloseEnabled={true}
        onClose={this.state.onClose}
        panResponderEnabled={false}
        translucent={true}
        useNativeDriver
      />
    );
  }
}

export default Notification;
