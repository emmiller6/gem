export const CONSORTIA_ACTION_TYPES = {
	FETCH: 'CONSORTIA_FETCH',
	FETCH_SUCCEEDED: 'CONSORTIA_FETCH_SUCCEEDED',
	FETCH_FAILED: 'CONSORTIA_FETCH_FAILED',
};

export function fetchConsortia() {
	return {
		type: CONSORTIA_ACTION_TYPES.FETCH
	};
}

export function fetchConsortiaSucceeded(data) {
	return {
		type: CONSORTIA_ACTION_TYPES.FETCH_SUCCEEDED,
		data,
	};
}

export function fetchConsortiaFailed() {
	return {
		type: CONSORTIA_ACTION_TYPES.FETCH_FAILED
	};
}
