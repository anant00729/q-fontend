// this is just one of the reducers

import { GET_ALL_AUTHORS, GET_AUTHOR_COUNT, AAD_AUTHOR} from '../actions/constants' 
const initailState = {
  all_authors : [],
  next_author_id : -1,
  is_author_created : false
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
            next_author_id : action.payload,
            is_author_created : false
        }


        case AAD_AUTHOR:
        return {
            ...state,
            is_author_created : action.payload
        }

        default : 
            return state
    }
 }
