import React from 'react';
import styles from './BalanceExpenses.module.css';
import Modal from "@material-ui/core/Modal";

function BalanceExpenses(props) {

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
      setOpen(false);
  };

  const handleOpen = () => {
      setOpen(true);
  };

  function handleClick(){
    console.log("clicked");
  }

  
  return (
    //console.log(props.costValue),
    <div className={styles.wallet}>
      <h2>{props.title}: {props.costValue}</h2>
      <button style={{ backgroundColor: props.buttonColor, borderRadius: "30%", cursor: 'pointer' }} onClick={() => handleOpen()}>{props.buttonName}</button>
      
      {props.wallet?<Modal
                onClose={handleClose}
                open={open}
                style={{
                    position: "absolute",
                    border: "2px solid #000",
                    backgroundColor: "lightgray",
                    boxShadow: "2px solid black",
                    height: 150,
                    width: 240,
                    margin: "auto",
                    padding: "2%",
                    color: "white",
                }}
            >
                <>
          <h2>Add Balance</h2>
          <div className={styles.input}>
            <input type="text" placeholder="Income Amount" className={ styles.input} />
            <div className={styles.input}>
            <button>Add Balance</button>
            <button onClick={handleClose}>Cancel</button>
          </div>
          </div>

          


          

                </>
            </Modal>:<Modal
                onClose={handleClose}
                open={open}
                style={{
                    position: "absolute",
                    border: "2px solid #000",
                    backgroundColor: "lightgray",
                    boxShadow: "2px solid black",
                    height: 150,
                    width: 240,
                    margin: "auto",
                    padding: "2%",
                    color: "white",
                }}
            >
                <>
          <h2>Add Expenses</h2>
          <div className={styles.input}>
            <input type="text" placeholder="Title" className={ styles.input} />
            <input type="text" placeholder="Price" className={ styles.input} />
          </div>

          <div className={styles.input}>
            <input type="text" placeholder="Select category" className={ styles.input} />
            <input type="text" placeholder="dd/mm/yy" className={ styles.input} />
          </div>

          <div className={styles.input}>
            <button>Add Expense</button>
            <button onClick={handleClose}>Cancel</button>
          </div>


          

                </>
            </Modal>}

        
    </div>
  );
}

export default BalanceExpenses;