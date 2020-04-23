import axios from 'axios';
import * as types from '../constants/actionTypes';

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
        const currentUser = {
          username: result.username,
          userId: result.userId
        }
        localStorage.setItem("token", result.token)
        dispatch({
          type: types.LOGIN,
          payload: currentUser
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
      //user data//add payload
    })
  }
}
