import React, { Component } from 'react';
import Event from '../components/event.jsx';
const axios = require('axios');

class EventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  componentDidMount() {
    axios.get('/events').then((response) => {
      // console.log(response.data);
      console.log(response.data[0]);
      this.setState({ events: response.data });
      console.log(this.state);
    });
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
