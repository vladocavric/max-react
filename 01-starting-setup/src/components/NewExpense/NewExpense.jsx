import ExpenseForm from './ExpenseForm'
import './NewExpense.scss'
const NewExpense = ({onAddExpense}) => {
    const saveExpenseDataHandler = (expenseData) => {
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        }
        onAddExpense(expense)
    }
    return(<div className='new-expense'><ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/></div>)
}

export default NewExpense