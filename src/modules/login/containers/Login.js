import { connect } from 'react-redux';
import Login from '../views/Login';
import { Creators as LoginActions } from '../reducer';

export default connect(null, {
  onTermsPress: LoginActions.openTerms,
  onPrivacyPress: LoginActions.openPrivacy
})(Login);
