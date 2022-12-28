import { useSelector } from "react-redux";

import { ExpensesOutput } from "../components";
import { getDateMinusDays } from "../utils/date";

const RecentExpenses = () => {
  const { expenses } = useSelector((state) => state.expenses);
  const recentExpenses = expenses.filter((item) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return item.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days!"
    />
  );
};

export default RecentExpenses;
