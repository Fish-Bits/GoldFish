import { combineReducers } from 'redux'
import authReducer from './authReducer.js'
import commentsReducer from './commentsReducer'

export default combineReducers({
  auth: authReducer,
  comments: commentsReducer,
})
