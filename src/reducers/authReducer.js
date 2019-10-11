import { SET_TOKEN , AUTH_FAILED} from '../actions/constants'



const initialState = {
    isAuthenticated : false,
    token : '',
    failedMessage: ''
}

export default function(state = initialState, action) {
    switch(action.type){
        case SET_TOKEN:
        let { token } = action.payload    
        let isAuthenticated = false
        if(token){
            isAuthenticated = true
        }else {
            token = ''
        }

        console.log('isAutherized :', isAuthenticated);
        console.log('token :', token);

        return {
            ...state,
            isAuthenticated,
            token : token,
            failedMessage: ''
        }
        case AUTH_FAILED:
        return {
            ...state,
            failedMessage : action.payload,
        }

        default:
            return state
    }
}