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

const Header = styled.span`
`;

class Content extends React.Component {
    state = {
        users: []
    }
    handleClick = e => {
      e.preventDefault();
      this.props.dispatch(actions.logout());
    }

    getUsers = e => {
        e.preventDefault();
        this.props.dispatch(actions.getUsers());
        this.setState({ users: this.props.users });
    }
    render() {
      return (
        <div>
            <Button type="primary" onClick={this.handleClick}>
              <Icon type="left" />Log out
            </Button>
            <Button type="primary" onClick={this.getUsers}>
                <Icon type="user" />Get Users
            </Button>
            { this.state.users.length ?
                <div className="table">
                    <Headers className="table-headers">
                        <Header className="table-header-id">ID</Header>
                        <Header className="table-header-name">Name</Header>
                        <Header className="table-header-email">Email</Header>
                    </Headers>
                    { this.props.users.map(item => (<Users key={item.id} id={item.id} name={item.name} email={item.email}/>)) }
                </div>
                : null
            }
        </div>
      );
    }
}

export default connect(store => ({ isAuth: !!store.user.token, users: store.users }))(Form.create()(Content));

