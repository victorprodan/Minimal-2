import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView } from 'react-native';
import { Text } from '../../../lib/Text';
import moment from 'moment';
import styles from './styles/ProfileDetailsStyles';
import Avatar from '../../../lib/Avatar';
import ImageList from '../../hive/containers/ImageList';

const ProfileDetails = ({ user }) => (
  <View style={styles.container}>
    <View style={styles.backgroundOpacity}>
      <ScrollView style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileOverview}>
            <View style={styles.joinedAndHiveContainer}>
              <View style={styles.communitiesContainer}>
                <Text style={styles.nameText}>{user.name}</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.joinedContainer}>
                <Text style={styles.joinedTitle}>Joined</Text>
                <Text style={styles.joinedValue}>{moment(user.created_at).format('MMM D, YYYY')}</Text>
              </View>
            </View>
            {user.about ? (
              <View>
                <View style={styles.divider} />
                <Text style={styles.aboutText}>{user.about}</Text>
              </View>
            ) : null}
          </View>
          <View style={styles.avatarContainer}>
            <Avatar user={user} size="large" avatarStyle={styles.avatarStyle} />
          </View>
        </View>
        <ImageList />
      </ScrollView>
    </View>
  </View>
);

ProfileDetails.propTypes = {
  user: PropTypes.object.isRequired
};

export default ProfileDetails;
