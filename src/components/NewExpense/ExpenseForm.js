import React from "react";
//import './ExpenseForm.css';
import React { useState } from 'react';


const ExpenseForm = () => {
    const [enteredTitel, setEnteredTitle] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
return (
  <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="number" min='0.01' step='0.01' />
      </div>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="date" min='2022-3-1' max='2049-12-23' />
      </div>
    </div>
    <div className="new-expense__actions">
        <button type='submit' className="new-expense__submit">Add Expense</button>
    </div>
  </form>
);
}

export default ExpenseForm;