import React from 'react';
import styled from 'styled-components';

const User = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
`;

export default class Users extends React.Component {
    state = {}

    render() {
        const { id, name, email } = this.props;
        return <User className="table-users-data">
            <span>{id}</span>
            <span>{name}</span>
            <span>{email}</span>
        </User>
    }
}
