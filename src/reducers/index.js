import { combineReducers } from 'redux';

const user = (store = {}, action) => {
  switch (action.type) {
    case 'getUser':
      if (action.email === 'lala@mail.ru' && action.pass === '111') {
        return { ...store, email: 'lala@mail.ru', token: 'ooooo' };
      }
      return {};


    default:
      return store;
  }
};

export default combineReducers({ user });
