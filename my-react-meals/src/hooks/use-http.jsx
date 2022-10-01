import { useState, useCallback } from 'react';
const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async (reqObj, convertData) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(reqObj.url, {
				method: reqObj.method ? reqObj.method : 'GET',
				body: reqObj.body ? JSON.stringify(reqObj.body) : null,
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error('Request failed!');
			}

			const data = await response.json();
			convertData(data);
		} catch (err) {
			setError(err.message || 'Something went wrong!');
		}
		setIsLoading(false);
	}, []);

	return { isLoading, error, sendRequest };
};

export default useHttp;