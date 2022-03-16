import ExpenseDate from "./ExpenseDate";
import React, { useState } from 'react';
import Lex from './Lex';
import Card from './Card';
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = ()=>{
    setTitle('updated');
    console.log('button clickfunktion fired')}
  console.log('expense item evaluated',props)
  return (
    <Card className="expense-item">
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">{props.amount} €</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}
export default ExpenseItem;
