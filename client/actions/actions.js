import axios from 'axios';
import * as types from '../constants/actionTypes';

const fakeUser = {
  username: 'augustine',
  id: 1
}

export const login = (user) => {
  const {username, password} = user
  return (dispatch) => {
      fetch('/auth/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        localStorage.setItem("token", result.token)
        dispatch({
          type: types.LOGIN,
          payload: result.username
        })
        if (result && result.success) {
          console.log('success');
        }
      });
  }
}

export const getUser = () => {
  return (dispatch) => {
    //get request user data (username & id)
    //send token to be authenticated
    dispatch({
      type: types.GET_USER,
      payload: fakeUser//user data
    })
  }
}


// const Login = (props) => {
//   const classes = useStyles();
//   const doLogin = () => {
//     if (!values.username) return;
//     if (!values.password) return;
//     fetch('/auth/login', {
//       method: 'post',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username: values.username,
//         password: values.password,
//       }),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result)
//         if (result && result.success) {
//           console.log('success');
//         }
//       });
//   };