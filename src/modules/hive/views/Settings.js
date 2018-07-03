import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../../../lib/Text';
import { Icon } from 'react-native-elements';
import styles from './styles/SettingsStyle';
import theme from '../../../theme';
import Separator from '../../../lib/views/Separator';

const RightChevron = () => (
  <View style={styles.rightChevronContainer}>
    <Icon
      name="angle-right"
      type="font-awesome"
      color={theme.colors.primaryText}
      underlayColor="transparent"
      size={30}
    />
  </View>
);

const MenuItem = ({ title, iconName, onPress, color, isLink }) => (
  <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
    <theme.Icon name={iconName} size={21} color={color} />
    <Text style={[styles.menuItemText, { color }]}>{title}</Text>
    {isLink ? <RightChevron /> : null}
  </TouchableOpacity>
);

const Settings = props => (
  <View style={styles.container}>
    <View style={styles.sectionsContainer}>
      <View>
        <MenuItem
          onPress={props.onNotificationsPressed}
          color={theme.colors.primaryText}
          iconName="icons8-notification"
          title="Notifications"
        />
        <Separator />
        <MenuItem
          onPress={props.onTermsPressed}
          color={theme.colors.primaryText}
          iconName="icons8-attention"
          title="Terms of Use"
        />
        <Separator />
        <MenuItem
          onPress={props.onPrivacyPressed}
          color={theme.colors.primaryText}
          iconName="icons8-privacy"
          title="Privacy Policy"
        />
        <Separator />
        <MenuItem
          onPress={() => window.console.log('asd')}
          color={theme.colors.primaryText}
          iconName="profile"
          title="Support"
        />
        <Separator />
      </View>
      <View>
        <MenuItem
          onPress={props.onLogoutPressed}
          iconName="icons8-exit"
          title="Log Out"
          isLink={false}
          color={theme.colors.primary}
        />
        <Separator />
        <MenuItem
          onPress={props.onDeleteAccountPressed}
          iconName="icons8-trash-can(1)"
          title="Delete Account"
          isLink={false}
          color={theme.colors.alert}
        />
      </View>
    </View>
  </View>
);

MenuItem.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isLink: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired
};

MenuItem.defaultProps = {
  isLink: true,
  color: theme.colors.snow
};

Settings.propTypes = {
  onNotificationsPressed: PropTypes.func.isRequired,
  onTermsPressed: PropTypes.func.isRequired,
  onPrivacyPressed: PropTypes.func.isRequired,
  onLogoutPressed: PropTypes.func.isRequired,
  onDeleteAccountPressed: PropTypes.func.isRequired
};

export default Settings;
