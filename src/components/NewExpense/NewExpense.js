import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveDataHandler = (enteredData) => {
    // console.log("in new expense");
    // console.log(enteredData);
    props.onSubmitExpense(enteredData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={saveDataHandler} />
    </div>
  );
};

export default NewExpense;
