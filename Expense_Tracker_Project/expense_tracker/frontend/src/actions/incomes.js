import axios from "axios";
import { tokenConfig } from "./auth";
import { GET_INCOMES, CREATE_INCOME, DELETE_INCOME } from "./types";

//fetch Incomes from server
export const getIncomes = () => (dispatch, getState) => {
  axios
    .get("/api/incomes/", tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_INCOMES,
        payload: res.data,
      })
    )
    .catch((err) => {
      alert("Error Fetching data from the server");
    });
};

//create a new income
export const addIncomes = (income) => (dispatch, getState) => {
  axios
    .post("api/incomes/", income, tokenConfig(getState))
    .then((res) => {
      alert("income added successfully");
      dispatch({
        type: CREATE_INCOME,
        payload: res.data,
      });
    })
    .catch((err) => {
      alert("Failed to Create a new Record!");
    });
};

//delete an income record
export const deleteIncome = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/incomes/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_INCOME,
        payload: id,
      });
    })
    .catch((err) => {
      alert("Record Not Deleted");
    });
};
