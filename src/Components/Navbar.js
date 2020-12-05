import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { reset } from '../actions/index';

export class Navbar extends Component {
	renderTextOutPut = () => {
		var textoutput = '';
		this.props.items.map(function (item) {
			if (item.qty > 0)
				return (textoutput =
					textoutput +
					item.name +
					' - ' +
					item.qty +
					' ' +
					item.unit +
					`\n`);
			else return '';
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
			<div className="row no-gutters">
				<div className="nav myNavbar col-12 col-lg-10 col-xl-8 mx-auto">
					<p className="header">Seito - Order Creater</p>
					<CopyToClipboard text={this.renderTextOutPut()}>
						<div className="navButtons btn-group navbar-nav ml-auto">
							<button
								onClick={this.copied}
								className="btn btn-success"
							>
								Copy Output
							</button>
							<button
								onClick={this.props.reset}
								className="btn btn-danger"
							>
								Reset
							</button>
						</div>
					</CopyToClipboard>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.companyList.items,
	};
};

export default connect(mapStateToProps, { reset })(Navbar);
