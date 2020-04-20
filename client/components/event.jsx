import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const list = {
  list: {listStyleType: 'none'}
}


const Event = (props) => {
  const { name, date, description, location, styles } = props;
  return (
    <Grid item md={4}>
      <Paper elevation={3} styles={styles}>
        <h2>{name}</h2>
        <ul>
          <li style={list.list}>{description}</li>
          <br />
          <li style={list.list}>{location}</li>
          <br />
          <li style={list.list}>{date}</li>
        </ul>
        {/* get Comments */}
      </Paper>
    </Grid>
  );
};

export default Event;
