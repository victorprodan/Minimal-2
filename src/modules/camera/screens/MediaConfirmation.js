import React from 'react';
import HeaderTextButton from '../../../navigation/views/HeaderTextButton';
import BackButton from '../../../navigation/views/BackButton';
import MinimalaConfirmation from '../containers/MediaConfirmation';
import { Creators as CameraActions } from '../reducer';

const MediaConfirmationScreen = () => <MinimalaConfirmation />;

MediaConfirmationScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Share & Comment',
  headerLeft: (
    <BackButton
      onPress={() => {
        navigation.goBack();
        navigation.dispatch(CameraActions.discardImage());
      }}
    />
  ),
  headerRight: (
    <HeaderTextButton
      title="Discard"
      onPress={() => {
        navigation.dispatch(CameraActions.navigateHomeFromConfirmation());
        navigation.dispatch(CameraActions.discardImage());
      }}
    />
  )
});

export default MediaConfirmationScreen;
