import React from 'react';
import Login from '../containers/Login';

const LoginScreen = () => <Login />;

LoginScreen.navigationOptions = () => ({
  header: null
});

export default LoginScreen;
