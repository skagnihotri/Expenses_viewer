import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const newTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const newAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const newDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveData(enteredData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={newTitleHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          value={enteredAmount}
          min="0.01"
          step="0.01"
          onChange={newAmountHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          value={enteredDate}
          min="2010-01-01"
          max="2030-01-01"
          onChange={newDateHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
