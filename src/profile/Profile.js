import React, { Component } from 'react'

import clap from '../images/clap.png';
import ans from '../images/ans_icon.png';
import btnsave from '../images/btn_save_holo.png';
import Header from '../base/Header'
import Footer from '../base/Footer'
import BottomBar from '../base/BottomBar'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import srch from '../images/back.png'
import { throwStatement } from '@babel/types';


export default class Profile extends Component {


  constructor(props){
    super(props)

    this.state = {
      toggle : true
    }

  }


  onToggle = (val) => {
    let { toggle } = this.state
    toggle = val
    this.setState({toggle})
  }

  _onToggleDisplay = () => {
    

    let { toggle } = this.state

    if(toggle){
      return(
        <div className="rounded w-full min-w-full hor-list-nobar overflow-x-auto whitespace-no-wrap px-2 mt-4">    
            <span class="cursor-pointer inline-block dark-blue text-white rounded-full text-sm font-semibold my-2 px-4 py-2 mx-2">Claps</span>    
            <span class="cursor-pointer inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 my-2 px-4 py-2 mx-2">Bookmarks</span>    
            <span class="cursor-pointer inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 my-2 px-4 py-2 mx-2">Comment</span>    
            <span class="cursor-pointer inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 my-2 px-4 py-2 mx-2">Private Q&A</span>    
        </div>
      )
    }else {
      return(
        <div className="rounded w-full min-w-full hor-list-nobar overflow-x-auto whitespace-no-wrap px-2 mt-4">    
            <span class="cursor-pointer inline-block dark-blue text-white rounded-full text-sm font-semibold my-2 px-4 py-2 mx-2">Claps</span>    
            {/* <span class="cursor-pointer inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 my-2 px-4 py-2 mx-2">Claps</span>     */}
            <span class="cursor-pointer inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 my-2 px-4 py-2 mx-2">Comment</span>    
            <span class="cursor-pointer inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 my-2 px-4 py-2 mx-2">Save</span>    
            <span class="cursor-pointer inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 my-2 px-4 py-2 mx-2">Questions</span>    
            <span class="cursor-pointer inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 my-2 px-4 py-2 mx-2">Answered</span>    
        </div>
      )
    }
    
  }


  render() {

    let { toggle } = this.state


    const _d = this._onToggleDisplay()

    return (
      <div className="">
        <div className="flex justify-center flex-col pt-8 mb-24">
              <section className="flex my-2 flex-1">
              <Link 
                    to="/"
                    className="flex mx-4"
                    >
                    <img src={srch} alt="back" className="w-6 h-6
                    
                    -ml-1
                    self-center
                    "
                    />
                    </Link>
                    
                <img src="https://miro.medium.com/fit/c/96/96/1*BH3UOA8mTllBREiHhNBtaQ.jpeg" 
                className="w-16 h-16 rounded-full"
                alt="12e21"/>
    
                <div className="ml-4 flex flex-1 content-center " >
                  <div className="leading-tight text-gray-700 self-center">{"Anant S Awasthy"} 
                  <br/>
                  <span className="text-sm">{"anant@binarynumbers.io"}</span>
                  </div>
                </div>
              </section>


              <div className="flex mt-10 bg-gray-200 shadow-md" >

              


              
                <div className={classnames('w-10 h-10 self-center flex-1 flex'
                    ,{ 'dark-blue text-white' : toggle })}
                onClick={() => this.onToggle(true)}
                >
                  <div className="self-center mx-auto text-xl font-bold">Blog</div>
                </div>

                <div className="bg-black partition-profile h-10 border border-2">

                </div>

                <div className={classnames('w-10 h-10 self-center flex-1 flex'
                    ,{ 'dark-blue text-white' : !toggle })}
                onClick={() => this.onToggle(false)}
                >
                  <div className="self-center mx-auto text-xl font-bold">Community</div>
                </div>




                
                
               


        {/* <div className="w-10 h-10 mr-4">
          <img src={wa} className="rounded-full shadow-md"alt="asdasd"/>
        </div> */}


        
        </div>

        {_d}


        <div className="mt-3 mx-2">

        <div 
          className={classnames('cursor-pointer md:max-w-xs bg-gray-100 flex m-auto justify-between rounded overflow-hidden shadow-md my-2 rounded-lg')}>
          <img src="https://instagram.fbom16-1.fna.fbcdn.net/vp/b92edc51234d678dec853272a2f7690f/5DFF3F3F/t51.2885-15/sh0.08/e35/s640x640/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%20640w,https://instagram.fbom16-1.fna.fbcdn.net/vp/8b64c0c62d2decb495ec8c9e317d85e7/5E195E3F/t51.2885-15/sh0.08/e35/s750x750/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%20750w,https://instagram.fbom16-1.fna.fbcdn.net/vp/ffdc3ec05564d2fc38e14178053cda26/5E013DDA/t51.2885-15/e35/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%201080w" 
          className="w-32 object-cover h-full" 
          alt="asdjasd"/>
        <div className="p-2">
          <p className="text-gray-700 text-xl">Hello All</p>
          <p className="text-gray-700 text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus fugit rerum commodi, dolore
          </p>
        </div>
        
        
      </div>


      <div 
          className={classnames('cursor-pointer md:max-w-xs bg-gray-100 flex m-auto justify-between rounded overflow-hidden shadow-md my-2 rounded-lg')}>
          <img src="https://instagram.fbom16-1.fna.fbcdn.net/vp/b92edc51234d678dec853272a2f7690f/5DFF3F3F/t51.2885-15/sh0.08/e35/s640x640/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%20640w,https://instagram.fbom16-1.fna.fbcdn.net/vp/8b64c0c62d2decb495ec8c9e317d85e7/5E195E3F/t51.2885-15/sh0.08/e35/s750x750/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%20750w,https://instagram.fbom16-1.fna.fbcdn.net/vp/ffdc3ec05564d2fc38e14178053cda26/5E013DDA/t51.2885-15/e35/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%201080w" 
          className="w-32 object-cover h-full" 
          alt="asdjasd"/>
        <div className="p-2">
          <p className="text-gray-700 text-xl">Hello All</p>
          <p className="text-gray-700 text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus fugit rerum commodi, dolore
          </p>
        </div>
       
        
      </div>

      <div 
          className={classnames('cursor-pointer md:max-w-xs bg-gray-100 flex m-auto justify-between rounded overflow-hidden shadow-md my-2 rounded-lg')}>
          <img src="https://instagram.fbom16-1.fna.fbcdn.net/vp/b92edc51234d678dec853272a2f7690f/5DFF3F3F/t51.2885-15/sh0.08/e35/s640x640/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%20640w,https://instagram.fbom16-1.fna.fbcdn.net/vp/8b64c0c62d2decb495ec8c9e317d85e7/5E195E3F/t51.2885-15/sh0.08/e35/s750x750/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%20750w,https://instagram.fbom16-1.fna.fbcdn.net/vp/ffdc3ec05564d2fc38e14178053cda26/5E013DDA/t51.2885-15/e35/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%201080w" 
          className="w-32 object-cover h-full" 
          alt="asdjasd"/>
        <div className="p-2">
          <p className="text-gray-700 text-xl">Hello All</p>
          <p className="text-gray-700 text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus fugit rerum commodi, dolore
          </p>
        </div>
       
        
      </div>

        </div>

        



              
        </div>
      </div>
    )
  }
}
