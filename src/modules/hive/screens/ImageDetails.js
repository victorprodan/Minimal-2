import React from 'react';
import ImageDetails from '../containers/ImageDetails';
import HeaderIconButton from '../../../navigation/views/HeaderIconButton';
import { Creators as HiveActions } from '../reducer';

const ImageDetailsScreen = () => <ImageDetails />;

ImageDetailsScreen.navigationOptions = ({ navigation }) => ({
  headerRight: (
    <HeaderIconButton
      iconName="md-trash"
      iconType="ionicon"
      onPress={() => navigation.dispatch(HiveActions.deleteImage(navigation.state.params.id))}
    />
  ),
  headerStyle: {
    backgroundColor: '#000',
    borderBottomColor: '#000'
  }
});

export default ImageDetailsScreen;
