import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';
import PhotoView from 'react-native-photo-view';
import styles from './styles/ImageDetailsStyles';

const ImageDetails = ({ image }) => (
  <View style={styles.container}>
    <View style={styles.spinnerContainer}>
      <ActivityIndicator animating={true} size="large" />
    </View>
    <PhotoView
      source={{ uri: image.image_url }}
      minimumZoomScale={1}
      maximumZoomScale={3}
      androidScaleType="fitCenter"
      style={styles.image}
    />
  </View>
);

ImageDetails.propTypes = {
  image: PropTypes.object.isRequired
};

export default ImageDetails;
