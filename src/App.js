import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { title: "Computer", amount: 4243, date: new Date(2022, 9, 3) },
    { title: "Zeichentablet", amount: 923, date: new Date(2022, 12, 13) },
    { title: "Bildschirm", amount: 1523, date: new Date(2022, 1, 3) },
  
  ];
  const lex =[1,2,3]
  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}
      ></ExpenseItem>
      
    
    </div>
  );
}

export default App;
