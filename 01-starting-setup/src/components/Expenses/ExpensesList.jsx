import ExpenseItem from './ExpenseItem';
import './ExpensesList.scss'

const ExpensesList = ({visibleExpenses}) => {
    // console.log(visibleExpenses.length)
    if(visibleExpenses.length === 0) {
		return <h2 style={{color: 'white'}}>No expenses found</h2>
	}
    return(
    <ul className='expenses-list'>
        { visibleExpenses.map(({ id, title, amount, date }) => (
			<ExpenseItem
				key={id}
				title={title}
				amount={amount}
				date={date}
			/>
		))}

    </ul>)

}

export default ExpensesList