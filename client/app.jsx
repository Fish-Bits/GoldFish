import React, { Component, Fragment } from 'react';
import Header from './components/header.jsx';
import Events from './containers/events.jsx';
// import Login from './containers/login.jsx';
// const Background = require('./images/iStock-504085304.jpg');
// const backgroundStyle = {
//   backgroundImage: "url("+{Background}+")"
// }
// style={backgroundStyle}

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
