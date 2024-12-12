import React from 'react';
import styles from './BalanceExpenses.module.css';

function BalanceExpenses(props) {
  return (
    console.log(props.costValue),
    <div className={styles.wallet}>
        <h2>Wallet Balance: {props.costValue}</h2>
        <button style={{backgroundColor:props.buttonColor,borderRadius:"30%"}}>{ props.buttonName}</button>
    </div>
  );
}

export default BalanceExpenses;