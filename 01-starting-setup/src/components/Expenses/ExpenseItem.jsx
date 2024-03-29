import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.scss';

function ExpenseItem(props) {
	const { date, amount } = props;
	return (
		<li>
			<Card className='expense-item'>
				<ExpenseDate date={date} />
				<div className='expense-item__description'>
					<h2>{props.title}</h2>
					<div className='expense-item__price'>${amount}</div>
				</div>
			</Card>
		</li>
	);
}

export default ExpenseItem;
