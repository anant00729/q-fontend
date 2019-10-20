import { GET_ALL_ARTICLE, GET_SINGLE_ARTICLE} from '../actions/constants'



const initialState = {
    all_articles : [],
    single_article : {}
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_ALL_ARTICLE: 
        const s = {}
        s.all_articles = action.payload
        return s

        case GET_SINGLE_ARTICLE: 
        let s1 = {}
        s1.all_articles = state.payload
        s1.single_article = action.payload[0]
        return s1
        default:
            return state
    }
}