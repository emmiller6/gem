export function createAxiosConfigWithAuthHeader(apiKey) {
	return {
		headers: {
			'Authorization': `Bearer ${apiKey}`,
			'Content-Type': 'application/json',
		},
	};
}
