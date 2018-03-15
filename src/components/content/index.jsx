/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Button, Icon, Form } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styled from 'styled-components';
import User from '../user/index';
import UserCard from '../card/index';

const Headers = styled.div`
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
                <Wrapper>
                    <div className="table">
                        <h2 className="table__title">Users</h2>
                        <Headers className="table__headers">
                            <span className="table__headers__id">ID</span>
                            <span className="table__headers__name">Name</span>
                            <span className="table__headers__email">Email</span>
                        </Headers>
                        { this.props.users.map(({ id, name, email }) => (<User key={id} id={id} name={name} email={email}/>)) }
                    </div>
                    <div className="cards">
                        { this.props.users.map(({ id, name, email }) => (<UserCard key={id} name={name} email={email}/>)) }
                    </div>
                </Wrapper>
                : null
            }
        </div>
      );
    }
}

export default connect(store => ({ users: store.users }))(Form.create()(Content));

