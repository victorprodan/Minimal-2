import React, { Component } from 'react';
import { Animated, Dimensions, ScrollView, View, ViewPropTypes } from 'react-native';
import styles from './styles/ParallaxScrollViewStyles';
import PropTypes from 'prop-types';

// More info about how to use this component and the github repo of the original code:
// https://github.com/jaysoo/react-native-parallax-scroll-view
//
// Our component was updated since there was some deprecated code.

const window = Dimensions.get('window');
const pivotPoint = (a, b) => a - b;
const renderEmpty = () => <View />;

// Override `toJSON` of interpolated value because of
// an error when serializing style on view inside inspector.
// See: https://github.com/jaysoo/react-native-parallax-scroll-view/issues/23
const interpolate = (value, opts) => {
  const x = value.interpolate(opts);
  x.toJSON = () => x.__getValue();
  return x;
};

class ParallaxScrollView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      viewHeight: window.height,
      viewWidth: window.width
    };
    this._footerComponent = { setNativeProps() {} }; // Initial stub
    this._footerHeight = 0;
  }

  render() {
    const {
      backgroundColor,
      backgroundScrollSpeed,
      children,
      contentBackgroundColor,
      fadeOutForeground,
      fadeOutBackground,
      parallaxHeaderHeight,
      renderBackground,
      renderFixedHeader,
      renderForeground,
      renderParallaxHeader,
      renderScrollComponent,
      renderStickyHeader,
      stickyHeaderHeight,
      style,
      contentContainerStyle,
      ...scrollViewProps
    } = this.props;

    const background = this._renderBackground({
      fadeOutBackground,
      backgroundScrollSpeed,
      backgroundColor,
      parallaxHeaderHeight,
      stickyHeaderHeight,
      renderBackground
    });
    const foreground = this._renderForeground({
      fadeOutForeground,
      parallaxHeaderHeight,
      stickyHeaderHeight,
      renderForeground: renderForeground || renderParallaxHeader
    });
    const bodyComponent = this._wrapChildren(children, {
      contentBackgroundColor,
      stickyHeaderHeight,
      contentContainerStyle
    });
    const footerSpacer = this._renderFooterSpacer({ contentBackgroundColor });
    const maybeStickyHeader = this._maybeRenderStickyHeader({
      parallaxHeaderHeight,
      stickyHeaderHeight,
      backgroundColor,
      renderFixedHeader,
      renderStickyHeader
    });
    const scrollElement = renderScrollComponent(scrollViewProps);

    return (
      <View style={[style, styles.container]} onLayout={e => this._maybeUpdateViewDimensions(e)}>
        {background}
        {React.cloneElement(
          scrollElement,
          {
            ref: 'ScrollView',
            style: [styles.scrollView, scrollElement.props.style],
            scrollEventThrottle: 16,
            onScroll: this._onScroll.bind(this)
          },
          foreground,
          bodyComponent,
          footerSpacer
        )}
        {maybeStickyHeader}
      </View>
    );
  }

  /*
   * Expose `ScrollView` API so this component is composable with any component that expects a `ScrollView`.
   */
  getScrollResponder() {
    return this.ScrollView.getScrollResponder();
  }
  getScrollableNode() {
    return this.getScrollResponder().getScrollableNode();
  }
  getInnerViewNode() {
    return this.getScrollResponder().getInnerViewNode();
  }
  scrollTo(...args) {
    this.getScrollResponder().scrollTo(...args);
  }
  setNativeProps(props) {
    this.ScrollView.setNativeProps(props);
  }

  /*
   * Private helpers
   */

  _onScroll(e) {
    const {
      parallaxHeaderHeight,
      stickyHeaderHeight,
      onChangeHeaderVisibility,
      onScroll: prevOnScroll = () => {}
    } = this.props;

    const p = pivotPoint(parallaxHeaderHeight, stickyHeaderHeight);

    this._maybeUpdateScrollPosition(e);

    if (e.nativeEvent.contentOffset.y >= p) {
      onChangeHeaderVisibility(false);
    } else {
      onChangeHeaderVisibility(true);
    }

    prevOnScroll(e);
  }

  // This optimizes the state update of current scrollY since we don't need to
  // perform any updates when user has scrolled past the pivot point.
  _maybeUpdateScrollPosition(e) {
    const { parallaxHeaderHeight, stickyHeaderHeight } = this.props;
    const { scrollY } = this.state;
    const { nativeEvent: { contentOffset: { y: offsetY } } } = e;
    const p = pivotPoint(parallaxHeaderHeight, stickyHeaderHeight);

    if (offsetY <= p || scrollY._value <= p) {
      scrollY.setValue(offsetY);
    }
  }

  _maybeUpdateViewDimensions(e) {
    const { nativeEvent: { layout: { width, height } } } = e;

    if (width !== this.state.viewWidth || height !== this.state.viewHeight) {
      this.setState({
        viewWidth: width,
        viewHeight: height
      });
    }
  }

  _renderBackground({
    fadeOutBackground,
    backgroundScrollSpeed,
    backgroundColor,
    parallaxHeaderHeight,
    stickyHeaderHeight,
    renderBackground
  }) {
    const { viewWidth, viewHeight, scrollY } = this.state;
    const p = pivotPoint(parallaxHeaderHeight, stickyHeaderHeight);
    const customStyle = {
      backgroundColor: backgroundColor,
      height: parallaxHeaderHeight + 10,
      width: viewWidth,
      opacity: fadeOutBackground
        ? interpolate(scrollY, {
            inputRange: [0, p * (1 / 2), p * (3 / 4), p],
            outputRange: [1, 0.3, 0.1, 0],
            extrapolate: 'clamp'
          })
        : 1,
      transform: [
        {
          translateY: interpolate(scrollY, {
            inputRange: [0, p],
            outputRange: [0, -(p / backgroundScrollSpeed)],
            extrapolateRight: 'extend',
            extrapolateLeft: 'clamp'
          })
        },
        {
          scale: interpolate(scrollY, {
            inputRange: [-viewHeight, 0],
            outputRange: [5, 1],
            extrapolate: 'clamp'
          })
        }
      ]
    };
    return (
      <Animated.View style={[styles.backgroundImage, customStyle]}>
        <View>{renderBackground()}</View>
      </Animated.View>
    );
  }

  _renderForeground({ fadeOutForeground, parallaxHeaderHeight, stickyHeaderHeight, renderForeground }) {
    const { scrollY } = this.state;
    const p = pivotPoint(parallaxHeaderHeight, stickyHeaderHeight);
    const customStyle = {
      height: parallaxHeaderHeight,
      opacity: fadeOutForeground
        ? interpolate(scrollY, {
            inputRange: [-p * (1 / 7), 0, p * (1 / 2), p * (3 / 4), p],
            outputRange: [0, 1, 0.3, 0.1, 0],
            extrapolate: 'clamp'
          })
        : 1
    };
    return (
      <View style={styles.parallaxHeaderContainer}>
        <Animated.View style={[styles.parallaxHeader, customStyle]}>
          <View style={{ height: parallaxHeaderHeight }}>{renderForeground()}</View>
        </Animated.View>
      </View>
    );
  }

  _wrapChildren(children, { contentBackgroundColor, stickyHeaderHeight, contentContainerStyle }) {
    const { viewHeight } = this.state;
    const containerStyles = [{ backgroundColor: contentBackgroundColor }];

    if (contentContainerStyle) containerStyles.push(contentContainerStyle);

    return (
      <View
        style={containerStyles}
        onLayout={e => {
          // Adjust the bottom height so we can scroll the parallax header all the way up.
          const { nativeEvent: { layout: { height } } } = e;
          const footerHeight = Math.max(0, viewHeight - height - stickyHeaderHeight);
          if (this._footerHeight !== footerHeight) {
            this._footerComponent.setNativeProps({ style: { height: footerHeight } });
            this._footerHeight = footerHeight;
          }
        }}
      >
        {children}
      </View>
    );
  }

  _renderFooterSpacer({ contentBackgroundColor }) {
    return <View ref={ref => (this._footerComponent = ref)} style={{ backgroundColor: contentBackgroundColor }} />;
  }

  _maybeRenderStickyHeader({
    parallaxHeaderHeight,
    stickyHeaderHeight,
    backgroundColor,
    renderFixedHeader,
    renderStickyHeader
  }) {
    const { viewWidth, scrollY } = this.state;
    if (renderStickyHeader || renderFixedHeader) {
      const p = pivotPoint(parallaxHeaderHeight, stickyHeaderHeight);
      return (
        <View
          style={[
            styles.stickyHeader,
            { width: viewWidth, ...(stickyHeaderHeight ? { height: stickyHeaderHeight } : null) }
          ]}
        >
          {renderStickyHeader ? (
            <Animated.View
              style={{
                backgroundColor: backgroundColor,
                height: stickyHeaderHeight,
                opacity: interpolate(scrollY, {
                  inputRange: [0, p],
                  outputRange: [0, 1],
                  extrapolate: 'clamp'
                })
              }}
            >
              <Animated.View
                style={{
                  transform: [
                    {
                      translateY: interpolate(scrollY, {
                        inputRange: [0, p],
                        outputRange: [stickyHeaderHeight, 0],
                        extrapolate: 'clamp'
                      })
                    }
                  ]
                }}
              >
                {renderStickyHeader()}
              </Animated.View>
            </Animated.View>
          ) : null}
          {renderFixedHeader && renderFixedHeader()}
        </View>
      );
    } else {
      return null;
    }
  }
}

ParallaxScrollView.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  backgroundColor: PropTypes.string,
  backgroundScrollSpeed: PropTypes.number,
  fadeOutForeground: PropTypes.bool,
  fadeOutBackground: PropTypes.bool,
  contentBackgroundColor: PropTypes.string,
  onChangeHeaderVisibility: PropTypes.func,
  parallaxHeaderHeight: PropTypes.number.isRequired,
  renderBackground: PropTypes.func,
  renderFixedHeader: PropTypes.func,
  renderForeground: PropTypes.func,
  renderScrollComponent: PropTypes.func,
  renderStickyHeader: PropTypes.func,
  renderParallaxHeader: PropTypes.func,
  onScroll: PropTypes.func,
  stickyHeaderHeight: PropTypes.number,
  contentContainerStyle: ViewPropTypes.style
};

ParallaxScrollView.defaultProps = {
  backgroundScrollSpeed: 5,
  backgroundColor: '#000',
  contentBackgroundColor: '#fff',
  fadeOutForeground: true,
  onChangeHeaderVisibility: () => {},
  renderScrollComponent: props => <ScrollView {...props} />,
  renderBackground: renderEmpty,
  renderParallaxHeader: renderEmpty, // Deprecated (will be removed in 0.18.0)
  renderForeground: null,
  stickyHeaderHeight: 0,
  contentContainerStyle: null
};

module.exports = ParallaxScrollView;
