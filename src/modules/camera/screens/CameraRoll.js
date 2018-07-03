import React from 'react';
import CameraRoll from '../containers/CameraRoll';

const CameraRollScreen = () => <CameraRoll />;

CameraRollScreen.navigationOptions = () => ({
  headerTitle: 'Camera Roll'
});

export default CameraRollScreen;
