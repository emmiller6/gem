import { combineReducers } from 'redux';
import pricesReducer, * as fromPrices from './redux/prices/reducer';

export default combineReducers({
	prices: pricesReducer,
});

// -----------
// selectors
export const getPricesStateFromState = (state) => state.prices;

export const getBitcoinPriceFromPricesState = (state) =>
	fromPrices.findBitcoinPrice(getPricesStateFromState(state));

export const getEtherPriceFromPricesState = (state) =>
	fromPrices.findEtherPrice(getPricesStateFromState(state));
