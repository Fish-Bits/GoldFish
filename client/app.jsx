import React, { useState, useEffect } from 'react';
import EventsPage from './containers/EventsPage.jsx';
import Login from './containers/login.jsx';
import CreateEvent from './components/createEvent';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './containers/Signup';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './actions/actions'

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(actions.getUser())
})



const App = ({ getUser, authenticated }) => {
  useEffect(() => {
    getUser();
  })
  return (
    <>
      <Switch>
        <ProtectedRoute
          authenticated={authenticated}
          exact
          path='/home'
          render={() => <EventsPage />}
        />
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/create' component={CreateEvent} />
      </Switch>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
