import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Text } from '../../../../../lib/Text';
import Avatar from '../../../../../lib/Avatar';
import styles from './styles/SimpleTextHeaderStyles';

const NormalPostHeader = props => (
  <TouchableWithoutFeedback hitSlop={{ top: 17, bottom: 17, left: 10, right: 10 }} onPress={props.onDetailsPress}>
    <View style={styles.postContainer}>
      <TouchableWithoutFeedback onPress={props.onProfilePress}>
        <View style={styles.userInfoContainer}>
          <Avatar user={props.post.user} onPress={props.onProfilePress} />
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{props.post.user.first_name}</Text>
            <Text style={styles.userName}>{props.post.user.last_name}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.contentsContainer}>
        <TouchableWithoutFeedback onPress={props.onDetailsPress}>
          <View>
            <Text style={styles.mainText}>
              {props.text}
              {props.edited ? <Text style={styles.editedLabel}>{'\n\n'}Edited</Text> : null}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const SimpleTextHeader = props => <NormalPostHeader {...props} />;

SimpleTextHeader.propTypes = {
  text: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  edited: PropTypes.bool.isRequired,
  onDetailsPress: PropTypes.func,
  onProfilePress: PropTypes.func.isRequired
};
NormalPostHeader.propTypes = SimpleTextHeader.propTypes;

SimpleTextHeader.defaultProps = {
  edited: false
};

export default SimpleTextHeader;
