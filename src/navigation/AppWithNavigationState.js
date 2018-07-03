import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Platform, BackHandler } from 'react-native';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import Navigator from './Navigator';

const addListener = createReduxBoundAddListener('root');

class AppWithNavigationState extends React.Component {
  componentDidMount() {
    if (Platform.OS === 'android') {
      this.subscription = BackHandler.addEventListener('backPress', () =>
        this.props.dispatch(NavigationActions.back())
      );
    }
  }

  componentWillUnmount() {
    this.subscription && this.subscription.remove();
  }

  render() {
    return (
      <Navigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener
        })}
      />
    );
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

export default connect(state => ({
  nav: state.nav
}))(AppWithNavigationState);
