import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

const NewExpenses = (props) => {
	function SaveExpenseDataHandler(enterExpenseData) {
		const expenseData = {
			id: Math.random().toString(),
			...enterExpenseData,
		}
		console.log(expenseData)
		props.onExpenseDataHandler(expenseData)
	}

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
		</div>
	)
}

export default NewExpenses
