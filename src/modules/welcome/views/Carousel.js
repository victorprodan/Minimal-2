import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text } from '../../../lib/Text';
import styles from './styles/CarouselStyles';
import theme from '../../../theme';

class Carousel extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Image source={theme.images.appLogo.loginImage} style={styles.carousel} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.props.onGetStartedPress}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Carousel.propTypes = {
  onGetStartedPress: PropTypes.func.isRequired
};

export default Carousel;
