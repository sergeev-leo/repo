import * as types from '../actions/types';


const SECOND_REDUCER_INITIAL_STATE = {
  value: 2
};

export function secondReducer(state = SECOND_REDUCER_INITIAL_STATE, action){
  switch(action.type){
  case types.ACTION_2:
    return Object.assign({}, state, {value: action.payload});

  default: return state;
  }
}