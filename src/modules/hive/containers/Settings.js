import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Settings from '../views/Settings';
import { Creators as LoginActions } from '../../login/reducer';
import { Creators as HiveActions } from '../reducer';

export default connect(null, {
  onNotificationsPressed: () => NavigationActions.navigate({ routeName: 'Notifications' }),
  onTermsPressed: LoginActions.openTerms,
  onPrivacyPressed: LoginActions.openPrivacy,
  onLogoutPressed: LoginActions.logout,
  onDeleteAccountPressed: HiveActions.deleteAccount
})(Settings);
