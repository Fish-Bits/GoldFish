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
        <h1>Hi, this is Sieun</h1>
        <a className="google-btn" href="/auth/google"> Google+</a>
        <MainContainer />
      </div>
    );
  }
}

export default App;