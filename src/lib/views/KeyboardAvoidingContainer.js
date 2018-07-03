import React from 'react';
import PropTypes from 'prop-types';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './styles/KeyboardAvoidingContainerStyles';
import theme from '../../theme';

const Container = ({ children, style, absolute }) =>
  Platform.OS === 'ios' ? (
    <KeyboardAvoidingView
      behavior="padding"
      style={[styles.container, style]}
      keyboardVerticalOffset={absolute ? 0 : theme.metrics.header.totalHeight}
    >
      {children}
    </KeyboardAvoidingView>
  ) : (
    <View style={styles.container}>{children}</View>
  );

Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.any,
  absolute: PropTypes.bool
};

Container.defaultProps = {
  absolute: false // inside a screen with navigation
};

export default Container;
