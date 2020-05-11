import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getIncomes, deleteIncome } from "../../actions/incomes";

export class Incomes extends Component {
  componentDidMount() {
    this.props.getIncomes();
  }
  render() {
    let total = 0;
    return (
      <Fragment>
        <h2>My Income</h2>
        <table className="table table-hover">
          <thead>
            <tr className="table-active">
              <th scope="col">Id</th>
              <th scope="col">Source of Income</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Message</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.props.incomes.map((income) => (
              <tr className="table-light" key={income.id}>
                <th scope="row">{income.id}</th>
                <td>{income.source}</td>
                <td>{income.amount}</td>
                <td>{income.date}</td>
                <td>{income.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteIncome.bind(this, income.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
                <td hidden="True">{(total = total + income.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h4>
          <strong>total income: {total}</strong>
        </h4>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  incomes: state.incomes.incomes,
});

export default connect(mapStateToProps, { getIncomes, deleteIncome })(Incomes);
