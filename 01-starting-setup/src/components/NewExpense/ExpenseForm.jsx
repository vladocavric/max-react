import './ExpenseForm.scss'
const ExpenseForm = () => {
	return (
		<form>
			<div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title"/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number"  min='0.01' step='0.01' id="amount"/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id='date'/>
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
		</form>
	);
};

export default ExpenseForm;
