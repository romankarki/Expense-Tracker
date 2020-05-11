import React, { Component, Fragment } from "react";
import Form from "./Form";
import Expenses from "./Expenses";
export class ContentBody extends Component {
  render() {
    return (
      <Fragment>
        <Form />

        <Expenses />
      </Fragment>
    );
  }
}

export default ContentBody;
