import { useEffect, useState } from 'react';
import './App.scss';

import AddExpense from './components/AddExpense/AddExpense';
import Expense from './components/Expense/Expense';
import Graphs from './components/Graphs/Graphs';
import YearFilter from './components/YearFilter/YearFilter';

function App() {
	const [expenses, setExpenses] = useState([]);
	const [shownExpenses, setShownExpenses] = useState([]);
	useEffect(() => {
		const expensesStr = localStorage.getItem('expenses');
		const expensesLocal = JSON.parse(expensesStr);
		setExpenses([...expensesLocal]);
		const filteredExpenses = expensesLocal.filter(
			(expense) =>
				new Date(expense.date).getFullYear() ===
				new Date().getFullYear()
		);
		setShownExpenses([...filteredExpenses]);
	}, []);

	useEffect(() => {
		const json = JSON.stringify(expenses);
		localStorage.setItem('expenses', json);
	}, [expenses]);

	const addExpense = (expense) => {
		setExpenses([...expenses, expense]);
	};

	const filterByYear = (year) => {
		const filteredExpenses = expenses.filter(
			(expense) => new Date(expense.date).getFullYear() === year
		);
		setShownExpenses([...filteredExpenses]);
	};

	return (
		<div className='container'>
			<AddExpense addExpense={addExpense} />
			<div className='data'>
				<YearFilter filterByYear={filterByYear} />
				<Graphs shownExpenses={shownExpenses}/>
				{shownExpenses.map((expense, index) => (
					<Expense key={index} expense={expense} />
				))}
			</div>
		</div>
	);
}

export default App;
