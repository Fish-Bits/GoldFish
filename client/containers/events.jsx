import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Event from '../components/event.jsx';
const axios = require('axios');

const styles = {
  Paper: {padding:20, marginTop: 10, marginBottom: 10}
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
      // console.log(response.data);
      console.log(response.data[0]);
      this.setState({ events: response.data });
      console.log(this.state);
    });
  }
  render() {
    return (
      <Grid container sm={12}>
        {this.state.events.map((event, i) => {
          return (
              <Event
                styles={styles.Paper}
                key={i}
                name={event.name}
                location={event.location}
                date={event.date}
                description={event.description}
              />
            
          );
        })}
      </Grid>
    );
  }
}

export default Events;
