import * as types from '../constants/actionTypes'

const initialState = {
  currentUser: {},
  authenticated: true
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {


    default:
      return { ...state }
  }

}

export default authReducer;