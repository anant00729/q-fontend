import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'
import app_img from '../app_img.jpg';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import HomeMenuVM from './vm/HomeMenuVM';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import fb from '../images/facebook.png';
import google from '../images/search.png';

class HomeMenu extends Component {


  


  constructor(props){
    super(props)

    this.state = {isToggleOn: true, menuC : props.handleMenuC , mHMVM : new HomeMenuVM()};

    

    // This binding is necessary to make `this` work in the callback
    this.handleMenuC = this.handleMenuC.bind(this)
    this.responseGoogle = this.responseGoogle.bind(this)
    this.responseFacebook = this.responseFacebook.bind(this)
    this.logout = this.logout.bind(this)

    

  }


  handleMenuC(){
    const { menuC } = this.state
    menuC()
  }


  responseGoogle(res){
    const { mHMVM } = this.state
    mHMVM.callSocialLogin(res.tokenId,1)
  }


  responseFacebook(res){
    const { mHMVM } = this.state
    mHMVM.callSocialLogin(res.accessToken,2)
  }


  logout(res){
    console.log('res :', res);
  }

  render() {
    return (
      <div>
        <div className="fixed overflow-hidden top-0 w-full h-screen menu-transparent flex flex-col overflow-y-auto items-center">
                <div className="flex-1 flex flex-col justify-center text-center max-w-sm w-full">
                
                  <div className="w-24 content-center mx-auto">
                        <img src={app_img} className="rounded-full shadow-md border-2 border-white-500"alt="asdasd"/>
                        <p className="text-white mt-1 text-2xl">Quonquer</p>
                  </div>
  
                  <div className="py-2 -mt-4 bg-gray-20 flex-col content-start justify-start">
                    <p className="text-gray-700 mt-2 text-left">Email</p>
                    <div className="text-center shadow">
                      <input className="bg-white focus:outline-none focus:shadow-outline py-1 px-4 
                        
                        block w-full appearance-none leading-normal rounded  text-lg" type="email"
                        
                        />

                        {/* <input className="bg-white focus:outline-none focus:shadow-outline py-2 px-4 
                    mt-2 block rounded w-full appearance-none leading-normal" type="email"/> */}
                  </div>
  
                    <p className="text-gray-700 mt-2 text-left">Password</p>
                    <div className="mt-2 text-center shadow">
                      <input className="bg-white focus:outline-none focus:shadow-outline py-1 px-4
                          
                          block w-full appearance-none leading-normal rounded  text-lg" type="email"

                          
                          />
                        {/* <input className="bg-white focus:outline-none focus:shadow-outline py-2 px-4 block rounded w-full 
                            appearance-none leading-normal" type="password"/> */}
                    </div>
                    <div className="flex mt-4">

                    <Link href="" className="
                    
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
                        
                        ">Login</Link>
                    </div>


                    <div className="flex mt-1">

                    <Link href="" className="
                    
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
                        
                        ">Register</Link>
                    </div>


  
  
                    <div className="w-full h-10 flex items-center py-10">
                      <div className="bg-white app-line text-center flex-auto rounded"></div>
                      <p className="text-white text-center px-2">OR</p>
                      <div className="bg-white app-line flex-auto rounded text-center"></div>
                    </div>



                    


                    
  
  
                  {/* <div className="flex content-center justify-center
                  flex-wrap cursor-pointer mb-12 ">
                      <Link href="" className="inline-block border-solid border border-white
                      
                      h-12
                      
                      text-white px-2 py-2 uppercase tracking-wider 
                      text-xs font-semibold rounded-lg shadow-md 
                      w-full
                     
                      mb-4
                      ">
                      Login with &nbsp;  
                      <i className="fa fa-facebook text-xl text-white m-0"></i>
                      ACEBOOK
                      </Link>
                      <Link href="" className="inline-block border-solid border border-white
                       text-white px-2 py-2 uppercase tracking-wider 
                      text-xs font-semibold rounded-lg shadow-md 
                      w-full
                      
                      h-12
                      
                      
                      ">
                        Login with &nbsp;  
                      <i className="fa fa-google text-xl text-white m-0"></i>
                      OOGLE
                      </Link>
                  </div> */}
  
                
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
                        ">
                          <img src={google} className="rounded-full shadow-md w-8 h-8 -ml-4 p-1"alt="asdasd"/>
                        <button 
                        className="ml-3"
                        onClick={renderProps.onClick}>
                          Sign in with Google</button>
                        </div>
                    )}
                      />


                    <FacebookLogin
                      appId="2244730898916165"
                      autoLoad
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
                        ">
                          <img src={fb} className="rounded-full shadow-md w-8 h-8"alt="asdasd"/>
                        <button 
                        className="ml-3"
                        onClick={renderProps.onClick}>
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
                      onClick={this.handleMenuC}>
                      <Link href="" className="text-center">
                        <i className="fa fa-close text-md text-black"></i>
                      </Link>
          </div>
        </div>
      </div>
      )
  }
}


export default HomeMenu