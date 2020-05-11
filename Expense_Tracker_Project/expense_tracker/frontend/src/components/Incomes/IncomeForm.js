import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { addIncomes } from "../../actions/incomes";

export class IncomeForm extends Component {
  state = {
    source: "",
    amount: 0,
    message: "",
  };

  onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();
    const { source, amount, message } = this.state;
    const income = { source, amount, message };
    this.props.addIncomes(income);
    this.setState({
      source: "",
      amount: 0,
      message: "",
    });
  };

  render() {
    const { source, amount, message } = this.state;
    return (
      <Fragment>
        <div className="container">
          <h2>Add a new Income Record</h2>
          <div className="card card-body mt-4 mb-4">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <fieldset disabled="">
                  <label className="control-label" for="disabledInput">
                    Source of Income
                  </label>
                  <input
                    className="form-control"
                    id="disabledInput"
                    type="text"
                    placeholder="Source of Income here..."
                    disabled=""
                    name="source"
                    onChange={this.onChange}
                    value={source}
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

export default connect(null, { addIncomes })(IncomeForm);
