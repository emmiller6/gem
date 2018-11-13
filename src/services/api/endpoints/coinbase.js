import axios from 'axios';
import { ROUTES } from '../routes';

export function getCurrectPrice(type) {
	return axios.get(`${ROUTES.COINBASE_PRICES}/${type}/spot`);
}
