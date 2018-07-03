import { connect } from 'react-redux';
import Carousel from '../views/Carousel';
import { Creators } from '../reducer';

export default connect(null, {
  onGetStartedPress: Creators.finishWelcome
})(Carousel);
