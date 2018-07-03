// forked from https://github.com/geremih/react-native-circular-action-menu
import React from 'react';
import PropTypes from 'prop-types';
import { View, Animated, TouchableOpacity } from 'react-native';
import styles from './styles/ActionButtonItemStyles';

export default class ActionButtonItem extends React.Component {
  render() {
    const offsetX = this.props.radius * Math.cos(this.props.angle);
    const offsetY = this.props.radius * Math.sin(this.props.angle);
    return (
      <Animated.View
        style={[
          {
            opacity: this.props.anim,
            width: this.props.size,
            height: this.props.size,
            transform: [
              {
                translateY: this.props.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, offsetY]
                })
              },
              {
                translateX: this.props.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, offsetX]
                })
              },
              {
                rotate: this.props.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '720deg']
                })
              },
              {
                scale: this.props.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1]
                })
              }
            ]
          }
        ]}
      >
        <TouchableOpacity style={styles.button} activeOpacity={this.props.activeOpacity} onPress={this.props.onPress}>
          <View
            style={[
              styles.actionButton,
              {
                width: this.props.size,
                height: this.props.size,
                borderRadius: this.props.size / 2,
                backgroundColor: this.props.buttonColor
              }
            ]}
          >
            {this.props.children}
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

ActionButtonItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,

  angle: PropTypes.number,
  radius: PropTypes.number,
  buttonColor: PropTypes.string,
  size: PropTypes.number,
  anim: PropTypes.any,
  activeOpacity: PropTypes.number
};

ActionButtonItem.defaultProps = {
  activeOpacity: 0.85
};
