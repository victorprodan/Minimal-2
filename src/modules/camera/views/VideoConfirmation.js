import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard, StatusBar, TextInput } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import ActionButton from '../../../lib/views/ActionButton';
import KeyboardAvoidingContainer from '../../../lib/views/KeyboardAvoidingContainer';
import styles from './styles/VideoConfirmationStyles';
import theme from '../../../theme';

class VideoConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
    this.onSave = this.onSave.bind(this);
  }

  onSave() {
    Keyboard.dismiss();
    this.props.onSave(this.props.videoUri, this.state.comment);
  }

  render() {
    if (!this.props.videoUri) {
      return null;
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.overallContainer} onPress={() => Keyboard.dismiss()}>
          <View>
            <KeyboardAvoidingContainer style={styles.keyboardAvoidingContainer}>
              <View style={styles.videoContainer}>
                <VideoPlayer
                  video={{ uri: this.props.videoUri }}
                  style={styles.video}
                  autoplay
                  loop
                  hideControlsOnStart
                  onFullscreenPlayerDidDismiss={() => StatusBar.setHidden(false)}
                />
              </View>

              <View style={styles.actionContainer}>
                <TextInput
                  onChangeText={text => this.setState({ comment: text })}
                  style={styles.textInput}
                  multiline={true}
                  autoCapitalize="sentences"
                  placeholder="Write a comment..."
                  placeholderTextColor={theme.colors.greyedText}
                  selectionColor={theme.colors.secondary}
                  underlineColorAndroid="transparent"
                />
              </View>
              <ActionButton text="Post" onPress={this.onSave} />
            </KeyboardAvoidingContainer>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

VideoConfirmation.propTypes = {
  videoUri: PropTypes.string,
  onSave: PropTypes.func.isRequired
};

export default VideoConfirmation;
