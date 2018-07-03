import React from 'react';
import PropTypes from 'prop-types';
import { View, Switch } from 'react-native';
import { Text } from '../../../lib/Text';
import styles from './styles/NotificationsStyles';
import theme from '../../../theme';
import Separator from '../../../lib/views/Separator';

const Setting = ({ name, value, onToggle }) => (
  <View style={styles.settingContainer}>
    <Text style={styles.settingText}>{name}</Text>
    <Switch
      value={value}
      onValueChange={onToggle}
      onTintColor={theme.colors.primaryText}
      thumbTintColor={theme.colors.snow}
    />
  </View>
);

const Notifications = ({ settings, onSettingToggle }) => (
  <View style={styles.container}>
    <View style={styles.menuContainer}>
      <Text style={styles.infoText}>
        You can control which types of Push Notifications you receive by changing the permissions below
      </Text>
      <Setting
        name="Comments on your posts"
        value={settings.pn_post_comments}
        onToggle={value => onSettingToggle('pn_post_comments', value)}
      />
      <Separator />
      <Setting
        name="Replies to your comments"
        value={settings.pn_comment_replies}
        onToggle={value => onSettingToggle('pn_comment_replies', value)}
      />
      <Separator />
      <Setting
        name="Like on your content"
        value={settings.pn_likes}
        onToggle={value => onSettingToggle('pn_likes', value)}
      />
    </View>
  </View>
);

Setting.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

Notifications.propTypes = {
  settings: PropTypes.object.isRequired,
  onSettingToggle: PropTypes.func.isRequired
};

export default Notifications;
