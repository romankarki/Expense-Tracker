import { GET_INCOMES, CREATE_INCOME, DELETE_INCOME } from "../actions/types";

const initialState = {
  incomes: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INCOMES:
      return {
        ...state,
        incomes: action.payload,
      };

    case CREATE_INCOME:
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };

    case DELETE_INCOME:
      return {
        ...state,
        incomes: state.incomes.filter((income) => income.id !== action.payload),
      };

    default:
      return state;
  }
}
