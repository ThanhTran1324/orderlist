import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


import reducer from './reducers'
import RenderItemList from './Components/RenderItemList';
import CreateResetButton from './Components/CreateResetButton';
import Output from './Components/Output';

export class App extends Component {
    
    render(){
        const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
        return (
            <Provider store={store}>
                
                <table className="table table-secondary">
                    <thead>
                        <tr>
                            <th>Name: </th>
                            <th>Qty: </th>
                            <th>Unit: </th>
                        </tr>
                    </thead>
                        <RenderItemList />
                </table>
                
                <Output />
                <CreateResetButton />
            </Provider>
        );
    }
}; 

ReactDOM.render(<App/>,document.querySelector('#root'));