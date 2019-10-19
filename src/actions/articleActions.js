import { GET_ALL_ARTICLE, FAILED} from './constants'
import axios from 'axios'



export const getAllArticles = (p,history) => async dispatch => {
    //dispatch({ type : LOADING })
    const res = await axios.get('/article/getAllArticles')

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


