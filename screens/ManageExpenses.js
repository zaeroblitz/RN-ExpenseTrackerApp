import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addExpense,
  updateExpense,
  removeExpense,
} from "../store/redux/expensesSlice";

import { Button, IconButton } from "../components";

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

  function confirmHandler() {
    if (isEditing) {
      dispatch(
        updateExpense({
          expenseId,
          expenseData: {
            description: "Test",
            amount: 69.69,
            date: new Date("2022-12-27"),
          },
        })
      );
    } else {
      dispatch(
        addExpense({
          description: "Test",
          amount: 69.69,
          date: new Date("2022-12-27"),
        })
      );
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
      <View style={styles.buttonsConainer}>
        <Button onPress={cancelHandler} mode="flat" style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          Update
        </Button>
      </View>

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
  buttonsConainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 120,
    margin: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "#D6E4E5",
    alignItems: "center",
  },
});
