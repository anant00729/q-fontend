// this is just one of the reducers

import { GET_ALL_AUTHORS, GET_AUTHOR_COUNT} from '../actions/constants' 
const initailState = {
  all_authors : [],
  author_count : -1
 }
// on calling this.props.getProfiles() this method get called for GET_PROFILES

 export default function(state = initailState , action){
    switch(action.type){
        case GET_ALL_AUTHORS:
        return {
            ...state,
            all_authors : action.payload,
        }

        case GET_AUTHOR_COUNT:
        return {
            ...state,
            author_count : action.payload,
        }

        default : 
            return state
    }
 }
