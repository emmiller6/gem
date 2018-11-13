export const PRICES_ACTION_TYPES = {
	FETCH: 'PRICES_FETCH',
	FETCH_SUCCEEDED: 'PRICES_FETCH_SUCCEEDED',
	FETCH_FAILED: 'PRICES_FETCH_FAILED',
	FETCH_CONSORTIA_SUCCEEDED: 'CONSORTIA_FETCH_SUCCEEDED',
};

export function fetchAllPrices() {
	return {
		type: PRICES_ACTION_TYPES.FETCH,
	};
}

export function fetchPricesSucceeded(data) {
	return {
		type: PRICES_ACTION_TYPES.FETCH_SUCCEEDED,
		data: data.data,
	};
}

export function fetchPricesFailed() {
	return {
		type: PRICES_ACTION_TYPES.FETCH_FAILED,
	};
}

export function fetchConsortium(data) {
	return {
		type: PRICES_ACTION_TYPES.FETCH_CONSORTIA_SUCCEEDED,
		data,
	};
}
