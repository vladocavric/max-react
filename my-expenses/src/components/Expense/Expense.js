import moment from 'moment';
import './Expense.scss';
const Expense = ({ expense }) => {
	const { title, amount, date } = expense;
	const ExDate = moment(date);

	return (
		<>
			<div className='expense-item'>
				<div className='expense-item__date'>
					<span className='expense-item__date-month'>
						{ExDate.format('MMM')}
					</span>
					<span className='expense-item__date-year'>
						{ExDate.format('YYYY')}
					</span>
					<span className='expense-item__date-day'>
						{ExDate.format('Do')}
					</span>
				</div>
				<div className='expense-item__description'>
					<h2>{title}</h2>
					<div className='expense-item__price'>${amount}</div>
				</div>
			</div>
		</>
	);
};

export default Expense;
