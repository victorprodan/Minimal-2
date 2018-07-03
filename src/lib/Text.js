import React from 'react';
import { Text as RNText } from 'react-native';
import { PropTypes } from 'prop-types';

export const Text = props => <RNText {...props} style={props.style} />;

Text.propTypes = {
  style: PropTypes.any
};

Text.defaultProps = {
  style: { fontSize: 12, fontFamily: 'Roboto' }
};
