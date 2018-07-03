import { connect } from 'react-redux';
import Nickname from '../views/Nickname';
import { Creators as WelcomeActions } from '../reducer';

export default connect(
  state => ({
    nickname: state.welcome.nickname
  }),
  {
    onNicknameChange: WelcomeActions.nicknameChanged,
    onNextPress: WelcomeActions.openWelcomeFinish
  }
)(Nickname);
