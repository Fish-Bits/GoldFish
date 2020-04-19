import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import Login from './components/login.jsx'
import { Route, Switch, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
);
