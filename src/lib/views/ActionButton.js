import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import PropTypes from 'prop-types';
import styles from './styles/ActionButtonStyles';

const ActionButton = props => (
  <TouchableOpacity onPress={props.disabled ? null : props.onPress} activeOpacity={props.disabled ? 1 : 0.2}>
    <View style={props.disabled ? styles.disabled : styles.enabled}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

ActionButton.defaultProps = {
  disabled: false
};

export default ActionButton;
