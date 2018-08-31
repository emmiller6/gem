import { fetchConsortiaSucceeded, fetchConsortiaFailed } from './actions';
import { SETTINGS } from '../../../AppConfig';

export function fetchConsortia() {
	return async (dispatch, getState, { api }) => {
		console.log('fetchConsortia');

		let response;
		try {
			response = await api.consortia.getConsortia(SETTINGS.API_KEY);
			console.log('response');
			console.log(response);
			dispatch(fetchConsortiaSucceeded(response.data));
		} catch(e) {
			console.log('errrror!');
			dispatch(fetchConsortiaFailed());
		}
	}
}
