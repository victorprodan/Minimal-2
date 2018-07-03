import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TextInput, TouchableWithoutFeedback, StatusBar, Keyboard } from 'react-native';
import VideoPlayer from 'react-native-video-player';
import ActionButton from '../../../lib/views/ActionButton';
import KeyboardAvoidingContainer from '../../../lib/views/KeyboardAvoidingContainer';
import styles from './styles/MediaConfirmationStyles';
import theme from '../../../theme';

const HEIGHTS = [theme.metrics.device.height * 0.1, 100];

class MediaConfirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      comment: ''
    };
    this.onSave = this.onSave.bind(this);
  }

  onSave() {
    Keyboard.dismiss();
    this.props.onSave(this.props.mediaUri, this.state.comment, this.state.index === 0);
  }

  render() {
    if (!this.props.mediaUri) {
      return null;
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.overallContainer} onPress={() => Keyboard.dismiss()}>
          <View>
            <KeyboardAvoidingContainer style={styles.keyboardAvoidingContainer}>
              {this.props.assetType === 'Videos' ? (
                <VideoPlayer
                  video={{ uri: this.props.mediaUri }}
                  style={styles.video}
                  resizeMode="cover"
                  autoplay
                  loop
                  hideControlsOnStart
                  onFullscreenPlayerDidDismiss={() => StatusBar.setHidden(false)}
                />
              ) : (
                <Image source={{ uri: this.props.mediaUri }} style={styles.image} resizeMode="cover" />
              )}
              {this.state.index === 0 ? (
                <View style={[styles.actionContainer, { height: HEIGHTS[this.state.index] }]}>
                  <TextInput
                    style={styles.textInput}
                    autoCapitalize="sentences"
                    placeholder="Write a comment..."
                    placeholderTextColor={theme.colors.greyedText}
                    selectionColor={theme.colors.secondary}
                    multiline={true}
                    onChangeText={text => this.setState({ comment: text })}
                    underlineColorAndroid="transparent"
                  />
                </View>
              ) : null}
              <ActionButton text={this.state.index === 0 ? 'Post' : 'Save'} onPress={this.onSave} />
            </KeyboardAvoidingContainer>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

MediaConfirmation.propTypes = {
  assetType: PropTypes.string,
  mediaUri: PropTypes.string,
  onSave: PropTypes.func.isRequired
};

export default MediaConfirmation;
