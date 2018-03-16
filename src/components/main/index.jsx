import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Layout, Button, Form, Input, Icon } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class Main extends React.Component {
    render() {
        return (<Wrapper>
                <Form>
                    <Link to="/register">
                        <Button type="primary" htmlType="submit">
                            <Icon type="user-add"/>Sign up
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button type="primary" htmlType="submit">
                            <Icon type="user"/>Log in
                        </Button>
                    </Link>
                </Form>
            </Wrapper>
        );
    }
}

export default connect()(Main);
