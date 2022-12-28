import { StyleSheet, Text, View } from "react-native";

const ExpensesSummary = ({ expenses, periodName }) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{periodName}</Text>
        <Text style={styles.totalAmount}>${expensesSum.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default ExpensesSummary;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#333",
    padding: 24,
    borderRadius: 28,
  },
  title: {
    color: "#FAF9FA",
    fontWeight: "300",
    fontSize: 16,
    marginBottom: 20,
  },
  totalAmount: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 48,
  },
});
