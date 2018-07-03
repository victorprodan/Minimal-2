import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import styles from './styles/FacebookLoginStyles';

const FacebookLogin = props => (
  <View style={styles.container}>
    <SocialIcon
      type="facebook"
      iconColor="white"
      button
      title="Login via Facebook"
      style={styles.button}
      onPress={props.onPress}
      onLongPress={props.onPress}
      loading={props.loggingIn}
      disabled={props.loggingIn}
      fontStyle={styles.fontStyle}
    />
  </View>
);

FacebookLogin.propTypes = {
  loggingIn: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default FacebookLogin;
