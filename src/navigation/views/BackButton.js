import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles/BackButtonStyles';
import theme from '../../theme';

const BackButton = ({ enabled, onPress }) => (
  <TouchableOpacity
    onPress={enabled ? onPress : null}
    onLongPress={enabled ? onPress : null}
    hitSlop={{ top: 20, bottom: 20, left: 20, right: 30 }}
  >
    <Icon
      name="chevron-left"
      color={theme.colors.primaryText}
      underlayColor="transparent"
      iconStyle={styles.iconStyle}
      size={40}
    />
  </TouchableOpacity>
);

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  enabled: PropTypes.bool
};

BackButton.defaultProps = {
  enabled: true
};

export default BackButton;
