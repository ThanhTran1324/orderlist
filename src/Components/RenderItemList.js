import React from "react";
import { connect } from "react-redux";

import { increase, decrease, loadItemFromLocalStorage } from "../actions";

class RenderItemList extends React.Component {
  componentDidMount() {
    this.props.loadItemFromLocalStorage();
  }
  renderItem = () => {
    return this.props.items.map((item, index) => {
      return (
        <tr key={index}>
          <td
            className="text-animated-down"
            style={{ verticalAlign: "middle" }}
          >
            {item.name} {item.par}
          </td>
          <td style={{ textAlign: "center" }}>
            <button
              onClick={() => this.props.decrease(index)}
              className="btn btn-danger smallBtn btn-animated"
            >
              <h4>-</h4>
            </button>
            <span className="font-weight-bold">{item.qty}</span>
            <button
              onClick={() => this.props.increase(index)}
              className="btn btn-success smallBtn btn-animated-down"
            >
              <h4>+</h4>
            </button>
          </td>
          <td
            className="text-animated-down"
            style={{ textAlign: "center", verticalAlign: "middle" }}
          >
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
    items: state.items
  };
};
export default connect(mapStateToProps, {
  increase,
  decrease,
  loadItemFromLocalStorage
})(RenderItemList);
