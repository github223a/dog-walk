import React from 'react';
import { Card, Button, Icon } from 'antd';
import EditCardForm from '../editCardForm/';
import { Redirect, Link } from 'react-router-dom';
import {connect} from "react-redux";
import * as actions from '../../actions';

class UserCard extends React.Component {

    handleDeleteClick = id => e => {
      e.preventDefault();
      this.props.dispatch(actions.deleteCard(id));
    }

    render() {
      const { id } = this.props;
        return (<Card className="user-card" title={this.props.name}>
                {this.props.email}
                <div className="user-card__actions">
                  <Link to={`/edit/${id}`}>
                      <Button className="user-card__actions__edit" type="primary">
                          <Icon type="edit" /> Edit
                      </Button>
                  </Link>
                    <Button className="user-card__actions__delete" type="danger" onClick={this.handleDeleteClick(id)}>
                        <Icon type="delete" /> Delete
                    </Button>
                </div>
            </Card>
        )
    }
}

export default connect()(UserCard);

