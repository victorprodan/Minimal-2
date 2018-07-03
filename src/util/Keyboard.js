import { Keyboard } from 'react-native';

export let keyboardVisible = false;
Keyboard.addListener('keyboardDidShow', () => {
  keyboardVisible = true;
});
Keyboard.addListener('keyboardDidHide', () => {
  keyboardVisible = false;
});

export const dismissIfVisible = () => {
  if (keyboardVisible) {
    Keyboard.dismiss();
  }
};
