import { combineReducers } from 'redux';
import usersList from '../fixtures/users';

const findUser = action => usersList.find(user => user.email === action.email && user.password === action.password);
const generateToken = () => Math.random().toString(36).substring(7);

const user = (store = {}, action) => {
  switch (action.type) {
    case 'login':
      const user = findUser(action);

      if (user) {
        user.token = generateToken();
        return { ...store, ...user };
      }
      return {};

    case 'logout':
      return {};

    default:
      return store;
  }
};

const users = (store = {}, action) => {
    switch (action.type) {
        case 'getUsers':
            return usersList.map(({ id, name, email }) => ({ id: id, name: name, email: email }));
        default:
            return []
    }
}

export default combineReducers({ user, users });
