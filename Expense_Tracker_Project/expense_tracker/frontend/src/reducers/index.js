import { combineReducers } from "redux";

import auth from "./auth";
import expenses from "./expenses";

import incomes from "./incomes";

export default combineReducers({
  expenses,
  auth,
  incomes,
});
