import { SET_TOKEN , AUTH_FAILED , SET_ADMIN_TOKEN} from '../actions/constants'



const initialState = {
    isAuthenticated : false,
    isAdminAuthenticated : false,
    token : '',
    adminToken : '',
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

        
        return {
            ...state,
            isAuthenticated,
            token : token,
            failedMessage: ''
        }


        case SET_ADMIN_TOKEN:
        console.log('action.payload :', action);
        let  adminToken  = action.payload.token
        let isAdminAuthenticated = false
        if(adminToken){
            isAdminAuthenticated = true
        }else {
            adminToken = ''
        }

        
        return {
            ...state,
            isAdminAuthenticated,
            adminToken,
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