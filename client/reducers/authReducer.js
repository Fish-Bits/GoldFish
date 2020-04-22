import * as types from '../constants/actionTypes'

const initialState = {
  currentUser: {},
  authenticated: true
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case (types.GET_USER):
      return {
        ...state,
        currentUser: action.payload
      }

    default:
      return { ...state }
  }

}

export default authReducer;