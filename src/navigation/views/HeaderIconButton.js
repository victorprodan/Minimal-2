import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles/HeaderIconButtonStyles';
import theme from '../../theme';

const HeaderIconButton = ({ iconName, iconType, enabled, onPress }) => {
  const IconClass = iconType === 'icons8' || !iconType ? theme.Icon : Icon;
  return (
    <View style={styles.iconContainer}>
      <IconClass
        name={iconName}
        type={iconType}
        style={styles.icon}
        size={30}
        color={enabled ? theme.colors.primaryText : theme.colors.grey}
        onPress={enabled ? onPress : null}
        underlayColor="transparent"
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      />
    </View>
  );
};

HeaderIconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  enabled: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

HeaderIconButton.defaultProps = {
  enabled: true
};

export default HeaderIconButton;
