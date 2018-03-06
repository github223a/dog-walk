import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import Login from './Login';
import Main from './Content';
import Main2 from './Content';

const Routing = ({ Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      ))
    }
  />
);

const PrivateRoute = connect(store => ({ isAuth: !!store.user.token }))(Routing);

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute Component={Main} />
      <PrivateRoute path="/lala" Component={Main2} />
    </Switch>
  </Router>
);

export default connect()(App);
