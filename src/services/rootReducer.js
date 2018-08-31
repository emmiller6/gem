import { combineReducers } from 'redux';
import consortia from './redux/consortia/reducer';

export default combineReducers({
	consortia,
});

// -----------
// selectors
export const getConsortiaStateFromState = (state) => state.consortia;
