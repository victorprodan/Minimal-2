import { Platform } from 'react-native';

export const getImageUri = image => (Platform.OS === 'ios' ? image.uri.replace('file://', '') : `file://${image.path}`);
