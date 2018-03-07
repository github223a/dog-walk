import React from 'react';
import styled from 'styled-components';
import { Card, Layout, Button, Form, Input, Icon } from 'antd';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import * as actions from '../../actions';

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

class Login extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuth) {
      this.props.history.push('/');
    }
  }

    handleSubmit = (e) => {
      e.preventDefault();
      const email = this.props.form.getFieldValue('email');
      const password = this.props.form.getFieldValue('password');

      this.props.dispatch(actions.login(email, password));
    };

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
                Log in
                </Button>
              </Form>
            </Card>
          </Wrapper>
        </Content>
      );
    }
}

export default connect(store => ({ isAuth: !!store.user.token }))(Form.create()(Login));
