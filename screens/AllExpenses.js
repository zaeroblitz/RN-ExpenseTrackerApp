import { useSelector } from "react-redux";

import { ExpensesOutput } from "../components";

const AllExpenses = () => {
  const { expenses } = useSelector((state) => state.expenses);

  return (
    <ExpensesOutput
      expenses={expenses}
      expensesPeriod="Total"
      fallbackText="No expenses registered found!"
    />
  );
};

export default AllExpenses;
