import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text } from 'react-native';
import moment from 'moment';
import styles from './styles/MyProfileStyles';
import ImageList from '../containers/ImageList';
import Avatar from '../../../lib/Avatar';

const MyProfile = ({ user }) => (
  <View style={styles.container}>
    <View style={styles.backgroundOpacity}>
      <ScrollView style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileOverview}>
            <View style={styles.joinedAndHiveContainer}>
              <View style={styles.joinedContainer}>
                <Text style={styles.joinedTitle}>{user.name}</Text>
                <Text style={styles.joinedValue}>Joined {moment(user.created_at).format('MMM D, YYYY')}</Text>
              </View>
              <View style={styles.communitiesContainer}>
                <Text style={styles.communityTitle}>Platform Group Name</Text>
                <View style={styles.communityView}>
                  <View style={styles.community}>
                    <Text style={styles.communityText}>{user.communities[0].name}</Text>
                  </View>
                </View>
              </View>
            </View>
            {user.about ? (
              <View>
                <View style={styles.divider} />
                <Text style={styles.aboutText}>{user.about}</Text>
              </View>
            ) : null}
            <ImageList />
          </View>
          <View style={styles.avatarContainer}>
            <Avatar user={user} size="large" avatarStyle={styles.avatarStyle} />
            <View style={styles.userNameContainer}>
              <Text style={styles.nameText}>MY PROFILE</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  </View>
);

MyProfile.propTypes = {
  user: PropTypes.object.isRequired
};

export default MyProfile;
