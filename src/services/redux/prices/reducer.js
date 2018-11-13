import { PRICES_ACTION_TYPES } from './actions';
import { CRYPTOCURRENCY } from '../../../constants';

export default function prices(state = {}, action) {
	switch (action.type) {
		case PRICES_ACTION_TYPES.FETCH_SUCCEEDED:
			return {
				...state,
				data: action.data,
				error: false,
			};
		case PRICES_ACTION_TYPES.FETCH_FAILED:
			return {
				...state,
				error: true,
			};
		case PRICES_ACTION_TYPES.FETCH_CONSORTIA_SUCCEEDED:
			return {
				...state,
				consortia: action.data,
				error: false,
			};
		default:
			return state;
	}
}

export const findBitcoinPrice = (state) =>
	state.data
		? state.data.find((p) => p.base === CRYPTOCURRENCY.BTC)
		: undefined;

export const findEtherPrice = (state) =>
	state.data
		? state.data.find((p) => p.base === CRYPTOCURRENCY.ETH)
		: undefined;

