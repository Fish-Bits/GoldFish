import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import EventCard from '../components/eventCard.jsx';
const axios = require('axios');

const styles = {
  Paper: {padding:20, marginTop: 10, marginBottom: 10},
}
class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    axios.get('/events').then((response) => {
      this.setState({ events: response.data });
    });
  }

  deleteEvent(id) {
    axios.delete('/events'+id)
    this.setState({
      events: this.state.events.filter(el => el.id !== id)
    })
  }

  render() {
    return (
      <Grid container spacing={2}>
        {this.state.events.map((event, i) => {
          return (
              <EventCard
                key={i}
                id={i}
                name={event.name}
                location={event.location}
                date={event.date.substring(0,10)}
                description={event.description}
                deleteEvent={this.deleteEvent}
              />
          );
        })}
      </Grid>
    );
  }
}

export default Events;
