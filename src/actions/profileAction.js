import { LOADING, SET_TOKEN, FAILED} from './constants'
import axios from 'axios'


export const initLogin = (p,history) => async dispatch => {
    dispatch({ type : LOADING })
    const res = await axios.post('/api/auth/login', p)

    const res_d = res.data

  

    if(res_d.Status){
        // set token to localstorage
        localStorage.setItem('Token', res_d.token)
        //history.push('/')
        const action = {
            type : SET_TOKEN,
            payload : res_d
        }
        dispatch(action)
    }else {
        // const action = {
        //     type : FAILED,s
        //     payload : res_d.Message
        // }
        //dispatch(action)
    }

    // const action = {
    //     type : INIT_LOGIN,
    //     payload : res.data
    // }

    // dispatch(action) 
}


    

