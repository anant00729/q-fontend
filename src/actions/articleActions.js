import { GET_ALL_ARTICLE, FAILED, GET_SINGLE_ARTICLE, GET_ARTICLE_COUNT_AND_AUTHOR_LIST} from './constants'
import axios from 'axios'



export const getAllArticles = (type) => async dispatch => {
    //dispatch({ type : LOADING })
    const req_d = {}
    req_d.type = type
    const res = await axios.post('/api/article/getAllArticles', req_d)

    const res_d = res.data

    if(res_d.Status){
        console.log('res_d :', res_d.articles);        
        const action = {type : GET_ALL_ARTICLE,payload : res_d.articles}
        dispatch(action)
        
    }else {
        const action = {type : FAILED ,payload : res_d.Message}
        dispatch(action)
    }

    
}




export const getSingleArticle = (id = '118')  => async dispatch => {
    //dispatch({ type : LOADING })
    const res = await axios.post('/api/article/getSingleArticles', {id})

    const res_d = res.data

    if(res_d.Status){
        console.log('res_d :', res_d.articles);        
        const action = {type : GET_SINGLE_ARTICLE,payload : res_d.articles}
        dispatch(action)
        
    }else {
        const action = {type : FAILED ,payload : res_d.Message}
        dispatch(action)
    }

    
}


export const getArticleFutureIDAndAllActiveAuthors = (id = '118')  => async dispatch => {
    //dispatch({ type : LOADING })
    let token = localStorage.Admin_Token
    
    const res = await axios.post('/api/article/getFutureIdAndAuthorsList',{token})

    const res_d = res.data

    if(res_d.Status){
        console.log('res_d :', res_d.articles);        
        const action = {type : GET_ARTICLE_COUNT_AND_AUTHOR_LIST,payload : res_d}
        dispatch(action)
        
    }else {
        const action = {type : FAILED ,payload : res_d.Message}
        dispatch(action)
    }

    
}




