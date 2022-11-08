import React, { useState, useCallback, useEffect, useRef } from 'react';
import useHttp from '../../hooks/http';

import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import LoadingIndicator from '../UI/LoadingIndicator';
import './Search.css';

const Search = React.memo(({ onFilter }) => {
	const [enteredFilter, setEnteredFilter] = useState('');
	const inputRef = useRef();
	const { sendRequest, data, isLoading, error, clearError } = useHttp();
	const getFilteredIngredient = useCallback(async () => {
		const query =
			enteredFilter.length === 0
				? ''
				: `?orderBy="title"&equalTo="${enteredFilter}"`;
		const baseUrl = `${process.env.REACT_APP_FIREBASE_DOMAIN}ingredients.json`;
		const url = baseUrl + query;
		sendRequest(url, 'GET');

		// const response = await fetch(
		// 	`${process.env.REACT_APP_FIREBASE_DOMAIN}ingredients.json` + query
		// );
		// if (!response.ok) {
		// 	throw new Error('Something went wrong!');
		// }
		// const data = await response.json();

		// let filteredIngredients = [];
		// for (const key in data) {
		// 	filteredIngredients.push({ ...data[key], id: key });
		// }
		// onFilter(filteredIngredients);
	}, [enteredFilter, sendRequest]);

	const filterChangeHandler = (e) => {
		setEnteredFilter(e.target.value);
	};

	useEffect(() => {
		if (!isLoading && !error && data) {
			let filteredIngredients = [];
			for (const key in data) {
				filteredIngredients.push({ ...data[key], id: key });
			}
			onFilter(filteredIngredients);
		}
	}, [isLoading, data, error, onFilter]);

	useEffect(() => {
		const triggerApi = setTimeout(() => {
			if (inputRef.current.value === enteredFilter) {
				getFilteredIngredient();
			}
		}, 300);
		return () => {
			clearTimeout(triggerApi);
		};
	}, [getFilteredIngredient, enteredFilter]);
	return (
		<section className='search'>
			{error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
			<Card>
				<div className='search-input'>
					<label>Filter by Title</label>
					{isLoading && <LoadingIndicator />}
					<input
						ref={inputRef}
						type='text'
						value={enteredFilter}
						onChange={filterChangeHandler}
					/>
				</div>
			</Card>
		</section>
	);
});

export default Search;
