import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import party from '../assets/shutterstock_199419065.jpg';
import math from '../assets/upsidedown.jpg';
import python from '../assets/python.jpg';
import bri from '../assets/bri.jpg';
import noimage from '../assets/noimage.jpg';
import ChatWindow2 from '../containers/chatWindow2';
import CounterButton from './counterButton';

const randomColor = Math.floor(Math.random()*16777215).toString(16);
const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: 345,
    backgroundColor: 'rgba(255,255,255, 0.85)',
    alignItems: 'center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#" + randomColor,
  },
}));

const EventCard = (props) => {
  const { name, date, description, location, image} = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const imgArr = [party, python, bri, math, noimage, noimage, noimage]
  console.log(props.id)
  return (
    <Grid item md={3} >
      <Card elevation={3} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" style={{backgroundColor: "#" + randomColor}}>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={<Typography variant="h5" style={{fontFamily: 'Merriweather'}}> {name} </Typography>}
          subheader={<Typography variant="subtitle1" style={{fontFamily: 'Merriweather'}}> {date} </Typography>}
        />
        <CardMedia
          className={classes.media}
          image={imgArr[props.id]}
          title=""
        />
        <CardContent>
        <Typography variant="h6" style={{fontFamily: 'Merriweather', color:"black"}} component="p">
            {location}
          </Typography>
          <Typography variant="subtitle2" style={{fontFamily: 'Merriweather', color:"black"}} component="p">
            Description:
          </Typography>
          <Typography variant="body2" style={{fontFamily: 'Merriweather', color:"black"}} component="p">
            {description}
          </Typography>
        </CardContent>
        <Collapse in={expanded} timeout="auto">
          <CardContent>
            <div className='App'>
              <ChatWindow2 />
            </div>
          </CardContent>
        </Collapse>
        <CardActions disableSpacing>
          <CounterButton />
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default EventCard;
