import { connect } from 'react-redux';
import FacebookLogin from '../views/FacebookLogin';
import { Creators as LoginActions } from '../reducer';

export default connect(
  state => ({
    loggingIn: state.login.loggingIn === 'facebook'
  }),
  {
    onPress: LoginActions.loginStarted
  }
)(FacebookLogin);
