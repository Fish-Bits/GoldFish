import React, { Component, Fragment } from 'react';
import Header from './components/header.jsx';
import Events from './containers/events.jsx';
import './stylesheets/app.css';

const App = (props) => {
  return (
    <div className="bg">
      <Header />
      <Events />
    </div>
  );
};

export default App;
