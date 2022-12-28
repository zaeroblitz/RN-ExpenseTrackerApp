import { FlatList, Text, StyleSheet, View } from "react-native";
import ExpensesListItem from "./ExpensesListItem";

const ExpensesList = ({ expenses }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expenses List</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <ExpensesListItem item={item} index={index} />
        )}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#9CA1A9",
    padding: 8,
    borderRadius: 8,
  },
  title: {
    color: "#9CA1A9",
    fontWeight: "600",
    fontSize: 16,
  },
});
