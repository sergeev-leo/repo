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

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

const getquery = (a) => ({
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify({
    name: 'Leo',
    age: a
  })
});

const putQuery = {
  method: 'PUT',
  headers: myHeaders,
  body: JSON.stringify({
    id: '5bc0e838b1e06e013c6c272b',
    update: {age: 111}
  })
};


export const fetchDataFromExpressServer = () =>
  fetch(
    'http://localhost:8080/users/', putQuery
  ).then(response => response.json())
    .then(json => console.log(json));
