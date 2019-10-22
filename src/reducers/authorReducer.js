// this is just one of the reducers

import { GET_ALL_AUTHORS} from '../actions/constants' 
const initailState = {
  all_authors : []
 }
// on calling this.props.getProfiles() this method get called for GET_PROFILES

 export default function(state = initailState , action){
    switch(action.type){
        case GET_ALL_AUTHORS:
        return {
            ...state,
            all_authors : action.payload,
        }
        default : 
            return state
    }
 }
