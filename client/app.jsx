import React, { Component } from 'react';
import MainContainer from './containers/maincontainer.jsx';
import './stylesheets/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: 'false'
    }
  }
  render() {
    return (
      <div>
        <MainContainer />
      </div>
    );
  }
}

export default App;