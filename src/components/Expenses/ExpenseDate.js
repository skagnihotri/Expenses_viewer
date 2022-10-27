import Cards from "../UI/Cards";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = props.date.getDate();
  const month = props.date.getMonth();
  const year = props.date.getFullYear();

  return (
    <Cards className="expense-date">
      <div className="expense-date__month">{monthNames[month]}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Cards>
  );
}

export default ExpenseDate;
