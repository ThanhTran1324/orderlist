import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducers";
import RenderItemList from "./Components/RenderItemList";
import Output from "./Components/Output";
import SelectCompany from "./Components/SelectCompany";
import Navbar from "./Components/Navbar";

export class App extends Component {
  render() {
    const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return (
      <Provider store={store}>
		<Navbar  />
	   <div className="row no-gutters">   
			<div className="col-12 col-lg-10 col-xl-8 mx-auto">
			<SelectCompany />
				<table className="table table-striped table-dark text-center myCustomTable">
				<thead>
					<tr>
						<th style={{ width: "40%" }}>Name: </th>
						<th style={{ width: "50%" }}>Qty: </th>
						<th style={{ width: "10%" }}>Unit: </th>
					</tr>
				</thead>
				<RenderItemList />
				</table>
			<Output />
			</div>
		</div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
