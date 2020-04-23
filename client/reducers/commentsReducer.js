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
    default:
      return {... state};
  }
}

export default commentsReducer;