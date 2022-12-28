import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  updateExpense,
  removeExpense,
} from "../store/redux/expensesSlice";

import { Button, IconButton, ExpenseForm } from "../components";

const ManageExpenses = ({ route, navigation }) => {
  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;
  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.expenses);
  const selectedExpense = expenses.find((item) => item.id === expenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function confirmHandler(expenseData) {
    if (isEditing) {
      dispatch(
        updateExpense({
          expenseId,
          expenseData,
        })
      );
    } else {
      dispatch(addExpense(expenseData));
    }

    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function deleteHandler() {
    dispatch(removeExpense({ expenseId }));

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onCancel={cancelHandler}
        onConfirm={confirmHandler}
        defaultValue={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={24}
            color="#FF597B"
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#EFF5F5",
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "#D6E4E5",
    alignItems: "center",
  },
});
