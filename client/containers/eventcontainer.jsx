import React, { Component } from 'react';
import Event from '../components/event.jsx';

class EventContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Event className="eventContainer" />
      </div>
    );
  }
}

export default EventContainer;
