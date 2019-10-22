// this is going to be root reducers
import { combineReducers } from 'redux'
import profileReducer from './profileReducer' 
import authReducer from './authReducer' 
import articleReducer from './articleReducer' 
import authorReducer from './authorReducer' 



export default combineReducers({
    profile : profileReducer,
    auth : authReducer,
    article : articleReducer,
    authors : authorReducer
})