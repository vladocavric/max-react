import { useCallback, useReducer } from 'react';

const httpReducer = (currentHttpState, action) => {
	switch (action.type) {
		case 'SEND_REQUEST':
			return { isLoading: true, error: null, data: null, extra: null };
            case 'RESPONSE':
			return { isLoading: false, data: action.data, extra: action.extra, identifier: action.identifier };
		case 'ERROR':
			return {
				...currentHttpState,
				isLoading: false,
				error: action.error,
			};
		case 'CLEAR_ERROR':
			return { ...currentHttpState, error: null };
		default:
			throw new Error('Should not get here');
	}
};

const useHttp = () => {
	const [httpState, dispatchHttp] = useReducer(httpReducer, {
		isLoading: false,
		error: null,
		data: null,
        extra: null,
        identifier: null
	});
	const sendRequest = useCallback(async (url, method, body, reqExtra, reqIdentifier) => {
        
		dispatchHttp({ type: 'SEND_REQUEST'});
		try {
			const response = await fetch(url,
				{
					method: method,
                    body: JSON.stringify(body),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			if (!response.ok) {
				throw new Error('Something went wrong!');
			}
			const data = await response.json();
			dispatchHttp({ type: 'RESPONSE', data, extra: reqExtra, identifier: reqIdentifier });
		} catch (err) {
			dispatchHttp({ type: 'ERROR', error: err.message });
		}
	}, []);

    const clearError = useCallback(() => {
		dispatchHttp({ type: 'CLEAR_ERROR' });
	}, [])

    return {
        isLoading: httpState.isLoading,
        error: httpState.error,
        data: httpState.data,
        reqExtra: httpState.extra, 
        reqIdentifier: httpState.identifier, 
        sendRequest,
        clearError,
    }
};

export default useHttp;
