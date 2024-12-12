
import './App.css';
import React,{useState} from 'react';

import BarChart from './Components/BarChart/BarChart';
import PieChart from './Components/PieChart/PieChart';
import Transactions from './Components/Transactions/Transactions';
import BalanceExpenses from './Components/Wallet/BalanceExpenses';

function App() {
  const [balance, setBalance] = useState(5000);
  const [expenses, setExpenses] = useState(0);
  return (
    <div className="App">
      
      <div className="upper ">
        <BalanceExpenses costValue={balance} buttonName="Add Income" buttonColor="#B5DC52" />
        <BalanceExpenses costValue={expenses} buttonName="Add Expense" buttonColor="#FF4747" />
        <BarChart/>
      </div>
      
      <div className="lower ">
        <Transactions />
        <PieChart/>
      </div>
      
    </div>
  );
}

export default App;
