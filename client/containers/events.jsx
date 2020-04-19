import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Event from '../components/event.jsx';
const axios = require('axios');

class Events extends Component {
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
      <Grid container>
      {this.state.events.map((event) => {
          return (
            <Grid item sm>
              <Event
                name={event.name}
                location={event.location}
                date={event.date}
                description={event.description}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default Events;
