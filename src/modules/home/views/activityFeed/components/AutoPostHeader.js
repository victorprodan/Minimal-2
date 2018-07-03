import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Text } from '../../../../../lib/Text';
import Avatar from '../../../../../lib/Avatar';
import styles from './styles/AutoPostHeaderStyles';

export const TextButton = props => (
  <TouchableWithoutFeedback onPress={props.onPress}>
    <View>
      <Text numberOfLines={5} style={styles.text}>
        {props.children}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

const Header = props => {
  switch (props.post.content.trigger) {
    case 'picture_changed':
      return (
        <View style={styles.messageContainer}>
          <TextButton onPress={props.onDetailsPress}>I have changed my profile picture.</TextButton>
          <View style={styles.profilePictureContainer}>
            <Avatar user={props.post.user} size="post" avatarStyle={styles.avatarStyle} />
          </View>
        </View>
      );
    case 'nickname_changed':
      return (
        <View style={styles.messageContainer}>
          <TextButton onPress={props.onDetailsPress}>
            I have changed my nickname to <Text style={styles.boldText}>{props.post.content.nickname}.</Text>
          </TextButton>
        </View>
      );
    case 'user_joined':
      return (
        <View style={styles.messageContainer}>
          <TextButton onPress={props.onDetailsPress}>
            I have joined the <Text style={styles.boldText}>{props.post.content.community}</Text> community.
          </TextButton>
        </View>
      );
    default:
      return null;
  }
};

const AutoPostHeader = props => (
  <TouchableWithoutFeedback hitSlop={{ top: 17, bottom: 17, left: 10, right: 10 }} onPress={props.onDetailsPress}>
    <View style={styles.postContainer}>
      <View style={styles.userInfoContainer}>
        <Avatar user={props.post.user} onPress={props.onProfilePress} />
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>{props.post.user.first_name}</Text>
          <Text style={styles.userName}>{props.post.user.last_name}</Text>
        </View>
      </View>

      <View style={styles.contentsContainer}>
        <Header post={props.post} onDetailsPress={props.onDetailsPress} onProfilePress={props.onProfilePress} />
      </View>
    </View>
  </TouchableWithoutFeedback>
);

TextButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func
};

Header.propTypes = {
  post: PropTypes.object.isRequired,
  onDetailsPress: PropTypes.func,
  onProfilePress: PropTypes.func
};

AutoPostHeader.propTypes = {
  post: PropTypes.object.isRequired,
  onDetailsPress: PropTypes.func,
  onProfilePress: PropTypes.func.isRequired
};

export default AutoPostHeader;
