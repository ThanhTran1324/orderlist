import React, { Component } from 'react';
import { connect } from "react-redux";

import { setCompany, reset } from '../actions/index';

class SelectCompany extends Component {
	selectCompany = () => {
		const selected = document.getElementById('inlineFormCustomSelect');
		this.props.reset();
		this.props.setCompany(selected.value);
	}
	render() {
		return (
				<select id="inlineFormCustomSelect" onChange={this.selectCompany} defaultValue="1" className="custom-select ">
					{this.props.companyList.map(company => <option key={company} value={company}>{company}</option>)}
				</select>
		)
	}
}

const mapStateToProps = state => {
	return {
		companyList: Object.keys(state.companyList.companies)
	};
};
export default connect(mapStateToProps,{
	reset,
	setCompany
  })(SelectCompany);
  