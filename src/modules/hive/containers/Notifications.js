import { connect } from 'react-redux';
import Notifications from '../views/Notifications';
import { Creators } from '../reducer';

export default connect(
  state => ({
    settings: state.data.user.settings
  }),
  {
    onSettingToggle: Creators.settingToggled
  }
)(Notifications);
