
import './App.css';
import React,{useState} from 'react';

import BarChart from './Components/BarChart/BarChart';
import PieChart from './Components/PieChart/PieChart';
import Transactions from './Components/Transactions/Transactions';
import BalanceExpenses from './Components/Wallet/BalanceExpenses';

function App() {
  const [balance, setBalance] = useState(5000);
  const [expenses, setExpenses] = useState(0);

  const handleCostData = (data) => {
    setBalance(data);
  } 
  return (
    <div className="App">
      
      <div className="upper ">
        <BalanceExpenses title="Wallet Balance" balance={balance } costValue={handleCostData} buttonName="Add Income" buttonColor="#B5DC52" wallet={true}/>
        <BalanceExpenses title="Expenses" costValue={expenses} buttonName="Add Expense" buttonColor="#FF4747" wallet={false} />
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
