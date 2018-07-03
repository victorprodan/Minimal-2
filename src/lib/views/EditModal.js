import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native';
import { Text } from '../Text';
import Modal from 'react-native-modal';
import styles from './styles/EditModalStyles';
import KeyboardAvoidingContainer from '../../lib/views/KeyboardAvoidingContainer';

const Button = ({
  text,
  enabled,
  onPress,
  enabledContainerStyles,
  disabledContainerStyles,
  enabledTextStyles,
  disabledTextStyles
}) => {
  if (enabled) {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, enabledContainerStyles]}>
        <View>
          <Text style={[styles.buttonText, enabledTextStyles]}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={[styles.button, disabledContainerStyles]}>
        <Text style={[styles.buttonText, disabledTextStyles]}>{text}</Text>
      </View>
    );
  }
};

const EditModal = props => {
  if (props.busy) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    <Modal style={styles.modal} isVisible={props.shown} onBackButtonPress={props.onCancel}>
      <KeyboardAvoidingContainer style={styles.container} absolute={true}>
        <View style={styles.contentContainer}>
          <TextInput
            defaultValue={props.defaultValue}
            onChangeText={props.onChange}
            autoFocus={true}
            style={styles.textInput}
            keyboardType={props.keyboardType}
            multiline={props.multiline}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Cancel" onPress={props.onCancel} enabledContainerStyles={styles.cancelButton} />
          <Button
            text="Save"
            enabled={!props.saveDisabled}
            onPress={props.onSave}
            enabledContainerStyles={styles.saveButtonEnabled}
            disabledContainerStyles={styles.saveButtonDisabled}
            enabledTextStyles={styles.saveButtonEnabledText}
            disabledTextStyles={styles.saveButtonDisabledText}
          />
        </View>
      </KeyboardAvoidingContainer>
    </Modal>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  enabled: PropTypes.bool,
  onPress: PropTypes.func,
  enabledContainerStyles: PropTypes.any,
  disabledContainerStyles: PropTypes.any,
  enabledTextStyles: PropTypes.any,
  disabledTextStyles: PropTypes.any
};

Button.defaultProps = {
  enabled: true
};

EditModal.propTypes = {
  shown: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  busy: PropTypes.bool.isRequired,
  saveDisabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  keyboardType: PropTypes.string,
  multiline: PropTypes.bool
};

export default EditModal;
