import React from 'react';
import {connect} from "react-redux";

import {reset} from '../actions';

class CreateResetButton extends React.Component {
    render(){
        //console.log("reseted");
        return (
            <div> 
                <button onClick={this.props.reset} className="btn btn-danger btn-block block_button">Reset</button>  
            </div>
        );
    }
};

export default connect(null,{reset})(CreateResetButton);