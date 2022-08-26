import ExpenseItem from './ExpenseItem';
import ExpensesChart from './ExpensesChart';
import './ExpensesList.scss';

const ExpensesList = ({ visibleExpenses }) => {
	if (visibleExpenses.length === 0) {
		return <h2 style={{ color: 'white' }}>No expenses found</h2>;
	}
	return (
		<div>
			<ExpensesChart visibleExpenses={visibleExpenses} />

			<ul className='expenses-list'>
				{visibleExpenses.map(({ id, title, amount, date }) => (
					<ExpenseItem
						key={id}
						title={title}
						amount={amount}
						date={date}
					/>
				))}
			</ul>
		</div>
	);
};

export default ExpensesList;
