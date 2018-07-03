import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, ActivityIndicator } from 'react-native';
import { Text } from '../../../lib/Text';
import { Button } from 'react-native-elements';
import styles from './styles/EmailInputStyles';
import KeyboardAvoidingContainer from '../../../lib/views/KeyboardAvoidingContainer';
import theme from '../../../theme';
import * as EmailUtil from '../../../util/Email';

const EmailInput = ({ email, onEmailChange, onSavePress, busy }) => {
  if (busy) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color={theme.colors.secondary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingContainer>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>What is your email address?</Text>
        </View>
        <View style={styles.firstDescriptionContainer}>
          <Text style={styles.firstDescriptionText}>Your Facebook settings do not</Text>
          <Text style={styles.firstDescriptionText}>allow us to retrieve your email address,</Text>
          <Text style={styles.firstDescriptionText}>but we need it in order to finish</Text>
          <Text style={styles.firstDescriptionText}>the registration.</Text>
        </View>
        <View style={styles.contentContainer}>
          <TextInput
            value={email}
            onChangeText={onEmailChange}
            style={styles.emailInput}
            selectionColor={theme.colors.secondary}
            underlineColorAndroid="transparent"
            autoFocus={true}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.submitButtonContainer}>
          <Button
            containerViewStyle={styles.buttonContainerStyle}
            buttonStyle={styles.buttonStyle}
            fontWeight="bold"
            fontSize={20}
            title="Save"
            backgroundColor={theme.colors.secondary}
            onPress={onSavePress}
            disabled={!EmailUtil.validate(email)}
          />
        </View>
      </KeyboardAvoidingContainer>
    </View>
  );
};

EmailInput.propTypes = {
  email: PropTypes.string,
  busy: PropTypes.bool.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onSavePress: PropTypes.func.isRequired
};

export default EmailInput;
