/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';
import * as actions from '../../actions';
import { connect } from "react-redux";
import { Form } from "antd/lib/index";

class Content extends React.Component {
    handleClick = e => {
        e.preventDefault();
        console.log('this = ', this)
        this.props.dispatch(actions.logout(this.props.store.user.token));
    }
    render() {
        return (
            <div>
                <Link to="/login">
                    <Button type="primary" onClick={this.handleClick}>
                        <Icon type="left" />Go back
                    </Button>
                </Link>
            </div>
        );
    }
}

export default connect(store => ({ isAuth: !!store.user.token }))(Form.create()(Content));
