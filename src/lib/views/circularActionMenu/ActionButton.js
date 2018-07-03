// forked from https://github.com/geremih/react-native-circular-action-menu
import React from 'react';
import PropTypes from 'prop-types';
import { View, Animated, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import ActionButtonItem from './ActionButtonItem';
import styles from './styles/ActionButtonStyles';

const alignMap = {
  center: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    startDegree: 180,
    endDegree: 360
  },

  left: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    startDegree: 270,
    endDegree: 360
  },

  right: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    startDegree: 180,
    endDegree: 270
  }
};

export default class ActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      anim: new Animated.Value(props.active ? 1 : 0)
    };

    this.timeout = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  getActionButtonStyle() {
    return [styles.actionBarItem, this.getButtonSize()];
  }

  getActionContainerStyle() {
    const { alignItems, justifyContent } = alignMap[this.props.position];
    return [
      styles.overlay,
      styles.actionContainer,
      {
        alignItems,
        justifyContent
      }
    ];
  }

  getActionsStyle() {
    return [this.getButtonSize()];
  }

  getButtonSize() {
    return {
      width: this.props.size,
      height: this.props.size
    };
  }

  animateButton() {
    if (this.state.active) {
      this.reset();
      return;
    }

    Animated.spring(this.state.anim, {
      toValue: 1,
      duration: 250
    }).start();

    this.setState({ active: true });
  }

  reset() {
    Animated.spring(this.state.anim, {
      toValue: 0,
      duration: 250
    }).start();

    setTimeout(() => {
      this.setState({ active: false });
    }, 250);
  }

  renderButton() {
    return (
      <View style={this.getActionButtonStyle()}>
        <TouchableOpacity
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          activeOpacity={0.85}
          onPress={() => {
            this.props.onPress();
            if (this.props.children) {
              this.animateButton();
            }
          }}
        >
          <Animated.View
            style={[
              styles.btn,
              {
                width: this.props.size,
                height: this.props.size,
                borderRadius: this.props.size / 2,
                backgroundColor: this.state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [this.props.buttonColor, this.props.btnOutRange]
                }),
                transform: [
                  {
                    scale: this.state.anim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, this.props.outRangeScale]
                    })
                  },
                  {
                    rotate: this.state.anim.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', this.props.degrees + 'deg']
                    })
                  }
                ]
              }
            ]}
          >
            {this.renderButtonIcon()}
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
  }

  renderButtonIcon() {
    if (this.props.icon) {
      return this.props.icon;
    }

    return (
      <Animated.Text
        style={[
          styles.btnText,
          {
            color: this.state.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [this.props.buttonTextColor, this.props.btnOutRangeTxt]
            })
          }
        ]}
      >
        +
      </Animated.Text>
    );
  }

  renderActions() {
    if (!this.state.active) return null;
    const startDegree = this.props.startDegree || alignMap[this.props.position].startDegree;
    const endDegree = this.props.endDegree || alignMap[this.props.position].endDegree;
    const startRadian = startDegree * Math.PI / 180;
    const endRadian = endDegree * Math.PI / 180;

    const childrenCount = React.Children.count(this.props.children);
    let offset = 0;
    if (childrenCount !== 1) {
      offset = (endRadian - startRadian) / (childrenCount - 1);
    }

    return React.Children.map(this.props.children, (button, index) => (
      <View pointerEvents="box-none" style={this.getActionContainerStyle()}>
        <ActionButtonItem
          key={index}
          position={this.props.position}
          anim={this.state.anim}
          size={this.props.itemSize}
          radius={this.props.radius}
          angle={startRadian + index * offset}
          btnColor={this.props.btnOutRange}
          {...button.props}
          onPress={() => {
            if (this.props.autoInactive) {
              this.timeout = setTimeout(() => {
                this.reset();
              }, 200);
            }
            button.props.onPress();
          }}
        />
      </View>
    ));
  }

  render() {
    let backdrop;
    if (this.state.active) {
      backdrop = (
        <TouchableWithoutFeedback
          style={styles.overlay}
          onPress={() => {
            this.reset();
            this.props.onOverlayPress();
          }}
        >
          <Animated.View
            style={[
              styles.backdropContainer,
              {
                backgroundColor: this.props.bgColor,
                opacity: this.state.anim
              }
            ]}
          >
            {this.props.backdrop}
          </Animated.View>
        </TouchableWithoutFeedback>
      );
    }

    const containerTop = this.state.active ? -1000 : 0;

    return (
      <View pointerEvents="box-none" style={[styles.overlay, { top: containerTop }]}>
        {backdrop}

        {this.props.children && this.renderActions()}
        <View pointerEvents="box-none" style={this.getActionContainerStyle()}>
          {this.renderButton()}
        </View>
      </View>
    );
  }
}

ActionButton.Item = ActionButtonItem;

ActionButton.propTypes = {
  // button props
  onPress: PropTypes.func,
  size: PropTypes.number,
  children: PropTypes.node.isRequired,
  buttonColor: PropTypes.string,
  btnOutRange: PropTypes.string,
  outRangeScale: PropTypes.number,
  degrees: PropTypes.number,

  // button icon props
  icon: PropTypes.node,
  buttonTextColor: PropTypes.string,
  btnOutRangeTxt: PropTypes.string,

  // generic
  active: PropTypes.bool,
  position: PropTypes.oneOf(['left', 'center', 'right']),
  autoInactive: PropTypes.bool,

  // item props
  startDegree: PropTypes.number,
  endDegree: PropTypes.number,
  itemSize: PropTypes.number,
  radius: PropTypes.number,

  // overlay
  bgColor: PropTypes.string,
  onOverlayPress: PropTypes.func,
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};

ActionButton.defaultProps = {
  onPress: () => {},
  size: 63,
  buttonColor: 'rgba(0,0,0,1)',
  btnOutRange: 'rgba(0,0,0,1)',
  outRangeScale: 1.2,
  degrees: 135,

  buttonTextColor: 'rgba(255,255,255,1)',
  btnOutRangeTxt: 'rgba(255,255,255,1)',

  active: false,
  position: 'center',
  autoInactive: true,

  itemSize: 36,
  radius: 100,

  bgColor: 'transparent',
  onOverlayPress: () => {},
  backdrop: false
};
