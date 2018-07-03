import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import ActionButton from '../../../lib/views/ActionButton';
import KeyboardAvoidingContainer from '../../../lib/views/KeyboardAvoidingContainer';
import styles from './styles/PhotoConfirmationStyles';
import theme from '../../../theme';

const STATES = ['Public', 'Private'];
const HEIGHTS = [theme.metrics.device.height * 0.1, 100];

class PhotoConfirmation extends React.Component {
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
    this.props.onSave(this.props.imageUri, this.state.comment, this.state.index === 0);
  }

  render() {
    if (!this.props.imageUri) {
      return null;
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback style={styles.overallContainer} onPress={() => Keyboard.dismiss()}>
          <View>
            <KeyboardAvoidingContainer style={styles.keyboardAvoidingContainer}>
              <Image source={{ uri: this.props.imageUri }} style={styles.image} resizeMode="cover" />
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
              <View style={styles.buttonGroupBackground}>
                <ButtonGroup
                  onPress={index => this.setState({ index })}
                  selectedIndex={this.state.index}
                  buttons={STATES}
                  containerStyle={styles.buttonsContainer}
                  innerBorderStyle={{ color: theme.colors.snow }}
                  selectedBackgroundColor={theme.colors.snow}
                  textStyle={styles.buttonGroupText}
                  selectedTextStyle={styles.buttonGroupTextSelected}
                  underlayColor={theme.colors.primaryText}
                  containerBorderRadius={3}
                />
              </View>
              <ActionButton text={this.state.index === 0 ? 'Post' : 'Save'} onPress={this.onSave} />
            </KeyboardAvoidingContainer>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

PhotoConfirmation.propTypes = {
  imageUri: PropTypes.string,
  onSave: PropTypes.func.isRequired
};

export default PhotoConfirmation;
