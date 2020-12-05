import React from 'react';
import { connect } from 'react-redux';

class Output extends React.Component {
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

	render() {
		return (
			<textarea
				style={{ width: '100%', height: '600px' }}
				className="form-control"
				id="textOutPut"
				readOnly
				value={this.renderTextOutPut()}
			></textarea>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.companyList.items,
	};
};
export default connect(mapStateToProps, null)(Output);
