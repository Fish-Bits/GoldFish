import React, { Component, Fragment } from 'react';
import EventsPage from './containers/EventsPage.jsx'
import Login from './containers/login.jsx';
import CreateEvent from './components/createEvent';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated
})

const App = ({ authenticated }) => {
  return (
    <>
      <Switch>
        <ProtectedRoute authenticated={authenticated} exact path='/home' render={() => <EventsPage />} />
        <Route exact path='/' component={Login} />
        <Route exact parh='/create' component={CreateEvent} />
      </Switch>
    </>
  )
}



export default connect(mapStateToProps, null)(App);