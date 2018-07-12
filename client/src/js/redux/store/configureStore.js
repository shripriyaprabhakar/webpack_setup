// client/src/js/redux/store/configureStore.js

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';

/* eslint-disable no-underscore-dangle */

// this is to enhance your redux experience with redux_devtools_extension in browsers
// if no extension detected, normal middleware is used as a fallback

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const enhancer = composeEnhancers(applyMiddleware()); // apply your middleware here

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
}
/* eslint-enable no-underscore-dangle */