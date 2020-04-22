import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './containers/login.jsx';
import Signup from './containers/Signup';
import CreateEvent from './components/createEvent';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/home' component={App} />
      <Route exact path='/' component={Login} />
      <Route exact parh='/signup' component={Signup} />
      <Route exact path='/create' component={CreateEvent} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
