import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Text } from '../../../lib/Text';
import styles from './styles/WelcomeStyles';
import ActionButton from '../../../lib/views/ActionButton';
import theme from '../../../theme';

const Welcome = props => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={theme.images.appLogo.loginImage} style={styles.appLogo} />
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Welcome to Minimal!</Text>
    </View>
    <View style={styles.secondDescriptionContainer}>
      <Text style={styles.descriptionText}>Join a group with your friends</Text>
      <Text style={styles.descriptionText}>and share your moments with them</Text>
    </View>
    <ActionButton text="Continue" onPress={props.onNextPress} />
  </View>
);

Welcome.propTypes = {
  onNextPress: PropTypes.func.isRequired
};

export default Welcome;
