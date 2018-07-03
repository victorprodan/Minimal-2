import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

const IMAGE_PADDING = 6;
const IMAGE_SIZE = (theme.metrics.device.width - 2 * IMAGE_PADDING) / 3;

export default StyleSheet.create({
  imageGroup: {
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginTop: IMAGE_PADDING,
    marginRight: IMAGE_PADDING
  },
  divider: {
    height: 0.5,
    backgroundColor: theme.colors.grey,
    opacity: 0.3,
    marginHorizontal: 16
  },
  galleryTitle: {
    fontSize: 14,
    marginTop: 20,
    marginLeft: 16,
    fontWeight: '500',
    paddingBottom: 10
  }
});
