import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';

const initialState = {};
const middleware = [];
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
/* eslint-enable */

export default store;
