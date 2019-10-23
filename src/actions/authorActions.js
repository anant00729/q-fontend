import { GET_ALL_AUTHORS} from './constants'
import axios from 'axios'
import { TOKEN } from '../actions/constants';


export const getAllAuthors = (p) => async dispatch => {
    
  let req_d  = { token : localStorage.Admin_Token }
    const res = await axios.post('/api/auth/getAllAuthors', req_d)

    const res_d = res.data

    console.log('res_d :', res_d);

    if(res_d.Status){
        const action = {
            type : GET_ALL_AUTHORS,
            payload : res_d.Authors
        }
        dispatch(action)
    }else {
        console.log('res_d.Message :', res_d.Message);
    }
}


    
