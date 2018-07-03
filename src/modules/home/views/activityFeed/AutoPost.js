import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles/AutoPostStyles';
import AutoPostHeader from './components/AutoPostHeader';
import SummaryBar from './components/SummaryBar';
import ActionBar from './components/ActionBar';

const AutoPost = props => (
  <View style={styles.container}>
    <AutoPostHeader post={props.post} onProfilePress={props.onProfilePress} onDetailsPress={props.onDetailsPress} />

    <SummaryBar post={props.post} onDetailsPress={props.onDetailsPress} />

    <ActionBar post={props.post} onComment={props.onComment} />
  </View>
);

AutoPost.propTypes = {
  post: PropTypes.object.isRequired,
  onDetailsPress: PropTypes.func,
  onProfilePress: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired
};

export default AutoPost;
