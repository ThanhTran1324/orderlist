import React, { Component } from 'react'
import {connect} from 'react-redux';

import {reset} from '../actions/index';

export class Navbar extends Component {
	render() {
		return (
			<div className="nav justify-content-center">
				<h3>Seito - Order Creation</h3>
				<div className="btn-group ButtonGroupFullWidth" >
		  </div>
			</div>
		)
	}
}

export default connect(null,{reset})(Navbar);
