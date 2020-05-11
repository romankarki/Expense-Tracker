import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getIncomes } from "../../actions/incomes";
import { getExpenses } from "../../actions/expenses";

import { Bar } from "react-chartjs-2";

export class Analytics extends Component {
  componentDidMount() {
    this.props.getExpenses();
    this.props.getIncomes();
  }
  render() {
    let totalexpense = 0;
    let totalincome = 0;

    let data = {
      labels: ["", "Expenses", "Incomes"],
      datasets: [
        {
          label: "Amount",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [0, 100, 1100],
        },
      ],
    };

    return (
      <Fragment>
        {this.props.expenses.map((expense) => {
          totalexpense = totalexpense + expense.amount;
        })}
        {this.props.incomes.map((income) => {
          totalincome = totalincome + income.amount;
        })}

        <h2>My Finance Analytics</h2>

        <table className="table table">
          <tr>
            <td>
              <Bar
                data={{
                  labels: ["", "Expenses", "Incomes"],
                  datasets: [
                    {
                      label: "Amount",
                      backgroundColor: "rgba(75,192,192,1)",
                      borderColor: "rgba(0,0,0,1)",
                      borderWidth: 2,
                      data: [0, totalexpense, totalincome],
                    },
                  ],
                }}
                options={{
                  title: {
                    display: true,
                    text: "My Finances",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </td>
            <td>
              <div className="card card-body mt-4 mb-4">
                <h7>Total Expense: {totalexpense}</h7>
                <br></br>
                <h7>Total Income: {totalincome}</h7>
                <br></br>
                <h7>
                  Net : {totalincome - totalexpense}
                  <br></br>
                  <br></br>
                  {totalincome - totalexpense > 0 ? (
                    <div class="alert alert-dismissible alert-success">
                      <button type="button" class="close" data-dismiss="alert">
                        &times;
                      </button>
                      <strong>Okay!you are saving money!!</strong>
                    </div>
                  ) : (
                    <div class="alert alert-dismissible alert-danger">
                      <button type="button" class="close" data-dismiss="alert">
                        &times;
                      </button>
                      <strong>Oh snap!you are in debt!!</strong>
                    </div>
                  )}
                </h7>
              </div>
            </td>
          </tr>
        </table>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  incomes: state.incomes.incomes,
  expenses: state.expenses.expenses,
});
export default connect(mapStateToProps, { getExpenses, getIncomes })(Analytics);
