import { combineReducers } from 'redux';
import usersList from '../fixtures/users';
import * as actions from '../actions';

const findUser = action => usersList.find(user => user.email === action.email && user.password === action.password);
const generateToken = () => Math.random().toString(36).substring(7);

const user = (store = {}, action) => {
  switch (action.type) {
    case actions.LOGIN:
      const user = findUser(action);

      if (user) {
        user.token = generateToken();
        return { ...store, ...user };
      }
      return {};

    case actions.LOGOUT:
      return {};

    default:
      return store;
  }
};

const users = (store = [], action) => {
    switch (action.type) {
        case actions.GET_USERS:
            return usersList.map(({ id, name, email }) => ({ id: id, name: name, email: email }));

        case actions.ADD_USER:
            const newUser = {};
            for (let field in action.data) {
                user[field] = action.data[field];
            }
            store.push(newUser)
            return store;

        case actions.SAVE_USER:
            const list = store.map(item => {
                if (item.id === action.id) {
                    for (let field in action.data) {
                        item[field] = action.data[field];
                    }
                    return item;
                }
                return list;
            });
            return store;

        case actions.DELETE_USER:
            return store.filter(item => item.id !== action.id);
        default:
            return store;
    }
}

export default combineReducers({ user, users });
