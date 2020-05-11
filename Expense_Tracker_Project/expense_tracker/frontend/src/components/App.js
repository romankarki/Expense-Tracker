import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

import PrivateRoute from "./layout/PrivateRoute";

import Navbar from "./layout/Navbar";
import ContentBody from "./Content/ContentBody";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

import IncomeContent from "./Incomes/IncomeContent";
import Analytics from "./Analytics/Analytics";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <br></br>

            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={ContentBody} />
                <PrivateRoute exact path="/incomes" component={IncomeContent} />
                <PrivateRoute exact path="/analytics" component={Analytics} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
