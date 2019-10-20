import { GET_ALL_ARTICLE, GET_SINGLE_ARTICLE} from '../actions/constants'



const initialState = {
    all_articles : [],
    single_article : {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_ALL_ARTICLE: 
        state.all_articles = action.payload
        return state

        case GET_SINGLE_ARTICLE: 
        state.single_article = action.payload[0]
        return state
        
        default:
            return state
    }
}