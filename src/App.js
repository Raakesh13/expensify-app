import React from "react";
import "./App.scss";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import { Provider } from "react-redux";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water bill", amount: 350, createdAt: 1000 })
);
store.dispatch(
  addExpense({ description: "Gas bill", amount: 100, createdAt: 5000 })
);
store.dispatch(
  addExpense({ description: "Rent", amount: 1350, createdAt: 250 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

function App() {
  return jsx;
}

export default App;
