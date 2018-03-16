/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Icon, Form, Input } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import UserCard from '../card/';
import styled from 'styled-components';

const SuperInput = styled(Input)`
  width: 35%;
  padding-top: 50px;
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

    addUser = e => {
        e.preventDefault();
        this.props.dispatch(actions.addUser());
    }

    render() {
      return (
        <div className="content">
            <div className="content__buttons">
                <Button className="content__buttons__log-out" type="danger" onClick={this.handleClick}>
                    <Icon type="left" />Log out
                </Button>
                <Button className="content__buttons__get-users" type="primary" onClick={this.getUsers}>
                    <Icon type="user" />{this.state.active ? 'Off table' : 'Get users'}
                </Button>
                <Button className="content__buttons__add-user" type="primary" onClick={this.addUser}>
                    <Icon type="user-add" />Add user
                </Button>
            </div>
            { this.state.active ?
                <div className="content__users-cards">
                    { this.props.users.map(({ id, name, email }) => (<UserCard key={id} id={id} name={name} email={email}/>)) }
                    <SuperInput />
                </div>
                : null
            }
        </div>
      );
    }
}

export default connect(store => ({ users: store.users }))(Form.create()(Content));

