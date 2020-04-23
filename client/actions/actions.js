import axios from "axios";
import * as types from "../constants/actionTypes";

export const login = user => {
  const { username, password } = user;
  return dispatch => {
    fetch("/auth/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(result => {
        if (result && result.success) {
          const currentUser = {
            username: result.username,
            userId: result.userId
          };
          localStorage.setItem("token", result.token);
          dispatch({
            type: types.LOGIN,
            payload: currentUser
          });
        } else {
          console.log('you are not a user')
        }
     });
  };
};

export const getUser = () => {
  return dispatch => {
    //get request user data (username & id)
    //send token to be authenticated
    dispatch({
      type: types.GET_USER
      //user data//add payload
    });
  };
};

export const getComments = (eventId) => {
  return dispatch => {
      axios
        .get(`/events/${eventId}/comment`)
        .then(res => {
          console.log("axios get response", res);
          dispatch({
            type: types.GET_COMMENTS,
            payload: res.data
          })
        })
        .catch(error => console.log(error));
    };
}

export const addComments = (eventId, body) => {
  return dispatch => {
    axios
    .post(`/events/${eventId}/comment`,body)
    .then(res => {
      console.log('axios post comment', res)
      dispatch({
        type: types.ADD_COMMENTS
      })
    })
    .catch(error => console.log(error));
  }
}