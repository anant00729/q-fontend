import { GET_ALL_ARTICLE} from '../actions/constants'



const initialState = {
    all_articles : []
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_ALL_ARTICLE: 
        state.all_articles = action.payload
        return state
        default:
            return state
    }
}