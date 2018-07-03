import React from 'react';
import HeaderTextButton from '../../../navigation/views/HeaderTextButton';
import BackButton from '../../../navigation/views/BackButton';
import VideoConfirmation from '../containers/VideoConfirmation';
import { Creators as CameraActions } from '../reducer';

const VideoConfirmationScreen = () => <VideoConfirmation />;

VideoConfirmationScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Share & Comment',
  headerLeft: (
    <BackButton
      onPress={() => {
        navigation.goBack();
        navigation.dispatch(CameraActions.discardVideo());
      }}
    />
  ),
  headerRight: (
    <HeaderTextButton
      title="Discard"
      onPress={() => {
        navigation.dispatch(CameraActions.navigateHomeFromConfirmation());
        navigation.dispatch(CameraActions.discardVideo());
      }}
    />
  )
});

export default VideoConfirmationScreen;
