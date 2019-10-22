import React, {
    Component
  } from 'react'
  
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'



import app_img from '../app_img.jpg';
import fb from '../images/facebook.png';
import insta from '../images/instagram.png';
import tw from '../images/twitter.png';
import li from '../images/linkedin.png';
import srch from '../images/back.png'
import {withRouter} from 'react-router-dom'
import { initLogout } from '../actions/authActions'
import { NOR } from '../actions/constants';

  
  class HomeMenuNew extends Component {

    logout = (e) => {
      this.props.initLogout(NOR);
    }

    render() {
      let { isAuthenticated } = this.props.auth
      let _login_option = this.checkAndShowLoginOpts(isAuthenticated)
      return (
        
        <div>
          <div className="fixed overflow-hidden w-full h-screen flex flex-col overflow-y-auto bg-white">
                  <div className="flex-1 flex flex-col mt-4">
                    
                    <div className="flex-col content-start justify-start mx-4">
                      
                    <div className="flex w-full flex-wrap content-center">

                    <Link 
                    to="/"
                    >
                    <img src={srch} alt="back" className="w-6 h-6
                    mr-3
                    mt-3
                    -ml-1
                    
                    "
                    
                    />
                    </Link>
                    
                      
                      <div className="text-center shadow rounded-lg flex flex-1 h-12" >
                          <input className="bg-white focus:outline-none focus:shadow-outline py-1 px-4 
                       block w-full appearance-none leading-normal rounded  text-lg" type="email"
                      placeholder="Search Quonquer"
  
                      />
                    </div>
                  </div>

  
  
                    
  
                    <ul className="search-text m-auto self-center text-center mt-8">
                      <li className="pt-2 text-lg">Bookmarks</li>
                      <li className="pt-2 text-lg">Subscribe</li>
                      <li className="pt-2 text-lg">About Us</li> 
                      <li className="pt-2 text-lg">Dark Theme</li>  
                      
                    </ul>
  
  
  
                  <div className="flex flex-col">
  
                  <Link href="" className="
                  
                  inline-block border-solid border border-white
                        mx-auto
                        mt-12
                        text-white px-8 py-3 uppercase tracking-wider 
                        text-xs font-semibold rounded-lg shadow-md 
                        w-full
                        hover:bg-white hover:text-black
                        dark-blue
                        text-center
                        search-btn-text
                        max-w-sm
                        ">Join our community </Link>
  
  
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
                        max-w-sm
                        ">Private Q&A</Link>
  
  
  
  
                  </div>
  
               



  
  
    
                      
                  
                </div>


                <div className="flex px-8 max-w-2xl self-center justify-center mt-10" >
                    <div className="w-10 h-10 mr-4">
                      <img src={insta} className="rounded-full shadow-md"alt="asdasd"/>
                    </div>
                    <div className="w-10 h-10 mr-4">
                      <img src={fb} className="rounded-full shadow-md"alt="asdasd"/>
                    </div>
                    <div className="w-10 h-10 mr-4">
                      <img src={tw} className="rounded-full shadow-md"alt="asdasd"/>
                    </div>
                    <div className="w-10 h-10 mr-4">
                      <img src={li} className="rounded-full shadow-md"alt="asdasd"/>
                    </div>
        
              </div>



              {_login_option}


              <div className="flex justify-center mt-10">
                {/* <div className="w-8 h-8 mr-2">
                  <img src={app_img} className="rounded-full shadow-md"alt="asdasd"/>
                </div> */}

                <p className="text-center text-sm text-white relative app-font text-gray-700">QUONQUER
                <span className="copy-right-text absolute top-0">©</span>
                &nbsp;&nbsp;&nbsp;&nbsp;INC.</p>      
              </div>
    
                    {/* <div className="hover:text-blue-400 text-white content-center px-10 py-4 text-xl cursor-pointer">Home</div>
                    <div className="hover:text-blue-400 text-white content-center px-10 py-4 text-xl cursor-pointer">Search</div>
                    <div className="hover:text-blue-400 text-white content-center px-10 py-4 text-xl cursor-pointer">Community</div>
                    <div className="hover:text-blue-400 text-white content-center px-10 py-4 text-xl cursor-pointer">Profile</div> */}
    
    
                </div>
                
          </div>
  
  
  
  
       


         
        </div>
      )
    }


    

    checkAndShowLoginOpts(isAuthenticated){
      if(isAuthenticated){

        return  (
          <div className="flex  max-w-5xl w-full self-center justify-center home-menu-login-text mt-10" >
            <div className="text-black mr-4">
              <p className="ml-10 cursor-pointer"
              onClick={this.logout}
              >Logout</p>
            </div>
        </div>)
       
      }else {
        return (
          <div className="flex  max-w-5xl w-full self-center justify-center home-menu-login-text mt-10" >
            <div className="text-black mr-4">
              <p className="ml-10 cursor-pointer">Login</p>
            </div>
            <div className="text-black mr-4 ">
              <p className="ml-4 cursor-pointer">Sign Up</p>
            </div>
            <div className="text-black  mr-4">
              <p className="ml-4 mr-10 cursor-pointer">New user?  Register</p>
            </div>
        </div>)
      
      }
    }
  }


const mapStateToProps = state => ({
    auth : state.auth
})

HomeMenuNew.propTypes = {
    auth : PropTypes.object.isRequired
}


export default connect(mapStateToProps,{initLogout})(withRouter(HomeMenuNew))