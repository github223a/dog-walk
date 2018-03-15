import React from 'react';
import { Card, Button, Icon } from 'antd';
import EditCardForm from '../editCardForm/';
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux";

class UserCard extends React.Component {

    handleEditClick = () => {

    }

    handleDeleteClick = () => {

    }

    render() {
        return (<Card className="user-card" title={this.props.name}>
                {this.props.email}
                <div className="user-card__actions">
                    <Button className="user-card__actions__edit" type="primary" onClick={this.handleEditClick}>
                        <Icon type="edit" /> Edit
                    </Button>
                    <Button className="user-card__actions__delete" type="danger" onClick={this.handleDeleteClick}>
                        <Icon type="delete" /> Delete
                    </Button>
                </div>
            </Card>
        )
    }
}

export default connect()(UserCard);

