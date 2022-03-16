import ExpenseDate from "./ExpenseDate";
import React, { useState } from 'react';
import Lex from './Lex';
import Card from './Card';
import "./ExpenseItem.css";

function ExpenseItem(props) {
  let title = props.title;
  const clickHandler = ()=>{
    title = 'updatet via clickHandler'
    console.log('button clickfunktion fired')}
  
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
