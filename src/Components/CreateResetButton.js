import React from 'react';
import {connect} from "react-redux";

import {reset,createMessage} from '../actions';

class CreateResetButton extends React.Component {
    render(){
        return (
            <div> 
                <button onClick={this.props.createMessage} className="btn btn-success">Create Message</button>  
                <button onClick={this.props.reset} className="btn btn-danger">Reset Button</button>  
            </div>
        );
    }
};

export default connect(null,{reset,createMessage})(CreateResetButton);