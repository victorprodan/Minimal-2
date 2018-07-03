import React from 'react';
import EmailInput from '../containers/EmailInput';

const EmailInputScreen = () => <EmailInput />;

EmailInputScreen.navigationOptions = () => ({
  headerTitle: 'Email',
  headerLeft: null
});

export default EmailInputScreen;
