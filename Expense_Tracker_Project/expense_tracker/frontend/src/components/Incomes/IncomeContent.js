import React, { Component, Fragment } from "react";
import IncomeForm from "./IncomeForm";
import Incomes from "./Incomes";

export class IncomeContent extends Component {
  render() {
    return (
      <Fragment>
        <IncomeForm />
        <Incomes />
      </Fragment>
    );
  }
}

export default IncomeContent;
