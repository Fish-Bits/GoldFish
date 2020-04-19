import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const Event = (props) => {
  const { name, date, description, location, styles } = props;
  return (
    <Grid item sm={4}>
    <Paper styles={styles.Paper}>
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h3>{date}</h3>
      <h6>{description}</h6>
      <ul>
        <li>Let me Call you </li>
        <li>Let me Call you </li>
        <li>Let me Call you </li>
        <li>Let me Call you </li>
        <li>Let me Call you </li>
      </ul>
    </Paper>
    </Grid>
  );
};

export default Event;
