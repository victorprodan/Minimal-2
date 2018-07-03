import SplashScreen from 'react-native-smart-splash-screen';

const close = () =>
  SplashScreen.close({
    animationType: SplashScreen.animationType.scale,
    duration: 850,
    delay: 1000
  });

export default {
  close
};
