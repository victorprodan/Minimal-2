import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Text } from '../../../../../lib/Text';
import moment from 'moment';
import theme from '../../../../../theme';
import { Icon } from 'react-native-elements';
import styles from './styles/SummaryBarStyles';

const SummaryBar = ({ post, onDetailsPress }) => (
  <TouchableWithoutFeedback onPress={onDetailsPress}>
    <View style={styles.detailsContainer}>
      <Text style={styles.dateText}>{moment(post.created_at).calendar()}</Text>
      <View style={styles.commentsContainer}>
        <Icon name="whatshot" size={20} color={theme.colors.primaryText} />
        <Text style={styles.commentsText}>{post.likes.length}</Text>
        <Icon size={20} name="insert-comment" color={theme.colors.primaryText} iconStyle={styles.iconComment} />
        <Text style={styles.commentsText}>{post.comments.length}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

SummaryBar.propTypes = {
  post: PropTypes.object.isRequired,
  onDetailsPress: PropTypes.func
};

export default SummaryBar;
