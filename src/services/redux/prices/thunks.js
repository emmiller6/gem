import { fetchPricesSucceeded, fetchPricesFailed, fetchConsortium } from './actions';
import { CURRENCY_PAIR } from '../../../constants';

export function fetchAllCurrentPrices() {
	return async (dispatch, getState, { api }) => {

		let response;
		try {
			response = await api.coinbase.getCurrectPrice(CURRENCY_PAIR.ALL_USD);
			dispatch(fetchPricesSucceeded(response.data));
		} catch(e) {
			dispatch(fetchPricesFailed());
		}
	}
}
