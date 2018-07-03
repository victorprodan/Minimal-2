import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Text } from '../../lib/Text';
import styles from './styles/HeaderTextButtonStyles';
import theme from '../../theme';

const HeaderTextButton = props => {
  const onPress = props.enabled ? props.onPress : () => null;
  const opacity = props.enabled ? 1 : 0.2;
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onPress}
      activeOpacity={props.enabled ? 0.2 : 1}
      hitSlop={{ top: 20, bottom: 20, left: 20, right: 30 }}
    >
      <Text style={[styles.text, { color: theme.colors.primaryText, opacity: opacity }]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

HeaderTextButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired
};

HeaderTextButton.defaultProps = {
  enabled: true
};

export default HeaderTextButton;
