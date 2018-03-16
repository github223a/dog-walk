import React from 'react';
import styled from 'styled-components';
import { Card, Layout, Button, Form, Input, Icon } from 'antd';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import * as actions from '../../actions';

const FormItem = Form.Item;
const { Content } = Layout;

const Title = styled.span`
    display: flex;
    justify-content: center;
`;

class Registration extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuth) {
      this.props.history.push('/');
    }
  }

    handleSubmit = e => {
      e.preventDefault();
      const email = this.props.form.getFieldValue('email');
      const password = this.props.form.getFieldValue('password');

      this.props.dispatch(actions.register(email, password));
    };

    render() {
      const { getFieldDecorator } = this.props.form;

      return (
        <Content>
          <div className="registration">
            <Card className="registration"
              type="inner"
              title={<Title>Регистрация</Title>}
            >
              <Form onSubmit={this.handleSubmit}>
                <FormItem label="E-mail">
                  {getFieldDecorator('email', {
                  initialValue: 'name1@mail.ru',
                  rules: [
                    {
                      required: true,
                      message: 'Please enter E-mail',
                    },
                    {
                      type: 'email',
                    },
                  ],
                })(<Input prefix={<Icon type="mail"/>} />)}
                </FormItem>
                  <FormItem label="Name">
                      {getFieldDecorator('name', {
                          initialValue: 'lalala',
                          rules: [
                              {
                                  required: true,
                                  message: 'Please enter name',
                              }
                          ],
                      })(<Input prefix={<Icon type="aliwangwang-o"/>} />)}
                  </FormItem>
                <FormItem label="Password">
                  {getFieldDecorator('password', {
                    initialValue: '111',
                    rules: [
                    {
                      required: true,
                      message: 'Please enter password',
                    },
                  ],
                })(<Input type="password" prefix={<Icon type="key" />} />)}
                </FormItem>
                <Button type="primary" htmlType="submit">
                <Icon type="login"/> Log in
                </Button>
              </Form>
            </Card>
          </div>
        </Content>
      );
    }
}

export default connect(store => ({ isAuth: !!store.user.token }))(Form.create()(Registration));
