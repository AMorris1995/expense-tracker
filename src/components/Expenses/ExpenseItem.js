import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)

  function clickHandler() {
    setTitle('Updated!');
  }

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
    );
}

export default ExpenseItem;