import React, {
  Component
} from 'react'
import { Link, withRouter } from 'react-router-dom'
import app_img from '../app_img.jpg';
import classnames from 'classnames'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'




class Header extends Component {


  constructor(props){
    super(props)

    this.state = {isToggleOn: true, isUp: props.isUp};
    
    
  }

 


  static getDerivedStateFromProps(props, state) {
    if (props.isUp !== state.isUp) {
      return {
        isUp: props.isUp,
      };
    }
    return null
  }

  render() {
    const { isUp } = this.state
    let { isAuthenticated } = this.props.auth
    let _login_option = this.checkAndShowLoginOpts(isAuthenticated)
    
    return ( 
    
    <div 
    className={classnames('asdasd')}
    >
      <section className="fixed bg-white h-12 w-full top-0 flex shadow-md justify-between px-4">
              <div className="w-1/3 h-full flex content-center flex-wrap cursor-pointer">
                  <Link href="" className="text-center flex items-center">

                    <div className="w-8 h-8">
                      <img src={app_img} className="rounded-full shadow-md"alt="asdasd"/>
                    </div>
                    <p className="content-center text-black pl-2 app-font-top">QUONQUER</p>
                  </Link>
              </div>
              {_login_option}
            
          </section>

      </div>
    )
  }

  checkAndShowLoginOpts(isAuthenticated){
    if(isAuthenticated){

      return  (
        <div className="w-1/3 h-full flex content-center justify-end
        flex-wrap cursor-pointer"
        
        >
          <Link to="/BottomSheet" class="inline-block dark-blue
          text-white px-2 py-2 uppercase tracking-wider 
          text-xs font-semibold rounded-lg shadow-md 
           ">Post
          </Link>

          <i className="fa fa-bell text-2xl dark-blue-text self-center pl-3"></i>
        </div>)
     
    }else {
      return (
        <div className="w-1/3 h-full flex content-center justify-end
        flex-wrap cursor-pointer"
        
        >
          <Link to="/HomeMenu" class="inline-block dark-blue
          text-white px-2 py-2 uppercase tracking-wider 
          text-xs font-semibold rounded-lg shadow-md 
           ">Sign In
          </Link>
        </div>)
    
    }
  }
}


Header.propTypes = {
  loginUser : PropTypes.func.isRequired,
  auth : PropTypes.object.isRequired,
  errors : PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth : state.auth,
  errors : state.errors
})



export default connect(mapStateToProps)(Header)
