import React from 'react'
import {connect} from "react-redux";

class EditCardForm extends React.Component {

    render() {
        return (<div>

        </div>);
    }
}

const PrivateRoute = connect(store => ({ users: store.users }))(EditCardForm);
