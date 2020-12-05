import { combineReducers } from 'redux';
import state from './itemReducer';
export default combineReducers({
	companyList: state,
});
