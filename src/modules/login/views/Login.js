import React from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing, View, TouchableWithoutFeedback } from 'react-native';
import { Text } from '../../../lib/Text';
import styles from './styles/LoginStyles';
import FacebookLogin from '../containers/FacebookLogin';
import theme from '../../../theme';

const TappableLink = props => (
  <TouchableWithoutFeedback onPress={props.onPress} hitSlop={{ top: 20, bottom: 20, left: 0, right: 0 }}>
    <View>
      <Text style={styles.tappableLinkText}>{props.text}</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default class Login extends React.Component {
  spinValue = new Animated.Value(0);

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.spinValue, {
        toValue: 1,
        duration: 20000,
        easing: Easing.linear
      })
    ).start();
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Animated.Image
            source={theme.images.roundLogo}
            style={[
              styles.appLogo,
              {
                transform: [{ rotate: spin }]
              }
            ]}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.appHeader}>Minimal</Text>
        </View>
        <View />
        <View style={styles.loginButtonContainer}>
          <FacebookLogin />
        </View>
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>By creating an account, I agree to the Minimal</Text>
          <View style={styles.linkTextLine}>
            <TappableLink onPress={this.props.onTermsPress} text="Terms of Use" />
            <Text style={styles.linkText}> and </Text>
            <TappableLink onPress={this.props.onPrivacyPress} text="Privacy Policy" />
          </View>
        </View>
      </View>
    );
  }
}

TappableLink.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

Login.propTypes = {
  onTermsPress: PropTypes.func.isRequired,
  onPrivacyPress: PropTypes.func.isRequired
};

// export default Login;
