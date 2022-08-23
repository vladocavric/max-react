import { useState } from 'react';
import './AddExpense.scss';

const AddExpense = ({ addExpense }) => {
	const [expanded, setExpanded] = useState(false);
	const [expense, setExpense] = useState({
		title: '',
		amount: '',
		date: '',
	});

	const handleExpand = () => {
		setExpanded(!expanded);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addExpense(expense);
		setExpense({
			title: '',
			amount: '',
			date: '',
		});
	};

	const onTitleChange = (e) => {
		const title = e.target.value;
		setExpense({ ...expense, title });
	};

	const onAmountChange = (e) => {
		const amount = e.target.value;
		setExpense({ ...expense, amount });
	};

	const onDateChange = (e) => {
		const date = e.target.value;
		setExpense({ ...expense, date });
	};

	return (
		<div className='add-expense'>
			{!expanded && (
				<button className='btn btn-purple' onClick={handleExpand}>
					Add New Expense
				</button>
			)}
			{expanded && (
				<form onSubmit={handleSubmit}>
					<div className='controls'>
						<label>
							Title
							<input
								type='text'
								name='title'
								value={expense.title}
								placeholder='title'
								onChange={onTitleChange}
							/>
						</label>
						<label>
							Amount
							<input
								type='number'
								name='amount'
								value={expense.amount}
								placeholder='amount'
								onChange={onAmountChange}
							/>
						</label>
						<label>
							Date
							<input
								type='date'
								name='date'
								value={expense.date}
								placeholder='date'
								onChange={onDateChange}
							/>
						</label>
					</div>
					<div className='form-actions'>
						<input
							className='btn btn-purple-link'
							onClick={handleExpand}
							type='button'
							value='Cancel'
						/>
						<button className='btn btn-purple' type='submit'>
							Submit
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default AddExpense;
