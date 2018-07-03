import { connect } from 'react-redux';
import WelcomeFinish from '../views/WelcomeFinish';
import { Creators as WelcomeActions } from '../reducer';

export default connect(state => ({ nickname: state.welcome.nickname }), {
  onTakeTourPress: WelcomeActions.finalizeProfiling
})(WelcomeFinish);
