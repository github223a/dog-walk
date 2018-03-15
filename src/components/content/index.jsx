/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Icon, Form } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import UserCard from '../card/';
import styled from 'styled-components';

const LogoutButton = styled(Button)`
  margin-right: 20px;
`;

class Content extends React.Component {
    state = {
        active: false
    }

    handleClick = e => {
      e.preventDefault();
      this.props.dispatch(actions.logout());
    }

    getUsers = e => {
        e.preventDefault();
        this.props.dispatch(actions.getUsers());
        this.setState({ active: !this.state.active });
    }
    render() {
      return (
        <div className="content">
            <div className="content__buttons">
                <LogoutButton className="content__buttons__log-out" type="primary" onClick={this.handleClick}>
                  <Icon type="left" />Log out
                </LogoutButton>
                <Button className="content__buttons__get-users" type="primary" onClick={this.getUsers}>
                    <Icon type="user" />{this.state.active ? 'Off table' : 'Get users'}
                </Button>
            </div>
            { this.state.active ?
                <div className="content__users-cards">
                    { this.props.users.map(({ id, name, email }) => (<UserCard key={id} id={id} name={name} email={email}/>)) }
                </div>
                : null
            }
        </div>
      );
    }
}

export default connect(store => ({ users: store.users }))(Form.create()(Content));

