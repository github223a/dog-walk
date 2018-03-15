import React from 'react';
import { Card, Button, Icon } from 'antd';

const gridStyle = {
    width: '20%',
    textAlign: 'center',
};

export default class Cards extends React.Component {

    handleEditClick = () => {

    }

    handleDeleteClick = () => {

    }

    render() {
        return (<Card className="userCard" title={this.props.name} style={gridStyle}>
                {this.props.email}
                <div className="userActions">
                    <Button className="user-button" type="primary" onClick={this.handleEditClick}>
                        <Icon type="edit" /> Edit
                    </Button>
                    <Button className="user-button" type="danger" onClick={this.handleDeleteClick}>
                        <Icon type="delete" /> Delete
                    </Button>
                </div>
            </Card>
        )
    }
}
