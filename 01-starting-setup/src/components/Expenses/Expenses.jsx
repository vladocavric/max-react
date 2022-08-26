import { useState } from 'react';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.scss';

function Expenses({ expenses }) {
	const year = new Date().getFullYear().toString();
	const [selectedFilter, setSelectedFilter] = useState(year);
	const filterChangeHandler = (filterValue) => {
		// console.log(filterValue)
		setSelectedFilter(filterValue);
	};
	const visibleExpenses = expenses.filter(
		(expense) => expense.date.getFullYear().toString() === selectedFilter
	);

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={selectedFilter}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesList visibleExpenses={visibleExpenses} />

			{/* {expenses.map(({ id, title, amount, date }) => {
				if (selectedFilter === date.getFullYear().toString()) {
					return (
						<ExpenseItem
							key={id}
							title={title}
							amount={amount}
							date={date}
						/>
					);
				}
			})} */}
		</Card>
	);
}

export default Expenses;
