import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addExpense } from "../../actions/expenses";

export class Form extends Component {
  state = {
    name_of_expense: "",
    type_of_expense: "",
    message: "",
    amount: 0,
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();
    const { name_of_expense, type_of_expense, message, amount } = this.state;
    const expense = { name_of_expense, type_of_expense, message, amount };
    this.props.addExpense(expense);
    this.setState({
      name_of_expense: "",
      type_of_expense: "",
      message: "",
      amount: 0,
    });
  };

  render() {
    const { name_of_expense, type_of_expense, message, amount } = this.state;
    return (
      <Fragment>
        <div className="container">
          <h2>Add an Expense</h2>
          <div className="card card-body mt-2 mb-2">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <fieldset disabled="">
                  <label className="control-label" for="disabledInput">
                    Expense Name
                  </label>
                  <input
                    className="form-control"
                    id="disabledInput"
                    type="text"
                    placeholder="Expense name here..."
                    disabled=""
                    name="name_of_expense"
                    onChange={this.onChange}
                    value={name_of_expense}
                  />
                </fieldset>
              </div>

              <div className="form-group">
                <fieldset disabled="">
                  <label className="control-label" for="disabledInput">
                    Expense Type
                  </label>
                  <input
                    className="form-control"
                    id="disabledInput"
                    type="text"
                    placeholder="Expense type here..."
                    disabled=""
                    name="type_of_expense"
                    onChange={this.onChange}
                    value={type_of_expense}
                  />
                </fieldset>
              </div>

              <div className="form-group">
                <fieldset disabled="">
                  <label className="control-label" for="disabledInput">
                    Message
                  </label>
                  <input
                    className="form-control"
                    id="disabledInput"
                    type="text"
                    placeholder="Message here..."
                    disabled=""
                    name="message"
                    onChange={this.onChange}
                    value={message}
                  />
                </fieldset>
              </div>

              <div className="form-group">
                <fieldset disabled="">
                  <label className="control-label" for="disabledInput">
                    Amount
                  </label>
                  <input
                    className="form-control"
                    id="disabledInput"
                    type="number"
                    placeholder="Amount here..."
                    disabled=""
                    name="amount"
                    onChange={this.onChange}
                    value={amount}
                  />
                </fieldset>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, { addExpense })(Form);
