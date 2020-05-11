import {
  GET_EXPENSES,
  DELETE_EXPENSES,
  CREATE_EXPENSE,
  UPDATE_EXPENSE,
} from "../actions/types";
import { bindActionCreators } from "redux";

const initialState = {
  expenses: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
      };

    case CREATE_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    case DELETE_EXPENSES:
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
