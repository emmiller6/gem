import { CONSORTIA_ACTION_TYPES } from './actions';

export default function consortia(state = {}, action) {
	switch (action.type) {
		case CONSORTIA_ACTION_TYPES.FETCH_SUCCEEDED:
			return {
				...state,
				data: action.data,
				error: false,
			};
		case CONSORTIA_ACTION_TYPES.FETCH_FAILED:
			return {
				...state,
				error: true,
			};
		default:
			return state;
	}
}
