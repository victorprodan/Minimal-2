import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import { Text } from '../../../lib/Text';
import { Button } from 'react-native-elements';
import styles from './styles/NicknameStyles';
import KeyboardAvoidingContainer from '../../../lib/views/KeyboardAvoidingContainer';
import theme from '../../../theme';

const Nickname = ({ nickname, onNicknameChange, onNextPress }) => (
  <View style={styles.container}>
    <KeyboardAvoidingContainer>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You can set up a nickname for your account</Text>
      </View>
      <View style={styles.secondDescriptionContainer}>
        <Text style={styles.secondDescriptionText}>Enter the nickname below or</Text>
        <Text style={styles.secondDescriptionText}>skip this section.</Text>
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          value={nickname}
          onChangeText={onNicknameChange}
          maxLength={20}
          style={styles.nicknameInput}
          selectionColor={theme.colors.secondary}
          underlineColorAndroid="transparent"
          autoFocus={true}
          autoCapitalize="words"
        />
        <Text style={styles.charactersLeftStyle}>{20 - nickname.length} characters left</Text>
      </View>
      <View style={styles.submitButtonContainer}>
        <Button
          disabled={false}
          containerViewStyle={styles.buttonContainerStyle}
          buttonStyle={styles.buttonStyle}
          fontWeight="bold"
          fontSize={20}
          title="Continue"
          backgroundColor={theme.colors.primaryText}
          onPress={onNextPress}
        />
      </View>
    </KeyboardAvoidingContainer>
  </View>
);

Nickname.propTypes = {
  nickname: PropTypes.string.isRequired,
  onNicknameChange: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired
};

export default Nickname;
