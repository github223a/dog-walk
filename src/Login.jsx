import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Layout, Button, Form, Input, Icon } from 'antd';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';

const FormItem = Form.Item;
const { Content } = Layout;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
`;

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const email = this.props.form.getFieldValue('email');
    const pass = this.props.form.getFieldValue('password');

    this.props.dispatch({ type: 'getUser', email, pass });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuth) {
      this.props.history.push('/');
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Content>
        <Wrapper>
          <Card
            style={{ width: '40%' }}
            type="inner"
            title={<Title>Авторизация</Title>}
          >
            <Form onSubmit={this.handleSubmit}>
              <FormItem label="E-mail">
                {getFieldDecorator('email', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter E-mail',
                    },
                    {
                      type: 'email',
                    },
                  ],
                })(<Input prefix={<Icon type="mail" />} />)}
              </FormItem>
              <FormItem label="Password">
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter password',
                    },
                  ],
                })(<Input type="password" prefix={<Icon type="key" />} />)}
              </FormItem>
              <Button type="primary" htmlType="submit">
                Войти
              </Button>
            </Form>
          </Card>
        </Wrapper>
      </Content>
    );
  }
}

export default connect(store => ({ isAuth: !!store.user.token }))(Form.create()(Login));
