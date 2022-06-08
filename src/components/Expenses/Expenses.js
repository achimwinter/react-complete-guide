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
        console.log(selectedYear);
    }

    return (
        <div>
            <Card className='expenses'>
            <ExpensesFilter selected={filterYear} onYearSelected={filterChangeHandler}/>
                <ExpenseItem
                    title={items[0].title}
                    amount={items[0].amount}
                    date={items[0].date}
                />
                <ExpenseItem
                    title={items[1].title}
                    amount={items[1].amount}
                    date={items[1].date}
                />
                <ExpenseItem
                    title={items[2].title}
                    amount={items[2].amount}
                    date={items[2].date}
                />
                <ExpenseItem
                    title={items[3].title}
                    amount={items[3].amount}
                    date={items[3].date}
                />
            </Card>
        </div>
    );
}

export default Expenses;