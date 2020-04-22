import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './containers/login.jsx';
import CreateEvent from './components/createEvent';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import store from './store';
import ProtectedRoute from './components/ProtectedRoute.jsx';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
