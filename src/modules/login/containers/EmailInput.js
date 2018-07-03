import { connect } from 'react-redux';
import EmailInput from '../views/EmailInput';
import { Creators as LoginActions } from '../reducer';

export default connect(
  state => ({
    email: state.login.authProviderUser.email,
    busy: state.login.savingUser
  }),
  {
    onEmailChange: LoginActions.emailChange,
    onSavePress: LoginActions.saveEmail
  }
)(EmailInput);
