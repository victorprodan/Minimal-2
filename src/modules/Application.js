import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../redux/store';
import RootContainer from './RootContainer';

import '../config';

const Application = () => (
  <ReduxProvider store={store}>
    <RootContainer />
  </ReduxProvider>
);

export default Application;
