import { GET_ALL_ARTICLE, GET_SINGLE_ARTICLE, GET_ARTICLE_COUNT_AND_AUTHOR_LIST, ADD_SINGLE_ARTICLE} from '../actions/constants'



const initialState = {
    all_articles : [],
    single_article : {},
    isVisible : true,
    all_authors : [],
    next_article_id : -1,
    is_article_created : false
    
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_ALL_ARTICLE: 
        return {
            ...state,
            all_articles : action.payload,
        }
        
        case GET_SINGLE_ARTICLE: 
        return {
            ...state,
            single_article : action.payload[0]
        }

        case GET_ARTICLE_COUNT_AND_AUTHOR_LIST:
        return {
            ...state,
            all_authors : action.payload.Authors,
            next_article_id : action.payload.Count,
            is_article_created : false
        }

        case ADD_SINGLE_ARTICLE:
        return {
            ...state,
            is_article_created : action.payload.Status
        }


        
        default:
            return state
    }
}