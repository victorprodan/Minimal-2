import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const HEADER_HEIGHT = Platform.select({ ios: 54, android: 74 });
const STATUSBAR_HEIGHT = Platform.select({ ios: 20, android: 0 });

export default {
  device: { height, width, pixelRatio: PixelRatio.get(), fontScale: PixelRatio.getFontScale() },
  header: { height: HEADER_HEIGHT, totalHeight: HEADER_HEIGHT + STATUSBAR_HEIGHT },
  statusBar: { height: STATUSBAR_HEIGHT },
  screen: { height: height - HEADER_HEIGHT - STATUSBAR_HEIGHT, width: width },
  toast: {
    height: height / 14,
    fontSize: height / 50,
    animationDuration: 500,
    showDuration: 3000
  }
};
