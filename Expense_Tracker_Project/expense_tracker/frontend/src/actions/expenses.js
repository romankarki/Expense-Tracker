import axios from "axios";

import { tokenConfig } from "./auth";

import { GET_EXPENSES, DELETE_EXPENSES, CREATE_EXPENSE } from "./types";

//fetch expenses from the server
export const getExpenses = () => (dispatch, getState) => {
  axios
    .get("/api/expenses/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_EXPENSES,
        payload: res.data,
      });
    })
    .catch((err) => {
      alert("Error fetching expenses record from the server");
    });
};

//create a new expense in the database
export const addExpense = (expense) => (dispatch, getState) => {
  axios
    .post("api/expenses/", expense, tokenConfig(getState))
    .then((res) => {
      alert("record added sucessfully");
      dispatch({
        type: CREATE_EXPENSE,
        payload: res.data,
      });
    })
    .catch((err) => alert("failed to add the record"));
};

//delete a expense record
export const deleteExpense = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/expenses/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_EXPENSES,
        payload: id,
      });
    })
    .catch((err) => alert("Error while deleting..."));
};
