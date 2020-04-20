import React, { Component, Fragment } from 'react';
import Header from './components/header.jsx';
import Events from './containers/events.jsx';
import './stylesheets/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: 'false',
    };
  }
  render() {
    return (
      <div className="bg">
        <Header />
        <Events />
      </div>
    );
  }
}

export default App;
