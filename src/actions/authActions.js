import { LOADING, SET_TOKEN, AUTH_FAILED, SET_ADMIN_TOKEN, ADMIN_TOKEN} from './constants'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken';

import { TOKEN } from '../actions/constants';


export const initLogin = (p, type = 'nor') => async dispatch => {
    //dispatch({ type : LOADING })
    p.type = type
    const res = await axios.post('/api/auth/login', p)

    const res_d = res.data

    if(res_d.Status){
        // set token to localstorage
        if(type === 'nor'){
            localStorage.setItem(TOKEN, res_d.token)
            dispatch(setCurrentUser(res_d))
        }else {
            localStorage.setItem(ADMIN_TOKEN, res_d.token)
            dispatch(setCurrentAdmin(res_d))
        }
        
        
    }else {
        const action = {type : AUTH_FAILED,payload : res_d.Message}
        dispatch(action)
    }

    
}


export const initLogout = (p,history) => async dispatch => {
    //dispatch({ type : LOADING })
    const req_d = { token : localStorage.Token }
    const res = await axios.post('/api/auth/logout', req_d)
    const res_d = res.data
    

    if(res_d.Status){
        localStorage.removeItem(TOKEN)
        setAuthToken(false)
        dispatch(setCurrentUser({}))
        
        
    }else {
        const action = {type : AUTH_FAILED, payload : res_d.Message}
        dispatch(action)
    }

    
}


export const initRegister = (p,history) => async dispatch => {
    //dispatch({ type : LOADING })
    const res = await axios.post('/api/auth/login', p)

    const res_d = res.data

    if(res_d.Status){
        // set token to localstorage
        localStorage.setItem(TOKEN, res_d.token)
        //history.push('/')
        dispatch(setCurrentUser(res_d))
        
    }else {
        const action = {type : AUTH_FAILED,payload : res_d.Message}
        dispatch(action)
    }

    
}



export const callSocialLogin = (sToken = "-1", sCode = -1) => async dispatch =>  {
    const req_d = {sToken, sCode}
    const res = await axios.post('/api/auth/socialLogin', req_d)
    const res_d = res.data

    if(res_d.Status){
        // set token to localstorage
        localStorage.setItem(TOKEN, res_d.token)
        //history.push('/')
        dispatch(setCurrentUser(res_d))
        
    }else {
        const action = {type : AUTH_FAILED,payload : res_d.Message}
        dispatch(action)
    }

}


// set logged in user
export const setCurrentUser = decoded => {
    return {
        type : SET_TOKEN,
        payload : decoded
    }
}


// set logged in user
export const setCurrentAdmin = decoded => {
    return {
        type : SET_ADMIN_TOKEN,
        payload : decoded
    }
}

    


