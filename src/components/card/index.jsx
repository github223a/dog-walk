import React from 'react';
import { Card, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
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
                      <span className="user-card__actions__edit" >
                          <Icon type="layout" />Edit
                      </span>
                  </Link>
                    <span className="user-card__actions__delete" onClick={this.handleDeleteClick(id)} style={{ color: '#ff4d4d' }}>
                        <Icon type="user-delete" /> Delete
                    </span>
                </div>
            </Card>
        )
    }
}

export default connect()(UserCard);

