import './ExpenseDate.scss'
function ExpenseDate({ date }) {
	// if (date === 'Invalid Date') {
	// 	console.log('zebra')
	// }
	const day = date.toLocaleString('en-GB', { day: '2-digit' });
	const month = date.toLocaleString('en-GB', { month: 'long' });
	const year = date.getFullYear();

	return (
		<div className="expense-date">
			<div className='expense-date__month'>{month ? month : ''}</div>
			<div className='expense-date__year'>{year ? year : ''}</div>
			<div className='expense-date__day'>{day ? day : ''}</div>
		</div>
	);
}

export default ExpenseDate;
