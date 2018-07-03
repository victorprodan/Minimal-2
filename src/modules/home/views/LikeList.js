import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from '../../../lib/Text';
import { Icon } from 'react-native-elements';
import Avatar from '../../../lib/Avatar';
import styles from './styles/LikeListStyles';
import theme from '../../../theme';

const Nolikes = () => (
  <View style={styles.nolikesContainer}>
    <Text style={styles.nolikesText}>Your list of likes</Text>
    <Text style={styles.nolikesText}>is empty</Text>
  </View>
);

const Arrow = () => (
  <View style={styles.arrowContainer}>
    <Icon name="chevron-right" color={theme.colors.primaryText} underlayColor="transparent" size={30} />
  </View>
);

const likeEntry = ({ like, onPress }) => (
  <TouchableOpacity onPress={() => onPress(like.user)}>
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar user={like.user} onPress={() => onPress(like.user)} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText} numberOfLines={1}>
          {like.user.name}
        </Text>
      </View>
      <Arrow />
    </View>
  </TouchableOpacity>
);

const likeList = ({ likeList, onUserPress }) => (
  <ScrollView style={styles.mainContainer}>
    {likeList.length === 0 ? (
      <Nolikes />
    ) : (
      likeList.map(like => <likeEntry key={like.id} like={like} onPress={onUserPress} />)
    )}
  </ScrollView>
);

likeEntry.propTypes = {
  like: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
};

likeList.propTypes = {
  likeList: PropTypes.array.isRequired,
  onUserPress: PropTypes.func.isRequired
};

export default likeList;
