import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;