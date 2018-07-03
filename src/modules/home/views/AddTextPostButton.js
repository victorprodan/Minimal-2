import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../../../lib/Text';
import styles from './styles/AddTextPostButtonStyles';
import Avatar from '../../../lib/Avatar';
import theme from '../../../theme';

const AddTextPostButton = props => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.shareContainer} onPress={props.onPress} activeOpacity={0.9}>
      <View style={styles.headerContainer}>
        <Avatar user={props.user} style={styles.avatar} />
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>{props.user.first_name}</Text>
          <Text style={styles.userName}>{props.user.last_name}</Text>
        </View>
      </View>
      <View style={styles.swipeTextContainer}>
        <Text style={styles.textContainer}>Post on your timeline</Text>
        <Icon name="expand-more" size={30} color={theme.colors.primaryText} style={styles.timelineIcon} />
      </View>
    </TouchableOpacity>
    <View style={styles.actionContainer}>
      <TouchableOpacity onPress={props.onVideoPress} hitSlop={{ top: 20, bottom: 20, left: 20, right: 5 }}>
        <View style={styles.likeContainer}>
          <Icon name="videocam" color={theme.colors.primaryText} size={30} />
          <Text style={styles.actionText}>Video</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPhotoPress} hitSlop={{ top: 20, bottom: 20, left: 20, right: 5 }}>
        <View style={styles.likeContainer}>
          <Icon name="photo" color={theme.colors.primaryText} size={30} />
          <Text style={styles.actionText}>Photo</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onCameraPress} hitSlop={{ top: 20, bottom: 20, left: 20, right: 5 }}>
        <View style={styles.likeContainer}>
          <Icon name="photo-camera" color={theme.colors.primaryText} size={30} />
          <Text style={styles.actionText}>Camera</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

AddTextPostButton.propTypes = {
  user: PropTypes.object.isRequired,
  onPress: PropTypes.func,
  onVideoPress: PropTypes.func,
  onPhotoPress: PropTypes.func,
  onCameraPress: PropTypes.func.isRequired
};

export default AddTextPostButton;
