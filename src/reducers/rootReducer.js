import { combineReducers } from 'redux';
import { firstReducer } from './firstReducer';
import { secondReducer } from './secondReducer';

export const rootReducer = combineReducers({
  firstReducer,
  secondReducer
});