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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
// import ChatIcon from '@material-ui/icons/Chat';
import ChatWindow2 from '../containers/chatWindow2';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import AddCommentIcon from '@material-ui/icons/AddComment';
import CounterButton from './counterButton';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
    backgroundColor: red[500],
  },
}));

const EventCard = (props) => {
  const { name, date, description, location, styles } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item md={3}>
      <Card elevation={3} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={date}
        />
        <CardMedia
          className={classes.media}
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDRUPDw8VFRUVFRUVFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NFQ0NFSsZFR0rKy0tKysrKystKy0tLSsrNy03KystLSsrKy0tKzctKy0tKy0rLS0rKy0rLS0rKysrK//AABEIAMQBAQMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAJRABAAIBAgUEAwAAAAAAAAAAAAHwETGhIUGRsdECUWHhcYHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAVEQEBAAAAAAAAAAAAAAAAAAAAIf/aAAwDAQACEQMRAD8A7gAgl/KiACgCXVUugHRS8kuoF4gAAAF9wFLoX3LqAACAKAhdVBLqqXQAvAFAAAAAx8icAFAAAAAAABFAAABFARQAvJFAS2FAAABLot0AAAAAAAAAMgKACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7AAAAAAAABQAAAAAARQAAAAAAAAAAAAABAAAAAAUAAAAAAEUAQBUAAAAABRAUQBQAAAAAABAAAMgAAAAoAAACCoCoACoAAIAAACgAACgAAAAAAAAACAAAAoAAAAACKIAoAgqIAqAqKiioogigoAAAAAAACGQwFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQFRAEAAAAAAAAUAAAAAlAAAAUAAAAAAABAAAADAAAAAAAAoAAAAAACIKJkBRDIKIAoCgAAAAAIAAAAomFBBAFEBQAAEBRAFBAATKCiEAsjOVBRMqCiKoCAKIoCoAogIogCDWYBUAAELdgVC28gAJJkAygC5EMgAZBJORMHqQCJI1MAoQYUFymQFEAUIIvUALehbsCiW3mtt5AAAvEZ4e4It2S7AKs634QAL3L2QEX7RAVS9vIACALKABBOoAHqACVQBZEAWDwAI15QBYu5F2AQi7F2+wFW/wu+ABrACo/9k="
          title=""
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <Collapse in={expanded} timeout="auto" mountOnExit>
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
