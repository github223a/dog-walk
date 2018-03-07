export const login = (email, password) => ({ type: 'login', email, password });
export const logout = token => ({ type: 'logout', token });
