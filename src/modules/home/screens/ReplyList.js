import React from 'react';
import ReplyList from '../containers/ReplyList';

const ReplyListScreen = () => <ReplyList />;

ReplyListScreen.navigationOptions = () => ({
  headerTitle: 'Replies'
});

export default ReplyListScreen;
