import {
  ACTION_1,
  ACTION_2
} from './types';

export const dispatchActionOne = value => {
  return {
    type: ACTION_1,
    payload: value
  }
};

export const dispatchActionTwo = value => {
  return {
    type: ACTION_2,
    payload: value
  }
};
