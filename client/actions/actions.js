import axios from 'axios';
import * as types from '../constants/actionTypes';

const fakeUser = {
  username: 'augustine',
  id: 0
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