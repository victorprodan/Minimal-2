import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Text } from '../../../lib/Text';
import styles from './styles/EditProfileStyles';
import EditModal from '../../../lib/views/EditModal';
import EditProfileAvatar from '../containers/EditProfileAvatar';
import * as EmailUtil from '../../../util/Email';
import theme from '../../../theme';
import Separator from '../../../lib/views/Separator';

const EditOption = ({ title, value, onPress, enabled }) => {
  const contents = (
    <View style={styles.optionButton}>
      <View style={styles.optionContent}>
        <Text style={styles.optionTitleText}>{title}</Text>
        <Text style={styles.optionValueText}>{value}</Text>
      </View>
      <View style={styles.optionIcon}>
        <theme.Icon
          name="edit"
          size={15}
          color={enabled ? theme.colors.primaryText : theme.colors.grey}
          style={styles.editIcon}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.optionContainer}>
      {enabled ? <TouchableOpacity onPress={onPress}>{contents}</TouchableOpacity> : <View>{contents}</View>}
      <Separator />
    </View>
  );
};

const EditProfile = props => (
  <View style={styles.backgroundOpacity}>
    <ScrollView style={styles.container} keyboardShouldPersistTaps="always">
      <EditProfileAvatar />
      <EditOption title="FIRST NAME" value={props.user.first_name} enabled={false} />
      <EditOption title="MIDDLE NAME" value={props.user.middle_name || ' '} enabled={false} />
      <EditOption title="LAST NAME" value={props.user.last_name} enabled={false} />
      <EditOption
        title="NICKNAME"
        value={props.user.nickname || ' '}
        onPress={() => props.onEditStarted('nickname', props.user.nickname)}
      />
      <EditOption
        title="EMAIL"
        value={props.user.email}
        onPress={() => props.onEditStarted('email', props.user.email)}
      />
      <EditOption
        title="PLATFORM COMMUNITY"
        value={props.user.communities.map(community => community.name).join(', ')}
        enabled={false}
      />
      <EditOption
        title="ABOUT ME"
        value={props.user.about || ' '}
        onPress={() => props.onEditStarted('about', props.user.about)}
      />
      <EditModal
        shown={props.visibleModal === 'nickname'}
        onCancel={props.onEditCancelled}
        onSave={props.onSave}
        busy={props.busy}
        saveDisabled={
          props.temporaryValue === props.user.nickname || !props.temporaryValue || props.temporaryValue.length > 20
        }
        defaultValue={props.user.nickname}
        onChange={props.onValueChanged}
      />
      <EditModal
        shown={props.visibleModal === 'email'}
        onCancel={props.onEditCancelled}
        onSave={props.onSave}
        busy={props.busy}
        saveDisabled={props.temporaryValue === props.user.email || !EmailUtil.validate(props.temporaryValue)}
        defaultValue={props.user.email}
        keyboardType="email-address"
        onChange={props.onValueChanged}
      />
      <EditModal
        shown={props.visibleModal === 'about'}
        onCancel={props.onEditCancelled}
        onSave={props.onSave}
        busy={props.busy}
        saveDisabled={props.temporaryValue === props.user.about}
        defaultValue={props.user.about}
        onChange={props.onValueChanged}
        multiline={true}
      />
    </ScrollView>
  </View>
);

EditOption.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onPress: PropTypes.func,
  enabled: PropTypes.bool.isRequired
};

EditOption.defaultProps = {
  enabled: true
};

EditProfile.propTypes = {
  user: PropTypes.object.isRequired,
  visibleModal: PropTypes.string,
  busy: PropTypes.bool.isRequired,
  temporaryValue: PropTypes.any,
  onEditStarted: PropTypes.func.isRequired,
  onEditCancelled: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onValueChanged: PropTypes.func.isRequired
};

export default EditProfile;
