import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./Components/Navbar/Navbar";

import ShowAllTalks from "./Components/ShowAllTalks/ShowAllTalks";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import "./App.css";

const Signin = React.lazy(() => import("./Components/Signin/Signin"));
const Signup = React.lazy(() => import("./Components/Signup/Signup"));
const Home = React.lazy(() => import("./Components/Home/Home"));

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sign-up' component={Signup} />
          <Route exact path='/sign-in' component={Signin} />
          <Switch>
            <PrivateRoute
              exact
              path='/show-all-talks'
              component={ShowAllTalks}
            />
          </Switch>
        </Switch>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.authUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(App)
);
