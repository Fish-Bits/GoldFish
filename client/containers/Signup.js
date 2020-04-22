import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { signup } from '../auth/index';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signup = (props) => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    username: '',
    password: '',
    error: '',
    success: false,
  });

  const { username, password, error, success } = values;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, error: false, [prop]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    console.log('I am here');
    setValues({ ...values, error: false });
    signup({ username, password }).then((data) => {
      console.log(data);
      if (data === undefined) {
        console.log('I am at the error here');
        setValues({ ...values, error: true, success: false });
      } else if (data.error) {
        setValues({ ...values, error: true, success: false });
      } else {
        setValues({
          ...values,
          username: '',
          password: '',
          error: '',
          success: true,
        });
      }
    });
  };

  const signUpForm = () => (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign Up
          </Typography>

          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              name='username'
              autoComplete='username'
              autoFocus
              onChange={handleChange('username')}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={handleChange('password')}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              fullWidth
              variant='contained'
              color='primary'
              onClick={clickSubmit}
              className={classes.submit}
            >
              Create Your Account
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );

  const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      Can't Create Account
    </div>
  );

  const showSuccess = () => (
    <div
      className='alert alert-info'
      style={{ display: success ? '' : 'none' }}
    >
      New account has been created. Please <Link to='/'>Log In</Link>
    </div>
  );

  return (
    <React.Fragment>
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </React.Fragment>
  );
};
export default Signup;
