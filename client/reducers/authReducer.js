import * as types from "../constants/actionTypes";

const initialState = {
  currentUser: {},
  authenticated: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        // currentUser: action.payload,
        authenticated: true
      };
    case types.LOGIN:
      return {
        ...state,
        currentUser: action.payload,
        authenticated: true
      };
    default:
      return { ...state };
  }
};

export default authReducer;
