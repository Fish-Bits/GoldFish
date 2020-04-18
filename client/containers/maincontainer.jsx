import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Nav from '../components/nav.jsx';
import EventContainer from './eventcontainer.jsx';

class MainContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="main">
        <Nav/>
        <div className="events">
        <EventContainer />
        </div>
      </div>
    );
  }
}

// maincontainer.propTypes = {

// };

export default MainContainer;