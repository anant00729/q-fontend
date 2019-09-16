import React,{ Component } from 'react';
import { Link } from 'react-router-dom'
import BottomBar from './base/BottomBar'
import Header from './base/Header'
import HomeMenu from './menu/HomeMenu'
import Home from './home/Home'

import { HashRouter as Router, Route , Switch } from 'react-router-dom'

import './App.css';




class App extends Component {


  constructor(props){
    super(props)

    this.state = {
      isMenuOpen : false,
      
    }

    this.handleMenuC = this.handleMenuC.bind(this)
    //this.playV = this.playV.bind(this)
  }


  handleMenuC(){
    
    let { isMenuOpen } = this.state
    this.setState({
      isMenuOpen : !isMenuOpen
    })
  }



 


  render() {  

    const { isMenuOpen} = this.state

    return (
      <Router>
        <div>ajsdhjsfgd</div>

        {/* <div className="w-full relative h-screen w-12 absolute">
           
            



            <Home/>
          


            <Header handleMenuC={this.handleMenuC}/>

            


            <BottomBar handleMenuC={this.handleMenuC}/>  

            {
              isMenuOpen ? 
              <HomeMenu handleMenuC={this.handleMenuC}/> : 
              <div></div>
            }
            
            
          
          
        </div> */}

        
        
      
      </Router>

    )
  }
}


export default App;
