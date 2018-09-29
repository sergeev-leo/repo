/* global process */
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducer';

const composeEnhancers = process.env !== 'production'
  ? composeWithDevTools
  : compose;

const store = createStore(
  rootReducer, composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
    ),
  ),
);

export default store;