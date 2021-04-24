import './ExpenseItems.css';
import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import ExpensesChart from '../Chart/ExpensesChart';

function ExpenseItems(props) {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  };


  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expense-items">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length > 0 ? filteredExpenses.map(expense => {
          return <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        }) : <p className="no-expenses">No expenses found for {filteredYear}</p>}

      </Card>
    </div>
  )
}

export default ExpenseItems;