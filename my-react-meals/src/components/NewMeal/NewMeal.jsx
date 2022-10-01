import { Link, useNavigate } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import useInput from '../../hooks/use-input';
import Card from '../UI/Card/Card';
import styles from './NewMeal.module.scss';

const isEmpty = (value) => value.trim() !== '';
const priceValidation = (value) => value.trim() !== '' && parseFloat(value) > 0;

const NewMeal = () => {
	const navigate = useNavigate()
	const { isLoading, error, sendRequest: sendMealRequest } = useHttp();
	const {
		value: name,
		valueIsValid: nameIsValid,
		inputIsInvalid: nameIsInvalid,
		inputChangeHandler: nameInputChangeHandler,
		inputBlueHandler: nameInputBlueHandler,
		reset: nameReset,
	} = useInput(isEmpty);

	const {
		value: price,
		valueIsValid: priceIsValid,
		inputIsInvalid: priceInputIsInvalid,
		inputChangeHandler: priceInputChangeHandler,
		inputBlueHandler: priceInputBlueHandler,
		reset: priceReset,
	} = useInput(priceValidation);

	const {
		value: description,
		valueIsValid: descriptionIsValid,
		inputIsInvalid: descriptionInputIsInvalid,
		inputChangeHandler: descriptionInputChangeHandler,
		inputBlueHandler: descriptionInputBlueHandler,
		reset: descriptionReset,
	} = useInput(isEmpty);

	const formIsValid = nameIsValid && priceIsValid && descriptionIsValid;

	const submitHandler = (e) => {
		e.preventDefault();
		if (!formIsValid) {
			return;
		}

		console.log(name, price, description);
		const priceNo = parseFloat(price).toFixed(2);
		sendMealRequest({
			url: 'https://max-react-8c77c-default-rtdb.firebaseio.com/meals.json',
			method: 'POST',
			body: { name, price: priceNo, description },
			headers: {
				'Content-Type': 'application/json',
			},
		}, data => console.log(data));
		nameReset();
		priceReset();
		descriptionReset();
		navigate('/')
	};
	return (
		<Card className={styles.Card}>
			<form onSubmit={submitHandler}>
				<div className='control-group'>
					<div className='form-control'>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							onChange={nameInputChangeHandler}
							onBlur={nameInputBlueHandler}
							value={name}
						/>
						{nameIsInvalid ? (
							<p className='error-text'>Name must be provided</p>
						) : (
							<p className='error-text'> </p>
						)}
					</div>
					<div className='form-control'>
						<label htmlFor='price'>Price</label>
						<input
							type='number'
							min='1'
							step='0.01'
							id='price'
							onChange={priceInputChangeHandler}
							onBlur={priceInputBlueHandler}
							value={price}
							onWheel={(e) => e.target.blur()}
						/>
						{priceInputIsInvalid ? (
							<p className='error-text'>
								Price must be positive number
							</p>
						) : (
							<p className='error-text'> </p>
						)}
					</div>
				</div>
				<div className='form-control'>
					<label htmlFor='description'>Description</label>
					<textarea
						id='description'
						onChange={descriptionInputChangeHandler}
						onBlur={descriptionInputBlueHandler}
						value={description}
					/>
					{descriptionInputIsInvalid ? (
						<p className='error-text'>
							Description must be provided
						</p>
					) : (
						<p className='error-text'> </p>
					)}
				</div>
				<div className='form-actions'>
					{error ? (
						<p className='error-text'>{error}</p>
					) : (
						<p className='error-text'></p>
					)}
					<Link className='btn-red' to='/'>
						Cancel
					</Link>
					<button disabled={!formIsValid}>
						{isLoading ? 'Sending...' : 'Submit'}
					</button>
				</div>
			</form>
		</Card>
	);
};

export default NewMeal;
