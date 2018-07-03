import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableWithoutFeedback, Linking } from 'react-native';
import { Text } from '../../../../../lib/Text';
import styles from './styles/LinkPreviewStyles';
import theme from '../../../../../theme';

const IMAGE_MARGIN = 40;
const IMAGE_MAX_HEIGHT = 300;

class LinkPreview extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { height: null, width: null };
    this.getImageUrl = this.getImageUrl.bind(this);
  }

  componentDidMount() {
    const imageUrl = this.getImageUrl();
    if (!imageUrl) {
      return;
    }
    Image.getSize(imageUrl, (width, height) => this.setState({ width, height }));
  }

  calculateImageStyles() {
    if (!this.state.width || !this.state.height) {
      return null;
    }

    const height = Math.min(theme.metrics.device.width / this.state.width * this.state.height, IMAGE_MAX_HEIGHT);
    const aspectRatio = this.state.width / this.state.height * height / theme.metrics.device.width;
    return { width: theme.metrics.device.width / aspectRatio - IMAGE_MARGIN, height: height - IMAGE_MARGIN };
  }

  getImageUrl() {
    if (!this.props.images || !this.props.images[0]) {
      return null;
    }
    return this.props.images[0].src.replace('http://', 'https://');
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Linking.openURL(this.props.url)}>
        <View style={styles.container}>
          {this.props.expanded ? (
            <View style={styles.largeImageContainer}>
              <Image
                style={[styles.largeImage, this.calculateImageStyles()]}
                source={{ uri: this.getImageUrl() }}
                resizeMode="contain"
              />
            </View>
          ) : null}
          <View style={styles.detailsContainer}>
            <View>
              {this.props.favicon ? (
                <Image style={styles.image} source={{ uri: this.props.favicon.replace('http://', 'https://') }} />
              ) : null}
            </View>
            <View style={styles.textContainer}>
              <Text ellipsizeMode="tail" numberOfLines={this.props.expanded ? 3 : 1} style={styles.title}>
                {this.props.title}
              </Text>
              <Text ellipsizeMode="tail" numberOfLines={this.props.expanded ? 4 : 2} style={styles.description}>
                {this.props.description}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

LinkPreview.propTypes = {
  description: PropTypes.string.isRequired,
  favicon: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired
};

LinkPreview.defaultProps = {
  expanded: false
};

export default LinkPreview;
