import { StyleSheet } from 'react-native';
import theme from '../../../../theme';

const avatarContainer = {
  alignItems: 'center',
  justifyContent: 'center'
};

export default StyleSheet.create({
  // level 1
  avatarContainerXsmall: {
    ...avatarContainer,
    width: 31,
    height: 31,
    borderRadius: 15
  },
  avatarContainerSmall: {
    ...avatarContainer,
    width: 39,
    height: 39,
    borderRadius: 20
  },
  avatarContainerMinial: {
    ...avatarContainer,
    width: 48,
    height: 48,
    borderRadius: 24
  },
  avatarContainerLarge: {
    ...avatarContainer,
    width: 140,
    height: 140,
    borderRadius: 70
  },
  avatarContainerPostPreview: {
    ...avatarContainer,
    width: theme.metrics.device.width * 0.7,
    height: theme.metrics.device.width * 0.7,
    borderRadius: theme.metrics.device.width * 0.35
  },

  avatarContainerXl: {
    ...avatarContainer,
    width: 80,
    height: 80,
    borderRadius: 40
  },

  // level 2
  avatarImageXsmall: {
    width: 26,
    height: 26,
    borderRadius: 13
  },
  avatarImageSmall: {
    width: 34,
    height: 34,
    borderRadius: 17
  },
  avatarImageMinial: {
    width: 43,
    height: 43,
    borderRadius: 22
  },
  avatarImageLarge: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  avatarImagePostPreview: {
    width: theme.metrics.device.width * 0.7,
    height: theme.metrics.device.width * 0.7
    // borderRadius: theme.metrics.device.width * 0.35
  },
  avatarImageXl: {
    width: 72,
    height: 72,
    borderRadius: 36
  }
});
