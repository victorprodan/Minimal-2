import React from 'react';
import PropTypes from 'prop-types';
import { View, Animated, Easing, TouchableOpacity, ScrollView, ActivityIndicator, Platform } from 'react-native';
import { Text } from '../../../lib/Text';
import { Icon } from 'react-native-elements';
import styles from './styles/HomeStyles';
import AddTextPostButton from '../containers/AddTextPostButton';
import theme from '../../../theme';
import Post from '../containers/Post';
import EditPostModal from './activityFeed/components/EditPostModal';
import UploadIndicator from '../containers/UploadIndicator';
import Carousel from 'react-native-snap-carousel';
import DrawerButton from '../../../navigation/views/Drawer';

const NewPostsIndicator = ({ onDismiss }) => (
  <View style={styles.newPostsContainer}>
    <Text style={styles.newPostsText}>Refresh to see recent activity</Text>
    <Icon
      name="close"
      onPress={onDismiss}
      iconStyle={styles.newPostsDismissIcon}
      containerStyle={styles.newPostsDismissIconContainer}
      underlayColor="transparent"
    />
  </View>
);

// const Footer = () => (
//   <View style={styles.footerContainer}>
//     <View style={styles.footerSpinnerContainer}>
//       <ActivityIndicator animating={true} size="large" />
//     </View>
//   </View>
// );

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
    this.state = {
      expanded: false
    };
  }

  spinValue = new Animated.Value(0);

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.spinValue, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear
      })
    ).start();
  }

  renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <Post post={item} />
      </View>
    );
  }

  loadNextPage({ distanceFromEnd }) {
    if (distanceFromEnd < 0 || this.props.postsLoading || this.props.posts.length < 20 || this.props.lastPostId < 0) {
      // the flatlist has not finished loading or is at the end
      return;
    }
    this.props.onFeedEndReached();
  }

  render() {
    if (this.props.reloading) {
      return (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" color={theme.colors.primaryText} />
        </View>
      );
    }
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View style={styles.container}>
        {/* Problem - autorefresh */}
        <ScrollView>
          {this.props.newPostsPublished ? (
            <NewPostsIndicator onDismiss={this.props.onNewPostsIndicatorDismiss} />
          ) : null}
          <View style={styles.newPostContainer}>
            <AddTextPostButton
              onPress={this.props.onCreatePost}
              onVideoPress={() => this.props.onCamerRollPress('Videos')}
              onPhotoPress={() => this.props.onCamerRollPress('Photos')}
              onCameraPress={this.props.onCameraPress}
            />
          </View>
          <UploadIndicator />
          <View style={styles.contentContainer}>
            {/* filter by post type => topCarousel(section) - bottomCarousel(posts filtered by section) */}
            <Carousel
              data={this.props.posts}
              renderItem={this.renderItem}
              sliderWidth={theme.metrics.device.width}
              itemWidth={theme.metrics.device.width}
              onSnapToItem={index => this.setState({ activeSlide: index })}
              removeClippedSubviews={Platform.select({ ios: false, android: true })}
              useScrollView={Platform.select({ ios: true, android: false })}
              apparitionDelay={0}
              autoplayDelay={1000}
              autoplayInterval={3000}
              initialNumToRender={20}
              lockScrollWhileSnapping={true}
            />
            <Animated.View
              style={[
                styles.refreshButton,
                {
                  transform: [{ rotate: spin }]
                }
              ]}
            >
              <TouchableOpacity onPress={this.props.onFeedRefresh}>
                <Icon name="refresh" size={30} color={theme.colors.primaryText} />
              </TouchableOpacity>
            </Animated.View>
          </View>
          <EditPostModal />
        </ScrollView>
        <DrawerButton />
      </View>
    );
  }
}

NewPostsIndicator.propTypes = {
  onDismiss: PropTypes.func.isRequired
};

Home.propTypes = {
  posts: PropTypes.array.isRequired,
  postsLoading: PropTypes.bool.isRequired,
  reloading: PropTypes.bool.isRequired,
  lastPostId: PropTypes.number.isRequired,
  newPostsPublished: PropTypes.bool.isRequired,
  onFeedEndReached: PropTypes.func.isRequired,
  onFeedRefresh: PropTypes.func.isRequired,
  onNewPostsIndicatorDismiss: PropTypes.func.isRequired,

  // navigation events
  onCameraPress: PropTypes.func.isRequired,
  onCreatePost: PropTypes.func.isRequired,
  onCamerRollPress: PropTypes.func.isRequired
};

export default Home;
