import React from 'react';
import styled from 'styled-components';

const User = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
`;

const Span = styled.span`
    flex-grow: 1;
	text-align: center;
	flex-basis: 100%;
`;

export default class Users extends React.Component {
    state = {}

    render() {
        const { id, name, email } = this.props;
        return <User className="table-users-data">
            <Span>{id}</Span>
            <Span>{name}</Span>
            <Span>{email}</Span>
        </User>
    }
}
