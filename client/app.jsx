import React, { useState, useEffect } from "react";
import EventsPage from "./containers/EventsPage.jsx";
import Login from "./containers/login.jsx";
import CreateEvent from "./components/createEvent";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./containers/Signup";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions/actions";

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(actions.getUser()),
  login: user => dispatch(actions.login(user))
});

const App = ({ getUser, authenticated, currentUser, login }) => {
  // useEffect(() => {
  //   getUser();
  // })

  return (
    <>
      <Switch>
        <ProtectedRoute
          authenticated={authenticated}
          exact
          path="/home"
          render={() => <EventsPage currentUser={currentUser} />}
        />
        <Route
          exact
          path="/"
          render={() => <Login authenticated={authenticated} login={login} />}
        />
        <Route exact path="/signup" component={Signup} />
        <Route
          exact
          path="/create"
          render={() => <CreateEvent currentUser={currentUser} />}
        />
      </Switch>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
