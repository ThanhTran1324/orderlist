import React from 'react';
import {connect} from "react-redux";

class Output extends React.Component {

    
    renderTextOutPut = () =>{
        
        var textoutput="";
        this.props.items.map(function(item){
            return textoutput = textoutput + item.name +" " + item.qty + " "+ item.unit +` ,\n` ;
        }
        );
        return textoutput;
    };
    render(){
        
        return (
            <div className="form-group">
                <label >Your Message : </label>
                <button >Copy Button</button>
                <textarea style={{width: "100%", height:"500px"  }} className="form-control" id="textOutPut" readOnly value={this.renderTextOutPut()}>
                    
                </textarea>
            </div>
            
        );
    };
};

const mapStateToProps = (state) => {
    return {
        items:state.items
    };
};
export default connect (mapStateToProps)(Output);