/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Form } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Content extends React.Component {
    handleClick = (e) => {
      e.preventDefault();
      this.props.dispatch(actions.logout());
    }
    render() {
      return (
        <div>
            <Button type="primary" onClick={this.handleClick}>
              <Icon type="left" />Log out
            </Button>
        </div>
      );
    }
}

export default connect(store => ({ isAuth: !!store.user.token }))(Form.create()(Content));

