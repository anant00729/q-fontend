import React,{ Component } from 'react';
import Footer from './base/Footer'


import HomeMenu from './menu/HomeMenu'
import Home from './home/Home'
import ADet from './a_det/ADet';
import Search from './search/Search';
import HomeMenuNew from './menu/HomeMenuNew';
import PrivateRoute from './base/PrivateRoute';
import Profile from './profile/Profile';

import HomeCoummunity from './community/HomeCoummunity';
import BottomSheet from './BottomSheet';


import { HashRouter as Router, Route , Switch } from 'react-router-dom'
import store from './store'
import { Provider } from 'react-redux'
import setAuthToken from './utils/setAuthToken'

import './App.css';
import { setCurrentUser , } from './actions/authActions';


// check for token 
if(localStorage.Token){
  //set the auth token header auth 
  setAuthToken(localStorage.Token)
  
  // set user and isAuthenticated
  const res_d = {}
  res_d.token = localStorage.Token
  store.dispatch(setCurrentUser(res_d))
  // check for the expired token
  //const currentTime = Date.now / 1000 
  // if(decode.exp < currentTime){
  //   // Logout the user 
  //   store.dispatch(logoutUser())
  //   // clear current profile
  //   store.dispatch(clearCurrentProfile())
  //   // Redirect to login
  //   window.location.href = '/login'
  // }
}




class App extends Component {


  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // }


  




  constructor(props){
    super(props)

    this.state = {
      isMenuOpen : false,
      isSearchOpen : false,
      position: 0,
      isUp : 0,
      location: '/'
    }

      this.handleMenuC = this.handleMenuC.bind(this)
      this.handleScroll = this.handleScroll.bind(this)
      this.searchClick = this.searchClick.bind(this)
      this.getLocation = this.getLocation.bind(this)
      this._showFooter = this._showFooter.bind(this)
      
      
      
    
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let { position, isUp} = this.state


    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > position){
        // downscroll code
        // 2
        isUp = 2
    } else {
        // upscroll code
        // 1
        isUp = 1
    }
    position = st <= 0 ? 0 : st;
    
    this.setState({ position, isUp });
  }


  handleMenuC(){
    let { isMenuOpen } = this.state

    this.setState({
      isMenuOpen : !isMenuOpen
    })
  }


  getLocation(data){
    this.setState({
      location : data
    })
  }


  searchClick(){
    let { isSearchOpen } = this.state

    this.setState({
      isSearchOpen : !isSearchOpen
    })
  }

  _showFooter(){
    let {location} = this.state
    switch(location){
      case '/Search':
      case '/HomeMenu':
      return (
        <div></div>
      )
      default:
        return (<Footer/>)
    }
    

  }


 


  render() {  

    // const { match, location, history } = this.props

    const { isMenuOpen, isUp ,isSearchOpen } = this.state


    const path = this.props.routes

    console.log('path :', path);

    return (
      <Provider store={store}>
        <Router>
          
  
          <div className="w-full relative h-screen w-12 absolute">
  
  
            
  
  
              <div>
                <Route exact path="/HomeMenu" component={HomeMenu}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/ADet" component={ADet}/>
                <Route exact path="/Search" component={Search}/>
                
                <Switch>
                  <PrivateRoute exact path="/HomeMenuNew" component={HomeMenuNew}/>
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/Profile" component={Profile}/>
                </Switch>
                <Route exact path="/HomeCoummunity" component={HomeCoummunity}/>
                <Route exact path="/BottomSheet" component={BottomSheet}/>
              </div>
  
              
                
            
            
          </div>
  
          
          
        
        </Router>
      </Provider>
      // "build": "npm run build:css && react-scripts build",

    )
  }
}




export default App;
