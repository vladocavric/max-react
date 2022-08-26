import { useState } from 'react';
import './ExpenseForm.scss';

const ExpenseForm = ({onSaveExpenseData}) => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');
	const [errorMsg, setErrorMsg] = useState(false)
	// const [userInput, setUserInput] = useState({
	//     title: '',
	//     amount: '',
	//     date: ''
	// })

	const changeTitleHandler = (e) => {
		setTitle(e.target.value);
		// setUserInput({
		//     ...userInput,
		//     title: e.target.value
		// })
		// setUserInput((prevState) => {
		//     return {...prevState, title: e.target.value}
		// })
	};
	const changeAmountHandler = (e) => {
		setAmount(e.target.value);
		// setUserInput({
		//     ...userInput,
		//     amount: e.target.value
		// })
		// setUserInput(prevState => ({...prevState, amount: e.target.value}))
	};
	const changeDateHandler = (e) => {
		setDate(e.target.value);
		// setUserInput({
		//     ...userInput,
		//     date: e.target.value
		// })
		// setUserInput(prevState => {
		//     return {
		//         ...prevState,
		//         date: e.target.value
		//     }
		// })
	};

	const submitHandler = (e) => {
		e.preventDefault();
		if(title === '' || amount === '' || date === '') {
			setErrorMsg(true)
			// if(errorMsg) {
				setTimeout(() => {setErrorMsg(false)}, 10000)
			// }
		} else {
			setErrorMsg(false)
			const expenseData = {
				title,
				amount,
				date: new Date(date),
			};
			onSaveExpenseData(expenseData)
			setTitle('')
			setAmount('')
			setDate('')
		}
		// e.target.reset();
	};

	return (
		<form onSubmit={submitHandler}>
				{errorMsg ? <div>all fields are required</div> : null}
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						id='title'
						onChange={changeTitleHandler}
						value={title}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='amount'>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						id='amount'
						onChange={changeAmountHandler}
						value={amount}
					/>
				</div>
				<div className='new-expense__control'>
					<label htmlFor='date'>Date</label>
					<input
						type='date'
						id='date'
						onChange={changeDateHandler}
						value={date}
					/>
				</div>
				<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
