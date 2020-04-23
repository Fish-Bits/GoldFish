import * as types from '../constants/actionTypes'

const initialState = {
  comments: [],
}

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      }
    case types.ADD_COMMENTS:
      return {
        ...state,
      }
    default:
      return {... state};
  }
}

export default commentsReducer;