import * as types from '../actions/types';


const FIRST_REDUCER_INITIAL_STATE = {
  value: 1
};

export function firstReducer(state = FIRST_REDUCER_INITIAL_STATE, action){
  switch(action.type){
  case types.ACTION_1:
    return Object.assign({}, state, {value: action.payload});

  default: return state;
  }
}