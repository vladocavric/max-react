import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.scss';
const NewExpense = ({ onAddExpense }) => {
	const [isOpen, setIsOpen] = useState(false);
	const saveExpenseDataHandler = (expenseData) => {
		const expense = {
			...expenseData,
			id: Math.random().toString(),
		};
		onAddExpense(expense);
	};
    const openHandler = () => {
        setIsOpen(true)
    }

    const closeHandler = () => {
        setIsOpen(false)
    }
	return (
		<div className='new-expense'>
			{isOpen ? (
				<ExpenseForm onCancel={closeHandler} onSaveExpenseData={saveExpenseDataHandler} />
			) : (
				<button onClick={openHandler}>Add New Expense</button>
			)}
		</div>
	);
};

export default NewExpense;
