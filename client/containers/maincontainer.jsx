import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Nav from '../components/nav.jsx';
import EventContainer from './eventcontainer.jsx';
import ChatWindow from './chatWindow.js';
class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addButton: 'false',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    this.setState({addButton: 'true'});
  }

  render() {
    return (
      <div className="main">
        <Nav />
        <div className="events">
        <div>
          <EventContainer />
          <ChatWindow />
        </div>
        </div>
      </div>
    );
  }
}

// maincontainer.propTypes = {

// };

export default MainContainer;
