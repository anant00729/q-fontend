import React,{ Component } from 'react';
import { Link } from 'react-router-dom'
import BottomBar from './base/BottomBar'
import Footer from './base/Footer'

import Header from './base/Header'
import HomeMenu from './menu/HomeMenu'
import Home from './home/Home'
import ADet from './a_det/ADet';
import Search from './search/Search';
import HomeMenuNew from './menu/HomeMenuNew';
import HomeCoummunity from './community/HomeCoummunity';

import { HashRouter as Router, Route , Switch } from 'react-router-dom'

import './App.css';





class App extends Component {


  constructor(props){
    super(props)

    this.state = {
      isMenuOpen : false,
      isSearchOpen : true,
      position: 0,
      isUp : 0
    }

      this.handleMenuC = this.handleMenuC.bind(this)
      this.handleScroll = this.handleScroll.bind(this)
    
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


  handleSearchC(){
    let { isSearchOpen } = this.state

    this.setState({
      isSearchOpen : !isSearchOpen
    })
  }


  

// should start at 0



 


  render() {  

    const { isMenuOpen, isUp ,isSearchOpen } = this.state

    return (
      <Router>
        

        <div className="w-full relative h-screen w-12 absolute">


            <div className="pt-12 mb-24">
              <Route exact path="/" component={Home}/>
              <Route exact path="/ADet" component={ADet}/>
              <Route exact path="/Search" component={Search}/>
              <Route exact path="/HomeMenuNew" component={HomeMenuNew}/>
              <Route exact path="/HomeCoummunity" component={HomeCoummunity}/>

              

              
            </div>


            <Header handleMenuC={this.handleMenuC} isUp={isUp}/>
            
            
            <BottomBar handleMenuC={this.handleMenuC}/>  

            {
              isMenuOpen ? 
              <HomeMenu handleMenuC={this.handleMenuC}/> : 
              <div></div>
            }



            {/* {
              isSearchOpen ? 
              <Search handleMenuC={this.handleSearchC}/> : <div></div>
              
            } */}
            
            
            <Footer/>  


            
              
          
          
        </div>

        
        
      
      </Router>
      // "build": "npm run build:css && react-scripts build",

    )
  }
}


export default App;
