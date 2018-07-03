import React from 'react';
import { Keyboard } from 'react-native';
import { StackNavigator } from 'react-navigation';
import BackButton from '../views/BackButton';
import * as KeyboardUtil from '../../util/Keyboard';
import theme from '../../theme';

const defaultStyles = {
  headerStyle: {
    backgroundColor: theme.colors.snow,
    height: theme.metrics.header.height,
    borderBottomColor: theme.colors.snow
  },
  headerTitleStyle: { color: theme.colors.primaryText },
  headerTintColor: theme.colors.snow
};

const defaults = ({ navigation }) => ({
  headerLeft: (
    <BackButton
      onPress={() => {
        if (KeyboardUtil.keyboardVisible) {
          Keyboard.dismiss();
        } else {
          navigation.goBack(null);
        }
      }}
    />
  ),
  headerBackTitle: ' ',
  headerMode: 'screen',
  gesturesEnabled: false,
  ...defaultStyles
});

export default (screens, options = {}) => StackNavigator(screens, { navigationOptions: defaults, ...options });
