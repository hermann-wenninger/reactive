import './ExpenseItem.css';

function ExpenseItem(props){
    const month = props.date.toLocaleString('en-US', {month:'long'})
    return (
<div className="expense-item">
<div className='expense-item__date'>{props.date.toLocaleString('en-US')}</div>
<div className="expense-item__description"><h2>{props.title}</h2></div>
<div className='expense-item__price'>{props.amount}</div>
</div>
    );
    
}
export default ExpenseItem;