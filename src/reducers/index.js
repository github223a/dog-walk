import { combineReducers } from 'redux';

const usersList = [
  { id: 1, name: 'name1', email: 'name1@mail.ru', password: '111' },
  { id: 2, name: 'name2', email: 'name2@mail.ru', password: '111' },
  { id: 3, name: 'name3', email: 'name3@mail.ru', password: '111' },
  { id: 4, name: 'name4', email: 'name4@mail.ru', password: '111' },
  { id: 5, name: 'name5', email: 'name5@mail.ru', password: '111' }
];

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
            return usersList.map(item => ({ id: item.id, name: item.name, email: item.email }));
        default:
            return []
    }
}


export default combineReducers({ user, users });
