import axios from 'axios';
import { ROUTES } from '../routes';
import { createAxiosConfigWithAuthHeader } from '../utils';

export function getConsortia(apiKey) {
	console.log(apiKey);
	return axios.get('/consortia');
	/*return axios({
		method: 'get',
		url: ROUTES.CONSORTIA,
		headers: {
			'Authorization': `Bearer ${apiKey}`
		}
	});*/
}
