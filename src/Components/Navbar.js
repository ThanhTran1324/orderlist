import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { reset } from '../actions/index';
import SelectCompany from './SelectCompany';

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

	onCopy = () => {
		alert(
			`Copied - Thank You For Using My Web-App.\nEmail: ThanhTran1324@gmail.com`
		);
	};

	render() {
		return (
			<div className="row no-gutters">
				<div className="nav myNavbar col-12 col-lg-10 col-xl-8 mx-auto">
					<p className="header">Seito - Order Creater</p>
					<div className="navButtons">
						<SelectCompany />
						<div>
							<CopyToClipboard
								onCopy={this.onCopy}
								text={this.renderTextOutPut()}
							>
								<button className="btn btn-secondary ">
									Copy
								</button>
							</CopyToClipboard>
							<button
								onClick={this.props.reset}
								className="btn btn-secondary "
							>
								Reset
							</button>
						</div>
					</div>
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
