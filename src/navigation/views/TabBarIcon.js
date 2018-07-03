import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';

const iconStyle = { marginTop: 8 };

const TabBarIcon = props => (
  <Icon type={props.type} name={props.name} size={30} iconStyle={[iconStyle, { color: props.color }]} />
);

TabBarIcon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

TabBarIcon.defaultProps = {
  type: 'material-community'
};

export default TabBarIcon;
