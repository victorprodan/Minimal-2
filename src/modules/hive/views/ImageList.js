import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Image, TouchableWithoutFeedback } from 'react-native';
import { Text } from '../../../lib/Text';
import R from 'ramda';
import styles from './styles/ImageListStyles';

const IMAGES_PER_ROW = 3;

const ImageList = props => {
  const renderImageGroup = group => (
    <View style={styles.imageGroup}>{group.item.map(image => renderImage(image))}</View>
  );

  const renderImage = image => (
    <TouchableWithoutFeedback key={image.thumbnail_url} onPress={() => props.onImageSelected(image)}>
      <Image source={{ uri: image.thumbnail_url }} style={styles.image} resizeMode="cover" />
    </TouchableWithoutFeedback>
  );

  const groups = R.splitEvery(IMAGES_PER_ROW, props.images);

  return (
    <View>
      {props.images.length > 0 ? (
        <View>
          <View style={styles.divider} />
          <Text style={styles.galleryTitle}>Portfolio</Text>
          <FlatList data={groups} renderItem={renderImageGroup} keyExtractor={(group, index) => index} />
        </View>
      ) : null}
    </View>
  );
};

ImageList.propTypes = {
  images: PropTypes.array.isRequired,
  onImageSelected: PropTypes.func.isRequired
};

export default ImageList;
