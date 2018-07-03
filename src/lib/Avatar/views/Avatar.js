import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, Image } from 'react-native';
import styles from './styles/AvatarStyles';

const SIZES = {
  post: { containerStyles: styles.avatarContainerPostPreview, imageStyles: styles.avatarImagePostPreview },
  large: { containerStyles: styles.avatarContainerLarge, imageStyles: styles.avatarImageLarge },
  xl: { containerStyles: styles.avatarContainerXl, imageStyles: styles.avatarImageXl },
  Minial: { containerStyles: styles.avatarContainerMinial, imageStyles: styles.avatarImageMinial },
  small: { containerStyles: styles.avatarContainerSmall, imageStyles: styles.avatarImageSmall },
  xsmall: { containerStyles: styles.avatarContainerXsmall, imageStyles: styles.avatarImageXsmall }
};

const Avatar = props => {
  const user = props.user.id === props.currentUser.id ? props.currentUser : props.user;
  const uri = user.local_avatar || user.avatar;

  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <TouchableWithoutFeedback onPress={props.onPress}>
        <Image style={[SIZES[props.size].imageStyles, props.avatarStyle]} source={{ uri }} />
      </TouchableWithoutFeedback>
    </TouchableWithoutFeedback>
  );
};

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  size: PropTypes.string,
  avatarStyle: PropTypes.any
};

Avatar.defaultProps = {
  size: 'xl'
};

export default Avatar;
