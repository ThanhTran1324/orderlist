import React from "react";
import { connect } from "react-redux";

import { increase, decrease, setCompany } from "../actions";

class RenderItemList extends React.Component {
  componentDidMount() {
  }
  renderItem = () => {
    return this.props.items.map((item, index) => {
      return (
        <tr key={index}>
          <td className="text-animated-down">
            {item.name} {item.par}
          </td>
          <td>
            <button
              onClick={() => this.props.decrease(index)}
              className="btn btn-danger smallBtn btn-animated">
              <h4>-</h4>
            </button>
            <span className="font-weight-bold">{item.qty}</span>
            <button
              onClick={() => this.props.increase(index)}
              className="btn btn-success smallBtn btn-animated-down">
              <h4>+</h4>
            </button>
          </td>
          <td className="text-animated-down">
            {item.unit}
          </td>
        </tr>
      );
    });
  };
  render() {
    return <tbody>{this.renderItem()}</tbody>;
  }
}

const mapStateToProps = state => {
  return {
	items: state.companyList.items,
  };
};
export default connect(mapStateToProps, {
  increase,
  decrease,
  setCompany
})(RenderItemList);
