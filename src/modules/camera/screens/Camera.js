import React from 'react';
import Camera from '../containers/Camera';
import CaptureModeSwitch from './CaptureModeSwitch';
import CameraBackButton from './CameraBackButton';
import theme from '../../../theme';

const CameraScreen = () => <Camera />;

CameraScreen.navigationOptions = () => ({
  headerTitle: 'Take a photo',
  headerStyle: {
    paddingRight: 20,
    backgroundColor: 'white',
    height: theme.metrics.header.height,
    borderBottomColor: 'white'
  },
  headerLeft: <CameraBackButton />,
  headerRight: <CaptureModeSwitch />
});

export default CameraScreen;
