import React, { useCallback, useReducer, useMemo, useEffect } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../../hooks/http';

const ingredientsReducer = (currentIngredients, action) => {
	switch (action.type) {
		case 'SET':
			return action.ingredients;
		case 'ADD':
			return [...currentIngredients, action.ingredient];
		case 'DELETE':
			return currentIngredients.filter((ing) => action.id !== ing.id);
		default:
			throw new Error('Should not get here');
	}
};

// const httpReducer = (currentHttpState, action) => {
// 	switch (action.type) {
// 		case 'SEND_REQUEST':
// 			return { isLoading: true, error: null };
// 		case 'RESPONSE':
// 			return { ...currentHttpState, isLoading: false };
// 		case 'ERROR':
// 			return { isLoading: false, error: action.error };
// 		case 'CLEAR_ERROR':
// 			return { ...currentHttpState, error: null };
// 		default:
// 			throw new Error('Should not get here');
// 	}
// };

function Ingredients() {
	const [ingredients, dispatch] = useReducer(ingredientsReducer, []);
	// const [httpState, dispatchHttp] = useReducer(httpReducer, {
	// 	isLoading: false,
	// 	error: null,
	// });

	const {
		isLoading,
		error,
		data,
		sendRequest,
		clearError,
		reqExtra,
		reqIdentifier,
	} = useHttp();

	const addIngredientHandler = useCallback(
		async (ingredient) => {
			// dispatchHttp({ type: 'SEND_REQUEST' });
			// try {
			// 	const response = await fetch(
			// 		`${process.env.REACT_APP_FIREBASE_DOMAIN}ingredients.json`,
			// 		{
			// 			method: 'POST',
			// 			body: JSON.stringify(ingredient),
			// 			headers: {
			// 				'Content-Type': 'application/json',
			// 			},
			// 		}
			// 	);
			// 	const data = await response.json();
			// 	ingredient.id = data.name;
			// 	// setIngredients((prevState) => [...prevState, ingredient]);
			// 	// dispatchHttp({ type: 'RESPONSE' });
			// } catch (err) {
			// 	// dispatchHttp({ type: 'ERROR', error: err.message });
			// }
			const url = `${process.env.REACT_APP_FIREBASE_DOMAIN}ingredients.json`;
			sendRequest(url, 'POST', ingredient, ingredient, 'add');
		},
		[sendRequest]
	);

	// const removeIngredientHandler = useCallback(async (id) => {
	// 	dispatchHttp({ type: 'SEND_REQUEST' });
	// 	try {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_FIREBASE_DOMAIN}ingredients/${id}.json/`,
	// 			{
	// 				method: 'DELETE',
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 				},
	// 			}
	// 		);
	// 		if (!response.ok) {
	// 			throw new Error('Something went wrong!');
	// 		}
	// 		// const data = await response.json();
	// 		// const updatedIngredients = ingredients.filter(
	// 		// 	(ing) => ing.id !== id
	// 		// );
	// 		dispatch({ type: 'DELETE', id });
	// 		dispatchHttp({ type: 'RESPONSE' });
	// 	} catch (err) {
	// 		dispatchHttp({ type: 'ERROR', error: err.message });
	// 	}
	// }, []);

	const removeIngredientHandler = useCallback(
		(id) => {
			const url = `${process.env.REACT_APP_FIREBASE_DOMAIN}ingredients/${id}.json/`;
			sendRequest(url, 'DELETE', null, id, 'delete');
		},
		[sendRequest]
	);

	const filteredIngredients = useCallback((filtererIngredients) => {
		// setIngredients(filtererIngredients);
		dispatch({ type: 'SET', ingredients: filtererIngredients });
	}, []);

	// const clearErrorHandler = useCallback(() => {
	// 	clearError();
	// }, [clearError]);

	const ingredientList = useMemo(
		() => (
			<IngredientList
				ingredients={ingredients}
				onRemoveItem={removeIngredientHandler}
			/>
		),
		[ingredients, removeIngredientHandler]
	);

	useEffect(() => {
		if (!isLoading && !error && reqIdentifier === 'delete') {
			dispatch({ type: 'DELETE', id: reqExtra });
		}
		if (!isLoading && data && reqIdentifier === 'add') {
			const ingredient = { ...reqExtra, id: data.name };
			dispatch({ type: 'ADD', ingredient });
		}
	}, [data, reqExtra, reqIdentifier, isLoading, error]);

	return (
		<div className='App'>
			{error && (
				<ErrorModal onClose={clearError}>{error}</ErrorModal>
			)}
			<IngredientForm
				onAddIncident={addIngredientHandler}
				onLoading={isLoading}
			/>

			<section>
				<Search onFilter={filteredIngredients} />
				{ingredientList}
			</section>
		</div>
	);
}

export default Ingredients;
