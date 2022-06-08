import './Expenses.css'
import Card from '../UI/Card'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = props => {
    const [filterYear, setFilterYear] = useState('2020');
    const { items } = props;

    const filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear);
    }

    const filteredExpenses = items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                selected={filterYear}
                 onYearSelected={filterChangeHandler} 
                 />
                {filteredExpenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />))}
            </Card>
        </div>
    );
}

export default Expenses;