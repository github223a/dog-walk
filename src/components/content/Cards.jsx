import React from 'react';
import styled from 'styled-components';
import { Button, Icon, Form, Card } from 'antd';

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
