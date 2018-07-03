import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { Text } from '../../../lib/Text';
import { Button } from 'react-native-elements';
import styles from './styles/NewTextPostStyles';
import theme from '../../../theme';
import Avatar from '../../../lib/Avatar';
import KeyboardAvoidingContainer from '../../../lib/views/KeyboardAvoidingContainer';
import * as KeyboardUtil from '../../../util/Keyboard';

const NewTextPost = props => (
  <KeyboardAvoidingContainer style={styles.container}>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Avatar user={props.user} />
        <View style={styles.textContainer}>
          <Text style={styles.userName}>{props.user.first_name}</Text>
          <Text style={styles.userName}>{props.user.last_name}</Text>
        </View>
      </View>
      <View style={styles.postContainer}>
        <TextInput
          autoCapitalize="sentences"
          placeholder="Create new post..."
          placeholderTextColor={theme.colors.grey}
          multiline={true}
          style={styles.textInput}
          selectionColor={theme.colors.secondary}
          value={props.newPostMessage}
          onChangeText={props.onNewPostMessageChange}
          underlineColorAndroid="transparent"
          autoFocus={true}
        />
      </View>
      <View style={styles.submitButtonContainer}>
        <Button
          disabled={props.newPostMessage ? false : true}
          containerViewStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyle}
          fontWeight="bold"
          fontSize={20}
          title="Post"
          backgroundColor={theme.colors.valid}
          onPress={() => {
            KeyboardUtil.dismissIfVisible();
            props.onSubmitNewPost(props.newPostMessage);
          }}
        />
      </View>
    </View>
  </KeyboardAvoidingContainer>
);

NewTextPost.propTypes = {
  user: PropTypes.object.isRequired,
  newPostMessage: PropTypes.string,
  onPress: PropTypes.func,
  onNewPostMessageChange: PropTypes.func.isRequired,
  onSubmitNewPost: PropTypes.func.isRequired
};

export default NewTextPost;
