import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [
    {
      id: "e1",
      description: "A pair of shoes",
      amount: 59.99,
      date: new Date("2022-11-08"),
    },
    {
      id: "e2",
      description: "A book",
      amount: 13.29,
      date: new Date("2022-11-11"),
    },
    {
      id: "e3",
      description: "Gundam Barbatos",
      amount: 89.89,
      date: new Date("2022-12-19"),
    },
    {
      id: "e4",
      description: "A bananas",
      amount: 5.29,
      date: new Date("2022-12-20"),
    },
    {
      id: "e5",
      description: "A gaming computer",
      amount: 1199.99,
      date: new Date("2022-12-20"),
    },
    {
      id: "e6",
      description: "A bananas",
      amount: 5.29,
      date: new Date("2022-12-20"),
    },
    {
      id: "e7",
      description: "A gaming computer",
      amount: 1199.99,
      date: new Date("2022-12-20"),
    },
  ],
};

const ExpenseSlice = createSlice({
  name: "ExpenseSlice",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const id = new Date().toString() + Math.random().toString();

      state.expenses.push({ id, ...action.payload });
    },
    updateExpense: (state, action) => {
      const id = action.payload.expenseId;
      const newData = action.payload.expenseData;

      const foundIndex = state.expenses.findIndex((item) => item.id === id);
      state.expenses[foundIndex] = { id, ...newData };
    },
    removeExpense: (state, action) => {
      const id = action.payload.expenseId;

      state.expenses = state.expenses.filter((item) => item.id !== id);
    },
  },
});

export const { addExpense, updateExpense, removeExpense } =
  ExpenseSlice.actions;
export default ExpenseSlice.reducer;
