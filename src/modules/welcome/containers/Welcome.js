import { connect } from 'react-redux';
import Welcome from '../views/Welcome';
import { Creators as WelcomeActions } from '../reducer';

export default connect(null, {
  onNextPress: WelcomeActions.openNickname
})(Welcome);
