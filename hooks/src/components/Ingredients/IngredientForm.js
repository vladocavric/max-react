import React, { useState } from 'react';

import Card from '../UI/Card';
import LoadingIndicator from '../UI/LoadingIndicator';

import './IngredientForm.css';

const IngredientForm = React.memo((props) => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const nameChangeHandler = (e) => {
		setTitle(e.target.value);
	};
	const amountChangeHandler = (e) => {
		setAmount(e.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
    const ingredient = {
      title,
      amount,
      id: new Date().toISOString()
    }
    if(amount.trim().length === 0 || title.trim().length === 0) {
      return
    }
		props.onAddIncident(ingredient)
    setTitle('')
    setAmount('')
	};

	return (
		<section className='ingredient-form'>
			<Card>
				<form onSubmit={submitHandler}>
					<div className='form-control'>
						<label htmlFor='title'>Name</label>
						<input
							type='text'
							id='title'
							value={title}
							onChange={nameChangeHandler}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='amount'>Amount</label>
						<input
							type='number'
							id='amount'
							value={amount}
							onChange={amountChangeHandler}
						/>
					</div>
					<div className='ingredient-form__actions'>
						<button type='submit'>Add Ingredient</button>
						{props.onLoading && <LoadingIndicator />}
					</div>
				</form>
			</Card>
		</section>
	);
});

export default IngredientForm;
