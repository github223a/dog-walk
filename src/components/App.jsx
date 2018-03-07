import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import Login from './login/index.jsx';
import Main from './content';

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
    </Switch>
  </Router>
);

export default connect()(App);