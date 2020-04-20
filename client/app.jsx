import React, { Component, Fragment } from 'react';
import Header from './components/header.jsx';
import Events from './containers/events.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: 'false',
    };
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Events />
      </Fragment>
    );
  }
}

export default App;
