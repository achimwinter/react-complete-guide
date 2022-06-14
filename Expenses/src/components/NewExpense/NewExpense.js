import { useState } from 'react';
import './NewExpense.css'

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const onSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    const showFormHandler = () => {
        setShowForm(true);
    }

    const hideFormHandler = () => {
        setShowForm(false);
    }

    return (
        <div className='new-expense'>
            {!showForm && <button onClick={showFormHandler}>Add new Expense</button>}
            {showForm &&
                <ExpenseForm
                    onSaveExpenseData={onSaveExpenseData}
                    onCancel={hideFormHandler}
                />}
        </div>
    )
}


export default NewExpense;