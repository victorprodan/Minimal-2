import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { Text } from '../../../lib/Text';
import styles from './styles/WelcomeFinishStyles';
import ActionButton from '../../../lib/views/ActionButton';
import theme from '../../../theme';

const WelcomeFinish = props => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={theme.images.appLogo.loginImage} style={styles.appLogo} />
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Done</Text>
    </View>
    <View style={styles.firstDescriptionContainer}>
      <Text style={styles.descriptionText}>You have successfully created</Text>
      <Text style={styles.descriptionText}>your account.</Text>
    </View>
    <ActionButton text="Take me further" onPress={props.onTakeTourPress} />
  </View>
);

WelcomeFinish.propTypes = {
  nickname: PropTypes.string.isRequired,
  onTakeTourPress: PropTypes.func.isRequired
};

export default WelcomeFinish;
