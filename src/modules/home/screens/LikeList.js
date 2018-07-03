import React from 'react';
import likeList from '../containers/LikeList';

const likeListScreen = () => <likeList />;

likeListScreen.navigationOptions = () => ({
  headerTitle: 'People who liked this post'
});

export default likeListScreen;
