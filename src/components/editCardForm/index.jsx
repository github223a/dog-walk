import React from 'react'
import {connect} from "react-redux";

class EditCardForm extends React.Component {

    render() {
        const { task } = this.props;
        return (<div>
          { JSON.stringify(task) }
        </div>);
    }
}

export default connect((store, props) => ({ task: store.users.find(item =>
      item.id == props.match.params.id)}))(EditCardForm);

