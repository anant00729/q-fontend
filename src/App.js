import React,{ Component } from 'react';
import RHome from './RHome';
import { ARTICLE_ID } from './actions/constants';

import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import setAuthToken from './utils/setAuthToken'
import './App.css';
import { setCurrentUser , } from './actions/authActions';


// check for token 
if(localStorage.Token){
  //set the auth token header auth 
  setAuthToken(localStorage.Token)
  localStorage.setItem(ARTICLE_ID, '118')
  
  // set user and isAuthenticated
  const res_d = {}
  res_d.token = localStorage.Token
  store.dispatch(setCurrentUser(res_d))
 
}




class App extends Component {
  render() {  
    return (
      <Provider store={store}>
        <Router>
          <RHome/>
        </Router>
      </Provider>
    )
  }
}

export default App;

// "build": "npm run build:css && react-scripts build",
