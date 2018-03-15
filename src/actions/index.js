export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_USERS = 'GET_USERS';
export const DELETE_USER = 'DELETE_USER';

export const login = (email, password) => ({ type: LOGIN, email, password });
export const logout = () => ({ type: LOGOUT });
export const getUsers = () => ({ type: GET_USERS });
export const deleteCard = id => ({ type: DELETE_USER, id });
