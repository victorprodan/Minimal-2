import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistCombineReducers } from 'redux-persist'; // persistCombineReducers can be used instea
import { applyMiddleware, createStore, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import reducers from './reducers';
import apiMiddleware from './apiMiddleware';
import offlineMiddleware from './offline/middleware';
import transloaditMiddleware from './transloaditMiddleware';

import sagas from '../sagas';
import config from '../config/redux';
import rehydrationServices from '../services/rehydration';

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const loggerMiddleware = createLogger({
  collapsed: true,
  predicate: () => __DEV__
});

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(offlineMiddleware, transloaditMiddleware, apiMiddleware, sagaMiddleware, loggerMiddleware),
  devToolsEnhancer()
);

const reducer = persistCombineReducers(config.persist.storeConfig, reducers);
const store = createStore(reducer, applyMiddleware(middleware), enhancer);

// configure persistStore and check reducer version number
rehydrationServices.updateReducers(store);

sagaMiddleware.run(sagas);

export default store;
