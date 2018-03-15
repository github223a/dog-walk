import React from 'react';
import { Card } from 'antd';

const gridStyle = {
    width: '20%',
    textAlign: 'center',
};

export default class Cards extends React.Component {

    render() {
        return (<Card className="userCard" title={this.props.name} style={gridStyle}>
                {this.props.email}
            </Card>
        )
    }
}
