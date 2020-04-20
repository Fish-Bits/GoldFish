import React, { Component } from 'react';
import Event from '../components/event.jsx';
import ChatWindow from './chatWindow.js';
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
    const events = this.state.events.map((elm, i) => {
      return (<div>
      <Event
        key={i}
        name={elm.name}
        location={elm.location} 
        date={elm.date}
        description={elm.description}
      />
      <ChatWindow />
      </div>
    )});
    return <div>{events}</div>;
  }
}

export default EventContainer;
