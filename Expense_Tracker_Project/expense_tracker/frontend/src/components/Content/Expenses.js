import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getExpenses, deleteExpense } from "../../actions/expenses";

export class Expenses extends Component {
  componentDidMount() {
    this.props.getExpenses();
  }

  render() {
    let sum = 0;
    return (
      <Fragment>
        <h2>My Expenses</h2>
        <table className="table table-hover">
          <thead>
            <tr className="table-active">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Message</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.props.expenses.map((expense) => (
              <tr className="table-light" key={expense.id}>
                <th scope="row">{expense.id}</th>
                <td>{expense.name_of_expense}</td>
                <td>{expense.type_of_expense}</td>
                <td>{expense.message}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>

                <td>
                  <button
                    onClick={this.props.deleteExpense.bind(this, expense.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
                <td hidden="True">{(sum = sum + expense.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4>
          <strong>total expenses: {sum}</strong>
        </h4>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.expenses.expenses,
});

export default connect(mapStateToProps, {
  getExpenses,
  deleteExpense,
})(Expenses);
