import React from 'react';
import {connect} from "react-redux";
import {CopyToClipboard} from 'react-copy-to-clipboard';
class Output extends React.Component {
    
    renderTextOutPut = () =>{
        
        var textoutput="";
        this.props.items.map(function(item){
            if(item.qty>0)
                return textoutput = textoutput + item.name +" " + item.qty + " "+ item.unit +` ,\n` ;
            else
                return '';
            }
        );
        
        return textoutput;
    };
    copied = () =>{
        alert(`Thank You For Using My Web-App.\nEmail: ThanhTran1324@gmail.com`);
    };
    render(){
        
        return (
            <div className="form-group">
                <CopyToClipboard text={this.renderTextOutPut()}>
                    <button  onClick={this.copied} className="btn btn-dark btn-block block_button" >Click To Copy Message</button>
                </CopyToClipboard>
                
                
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