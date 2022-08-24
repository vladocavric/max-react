import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.scss';

function Expenses({ expenses }) {
	return (
		<Card className='expenses'>
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