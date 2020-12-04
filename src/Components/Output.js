import React from "react";
import { connect } from "react-redux";
import { CopyToClipboard } from "react-copy-to-clipboard";

import {reset} from '../actions/index';
class Output extends React.Component {
  renderTextOutPut = () => {
    var textoutput = "";
    this.props.items.map(function(item) {
      if (item.qty > 0)
        return (textoutput =
          textoutput + item.name + " - " + item.qty + " " + item.unit + `\n`);
      else return "";
    });
    return textoutput;
  };
  copied = () => {
    alert(
      `Copied - Thank You For Using My Web-App.\nEmail: ThanhTran1324@gmail.com`
    );
  };
  render() {
    return (
      <div className="form-group">
        <CopyToClipboard text={this.renderTextOutPut()}>
          <div className="btn-group ButtonGroupFullWidth" >
			<button
				onClick={this.copied}
				className="btn btn-success">
				Copy Message
			</button>
		  	<button onClick={this.props.reset} className="btn btn-danger">Reset</button>
		  </div>
        </CopyToClipboard>
        <textarea
          style={{ width: "100%", height: "500px" }}
          className="form-control"
          id="textOutPut"
          readOnly
          value={this.renderTextOutPut()}
        ></textarea>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.companyList.items
  };
};
export default connect(mapStateToProps,{
	reset
})(Output);
