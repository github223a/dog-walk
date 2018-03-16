import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import Main from './main';
import Login from './login/';
import Content from './content';
import EditCardForm from './editCardForm';

const Routing = ({ Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuth ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/', state: { from: props.location } }}
        />
      ))
    }
  />
);

const PrivateRoute = connect(store => ({ isAuth: !!store.user.token }))(Routing);

const App = () => (
  <Router>
    <Switch>
        <Route path="/" component={Main} />
        <Route path="/login" component={Login} />
      <PrivateRoute path="/edit/:id" Component={EditCardForm} />
      <PrivateRoute path='/content' Component={Content} />
    </Switch>
  </Router>
);

export default connect()(App);
