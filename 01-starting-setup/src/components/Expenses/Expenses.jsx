import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.scss';

function Expenses({ expenses }) {
	const year = new Date().getFullYear().toString()
	const [selectedFilter, setSelectedFilter] = useState(year)
	const filterChangeHandler = (filterValue) => {
		// console.log(filterValue)
		setSelectedFilter(filterValue)
	  }
	//   console.log(selectedFilter)
	return (
		<Card className='expenses'>
			<ExpensesFilter selected={selectedFilter} onChangeFilter={filterChangeHandler}/>
			{expenses.map(({ id, title, amount, date }) => (
				<ExpenseItem
					key={id}
					title={title}
					amount={amount}
					date={date}
				/>
			))}
		</Card>
	);
}

export default Expenses;
