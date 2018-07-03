import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles/EditProfileAvatarStyles';
import theme from '../../../theme';

const EditProfileAvatar = ({ avatar, onPress }) => (
  <View>
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: avatar }} />
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        onLongPress={onPress}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      >
        <theme.Icon name="edit" size={15} color={theme.colors.snow} style={styles.editIcon} />
      </TouchableOpacity>
    </View>
  </View>
);

EditProfileAvatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default EditProfileAvatar;
