export const login = (email, password) => ({ type: 'login', email, password });
export const logout = () => ({ type: 'logout' });
export const getUsers = () => ({ type: 'getUsers' });

