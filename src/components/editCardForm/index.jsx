import React from 'react'
import { connect } from "react-redux";
import { Card, Layout, Button, Form, Input, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import * as actions from '../../actions';

const FormItem = Form.Item;
const { Content } = Layout;

const Title = styled.span`
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const EdictCard = styled(Card)`
    width: ${props => props.width};
`;

const ContentCard = styled(Content)`
    width: 30%;
    padding-top: 50px;
`;

class EditCardForm extends React.Component {

    handleSubmit = id => e => {
        e.preventDefault();
        const userFields = ['email', 'name'];
        const data = userFields.reduce((acc, field) => {
            acc[field] = this.props.form.getFieldValue(field);
            return acc;
        }, {})
        this.props.dispatch(actions.saveUser(id, data))
    }

    render() {
        const { task } = this.props;
        const { getFieldDecorator } = this.props.form;

        return (<Wrapper>
                <ContentCard>
                    <EdictCard
                          type="inner"
                          title={<Title>Edit form</Title>}
                          width="100%"
                    >
                        <Form>
                            <FormItem label="E-mail">
                                {getFieldDecorator('email', {
                                    initialValue: task.email,
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
                                    initialValue: task.name,
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please enter name',
                                        },
                                    ],
                                })(<Input type="text" prefix={<Icon type="smile-o" />} />)}
                            </FormItem>
                            <Link to="/">
                                <Button type="primary" htmlType="submit">
                                    Save
                                </Button>
                            </Link>
                        </Form>
                    </EdictCard>
            </ContentCard>
        </Wrapper>);

    }
}

export default connect((store, props) => ({ task: store.users.find(item =>
      item.id == props.match.params.id)}))(Form.create()(EditCardForm));

