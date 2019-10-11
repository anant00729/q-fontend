import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'
import app_img from '../app_img.jpg';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import fb from '../images/facebook.png';
import google from '../images/search.png';
import { initLogin , callSocialLogin } from '../actions/authActions'
import TextInputgroup from '../base/TextInputGroup'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class HomeMenu extends Component {

  constructor(props){
    super(props)
    this.state = {isToggleOn: true, 
      email : '',
      password : '',
      errors : {}
    };
  }


  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps){

    
    if(nextProps.auth.isAuthenticated){
      this.props.history.push('/')
    }
    else {
      this.checkForFailedMessage(nextProps)
    }
  }


  initLogin = (e) => {
    e.preventDefault()

    
    const {  email , password } = this.state
    let errors = {}
    
   
    if(email === ''){
        errors.email = 'Email is required' 
        this.setState({ errors })
        return
    } 
    if(password === ''){
        errors.password = 'Password is required' 
        this.setState({ errors })
        return
    }


    const pro = { email , password }
    this.props.initLogin(pro, this.props.history);
  }

 


  responseGoogle = (res) => {
    this.props.callSocialLogin(res.tokenId,1)
    
  }



  responseFacebook = (res) => {
    this.props.callSocialLogin(res.accessToken,2) 
  }


  onChange = e => {
    this.setState({
        [e.target.name] : e.target.value
    })
  }



  checkForFailedMessage = (nextProps) => {

    
    const { failedMessage  } = nextProps.auth
    
    if(failedMessage){
    let errors = {}
   
      if(failedMessage !== ''){
          errors.password = failedMessage
          this.setState({ errors })
          return
      }
    }
  }

  render() {

    const {  email , password, errors } = this.state
    

    return (
      <div>
        <div className="fixed overflow-hidden top-0 w-full h-screen menu-transparent flex flex-col overflow-y-auto items-center">
                <div className="flex-1 flex flex-col justify-center text-center max-w-sm w-full px-8">
                
                  <div className="w-24 content-center mx-auto">
                        <img src={app_img} className="rounded-full shadow-md border-2 border-white-500"alt="asdasd"/>
                        <p className="text-white mt-1 text-2xl">Quonquer</p>
                  </div>
  
                  <div className="py-2 -mt-4 bg-gray-20 flex-col content-start justify-start">

                  <form onSubmit={this.initLogin}>

                  <p className="text-gray-700 mt-2 text-left">Email</p>
                    <div className="mt-2">

                    <TextInputgroup
                        name = "email" 
                        label = "Email"
                        value = {email}
                        placeholder = ""
                        type = "email" 
                      onChange = {this.onChange}
                      error = { errors.email }
                      />
                  </div>
  
                    <p className="text-gray-700 mt-2 text-left">Password</p>
                    <div className="mt-2">
                    <TextInputgroup
                        name = "password" 
                        label = "Password"
                        value = {password}
                        placeholder = ""
                        type = "password" 
                        onChange = {this.onChange}
                        error = { errors.password }
                      />
                    </div>
                    <div className="flex mt-4">


                    <input type="submit" value="Login"
                      className="inline-block border-solid border border-white
                      mx-auto
                      mt-4
                      text-white px-8 py-3 uppercase tracking-wider 
                      text-xs font-semibold rounded-lg shadow-md 
                      w-full
                      hover:bg-white hover:text-black
                      dark-blue
                      text-center
                      search-btn-text"
                    />

                    </div>
                  </form>
                    <div className="flex mt-1">

                    <botton className="
                        inline-block border-solid border border-white
                        mx-auto
                        mt-4
                        text-white px-8 py-3 uppercase tracking-wider 
                        text-xs font-semibold rounded-lg shadow-md 
                        w-full
                        hover:bg-white hover:text-black
                        dark-blue
                        text-center
                        search-btn-text
                        "
                        
                        // onClick={this.logout}
                        >Register</botton>
                    </div>
  
                    <div className="w-full h-10 flex items-center py-10">
                      <div className="bg-white app-line text-center flex-auto rounded"></div>
                      <p className="text-white text-center px-2">OR</p>
                      <div className="bg-white app-line flex-auto rounded text-center"></div>
                    </div>
                
              </div>


                  <GoogleLogin
                    clientId="428442470254-dlf148vdevqtoo8ec5eub0dq8376aacb.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                      <div className="flex
                        justify-center
                        inline-block border-solid border border-white
                        mx-auto
                        mt-4
                        dark-blue-text px-8 py-3 tracking-wider 
                        text-xs font-semibold rounded-lg shadow-md 
                        w-full
                        hover:bg-white hover:text-black
                        bg-white
                        text-center
                        search-btn-text
                        cursor-pointer
                        "
                        onClick={renderProps.onClick}
                        >
                          <img src={google} className="rounded-full shadow-md w-8 h-8 -ml-4 p-1"alt="asdasd"/>
                        <button 
                        className="ml-3"
                        >
                          Sign in with Google</button>
                        </div>
                    )}
                      />


                    <FacebookLogin
                      appId="2244730898916165"
                      
                      callback={this.responseFacebook}
                      render={renderProps => (
                        <div className="flex
                        justify-center
                        inline-block border-solid border border-white
                        mx-auto
                        mt-4
                        dark-blue-text px-8 py-3 tracking-wider 
                        text-xs font-semibold rounded-lg shadow-md 
                        w-full
                        hover:bg-white hover:text-black
                        bg-white
                        text-center
                        search-btn-text
                        cursor-pointer
                        "
                        onClick={renderProps.onClick}
                        >
                          <img src={fb} className="rounded-full shadow-md w-8 h-8"alt="asdasd"/>
                        <button 
                        className="ml-3"
                        >
                          Sign in with Facebook</button>
                        </div>
                        
                      )}
                    />


                {/* <GoogleLogout
                      clientId="428442470254-dlf148vdevqtoo8ec5eub0dq8376aacb.apps.googleusercontent.com"
                      buttonText="Logout"
                      onLogoutSuccess={this.logout}
                    >
                    </GoogleLogout> */}
  
                  
  
  
              </div>
              
        </div>




        <div className="fixed bottom-0 w-full flex content-center justify-end mb-4 pr-4">
          <div className="rounded-full app-logo-center-close flex items-center justify-center"
                      >
                      <Link to="/" className="text-center">
                        <i className="fa fa-close text-md text-black"></i>
                      </Link>
          </div>
        </div>
      </div>
      )
  }
}


HomeMenu.propTypes = {
  loginUser : PropTypes.func.isRequired,
  auth : PropTypes.object.isRequired,
  errors : PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth : state.auth,
  errors : state.errors
})



export default connect(mapStateToProps, { initLogin, callSocialLogin })(HomeMenu)
