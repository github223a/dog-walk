/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Icon, Form } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styled from 'styled-components';
import Users from './users';

const Headers = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
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
        <div>
            <Button type="primary" onClick={this.handleClick}>
              <Icon type="left" />Log out
            </Button>
            <Button type="primary" onClick={this.getUsers}>
                <Icon type="user" />{this.state.active ? 'Off table' : 'Get users'}
            </Button>
            { this.state.active ?
                <div className="table">
                    <h2 className="table-main-header">Users</h2>
                    <Headers className="table-headers">
                        <span className="table-header-id">ID</span>
                        <span className="table-header-name">Name</span>
                        <span className="table-header-email">Email</span>
                    </Headers>
                    { this.props.users.map(({ id, name, email }) => (<Users key={id} id={id} name={name} email={email}/>)) }
                </div>
                : null
            }
        </div>
      );
    }
}

export default connect(store => ({ users: store.users }))(Form.create()(Content));

