import "./ExpenseForm.css";

const ExpenseForm = (prop) => {
  return (
    <form>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2010-01-01" max="2030-01-01" />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
