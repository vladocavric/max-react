import './Graphs.scss';
var months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
export default function Graphs({shownExpenses}) {
	const monthObj = months.map((mon) => {
		return {
			month: mon,
			expense: 0
		}
	})

	 shownExpenses.forEach(expense => {
		monthObj[new Date(expense.date).getMonth()].expense += parseInt(expense.amount)
	})

	return (
		<div className='graphs'>
			{monthObj.map(({month, expense}, index) => {
				const height = Math.round((expense/1300) * 100)
				const heightPrc = `${height !== 0 && height < 15 ? 15 : height}%`
				return (
					<div key={month} className='monthBar'>
						{/* <div className='bar' style={{'--light-purple': 'green'}}> */}
						<div className='bar'>
							<div className='fill' title={height} style={{height: heightPrc}}></div>
						</div>
						<span>{month.slice(0, 3)}</span>
					</div>
				);
			})}
		</div>
	);
}
