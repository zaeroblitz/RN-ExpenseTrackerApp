import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import Input from "./Input";
import Button from "../UI/Button";
import { formattedDate } from "../../utils/date";

const ExpenseForm = ({
  submitButtonLabel,
  onCancel,
  onConfirm,
  defaultValue,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValue ? formattedDate(defaultValue.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValue ? defaultValue.description : "",
      isValid: true,
    },
  });

  function inputChangedHandler(key, value) {
    setInputs((currentInputValues) => {
      return {
        ...currentInputValues,
        [key]: { value },
      };
    });
  }

  function confirmHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const isDateValid = expenseData.date.toString() !== "Invalid Date";
    const isDescriptionValid = expenseData.description.trim().length > 0;

    if (!isAmountValid || !isDateValid || !isDescriptionValid) {
      //   Alert.alert("Invalid input", "Please check your input values");

      setInputs((currentInputValues) => {
        return {
          amount: {
            value: currentInputValues.amount.value,
            isValid: isAmountValid,
          },
          date: { value: currentInputValues.date.value, isValid: isDateValid },
          description: {
            value: currentInputValues.description.value,
            isValid: isDescriptionValid,
          },
        };
      });

      return;
    }

    onConfirm(expenseData);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputRowsContainer}>
          <View style={styles.inputRow}>
            <Input
              label="Amount"
              textInputConfig={{
                keyboardType: "decimal-pad",
                placeholder: "Enter the amount",
                onChangeText: inputChangedHandler.bind(this, "amount"),
                value: inputs.amount.value,
              }}
            />
            {!inputs.amount.isValid && (
              <Text style={styles.errorText}>Amount is invalid!</Text>
            )}
          </View>
          <View style={styles.inputRow}>
            <Input
              label="Date"
              textInputConfig={{
                placeholder: "YYYY-MM-DD",
                maxLength: 10,
                onChangeText: inputChangedHandler.bind(this, "date"),
                value: inputs.date.value,
              }}
            />
            {!inputs.date.isValid && (
              <Text style={styles.errorText}>Date is invalid!</Text>
            )}
          </View>
        </View>
        <View>
          <Input
            label="Description"
            textInputConfig={{
              multiline: true,
              placeholder: "Enter the description",
              onChangeText: inputChangedHandler.bind(this, "description"),
              value: inputs.description.value,
            }}
          />
          {!inputs.description.isValid && (
            <Text style={styles.errorText}>Description values is invalid!</Text>
          )}
        </View>
      </View>

      <View style={styles.buttonsConainer}>
        <Button onPress={onCancel} mode="flat" style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: 24,
  },
  inputContainer: {
    backgroundColor: "#333333",
    padding: 20,
    borderRadius: 28,
    marginBottom: 32,
  },
  inputRowsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputRow: {
    flex: 1,
    flexDirection: "column",
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
  errorText: {
    color: "#FF597B",
    fontSize: 12,
    marginLeft: 12,
  },
});
