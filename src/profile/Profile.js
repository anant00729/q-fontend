import React, { Component } from 'react'

import clap from '../images/clap.png';
import ans from '../images/ans_icon.png';
import btnsave from '../images/btn_save_holo.png';
import Header from '../base/Header'
import Footer from '../base/Footer'
import BottomBar from '../base/BottomBar'


export default class Profile extends Component {
  render() {


    return (
      <div className="">
        <div className="flex justify-center flex-col items-center pt-12 mb-24">
           <h1>asjdkashkdhh</h1>
  
        </div>
  
  
        <Header/>
  
        <BottomBar  searchClick={this.searchClick}/>  
      </div>
    )
  }
}
