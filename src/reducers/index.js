import { combineReducers } from 'redux';

const users = [
  { id: 1, name: 'name1', email: 'name1@mail.ru', password: '111', token: 'token1' },
  { id: 2, name: 'name2', email: 'name2@mail.ru', password: '111', token: 'token2' },
  { id: 3, name: 'name3', email: 'name3@mail.ru', password: '111', token: 'token3' },
  { id: 4, name: 'name4', email: 'name4@mail.ru', password: '111', token: 'token4' },
  { id: 5, name: 'name5', email: 'name5@mail.ru', password: '111', token: 'token5' }
];

const findUser = action => users.find(user => user.email === action.email && user.password === action.password);

// const generateToken = () => Math.random().toString(36).substring(7);

const user = (store = {}, action) => {
  switch (action.type) {
    case 'login':
      const user = findUser(action);

      if (user) {
        return { ...store, ...user };
      }
      return {};

    case 'logout':
      return {};

    default:
      return store;
  }
};

export default combineReducers({ user });
