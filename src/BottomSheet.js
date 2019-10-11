import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './BottomSheet.css';
import users from './images/users.png';

//import { Link } from 'react-router-dom'
import classnames from 'classnames'

import srch from './images/back.png'


export default class BottomSheet extends Component {
  constructor(props){
    super(props)

    this.state = {
      toggle : true,
      isOpen: false,
      value : 'Public'
    }

  }


  onToggle = (val) => {
    let { toggle } = this.state
    toggle = val
    this.setState({toggle})
  }


  onDropDownClick = (val) => {
    let { isOpen } = this.state
    this.setState({
      isOpen : val
    })
  }
  onValChange = (val, value) => {
    let { isOpen } = this.state
    this.setState({
      isOpen : val,
      value
    })
  }

  _onToggleDisplay = () => {
    

    let { toggle, isOpen } = this.state

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

    let { toggle, isOpen, value } = this.state


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
                    
             
    
                <div className="ml-4 flex flex-1 content-center " >
                  <div className="leading-tight text-gray-700 self-center text-2xl">{"New Question or Story" } 
                  </div>
                </div>
              </section>


              <div className="flex mt-10 bg-gray-200 shadow-md" >

              


              
                <div className={classnames('w-10 h-10 self-center flex-1 flex'
                    ,{ 'dark-blue text-white' : toggle })}
                onClick={() => this.onToggle(true)}
                >
                  <div className="self-center mx-auto text-xl font-bold">Ask a question</div>
                </div>

                <div className="bg-black partition-profile h-10 border border-2">

                </div>

                <div className={classnames('w-10 h-10 self-center flex-1 flex'
                    ,{ 'dark-blue text-white' : !toggle })}
                onClick={() => this.onToggle(false)}
                >
                  <div className="self-center mx-auto text-xl font-bold">Share a story</div>
                </div>




                
                
               


        {/* <div className="w-10 h-10 mr-4">
          <img src={wa} className="rounded-full shadow-md"alt="asdasd"/>
        </div> */}


        
        </div>

       <div className="text-gray-700 p-4 very-small">* While posting double-check spelling and grammar.</div>



       <li className="w-full flex">
                
                <div className="flex-1 mx-4">
                <textarea className="bg-white 
                
                 border dark-blue-border 
                px-2
                rounded-lg focus:outline-none focus:shadow-outline 
                py-2 block rounded  w-full 
                appearance-none leading-normal" 
                              cols="40" rows="5"
                              type="text"/>
                </div>
  
        </li>
      <div>


            




      <div className="relative mt-4">
        <div className="absolute ml-4">
        <button 
        onClick={() => this.onDropDownClick(true)}
        className="relative z-10 block h-10 bg-white rounded-full overflow-hidden border dark-blue-border focus:outline-none focus:border-white">
          <li className="w-full flex">
              <div className="flex-1 mx-4">
              <div className="bg-white
              rounded-lg focus:outline-none focus:shadow-outline 
              block rounded  w-24 
              text-centers
              appearance-none leading-normal text-lg font-bold" 
              >{value}</div>
              </div>
    
          </li>         
        </button>
        </div>
  

      {
        isOpen ? 

        <div class="relative ml-4">
        <button class="relative z-10 block h-10 bg-white rounded-full overflow-hidden border border-white focus:outline-none focus:border-white"
        onClick={() => this.onDropDownClick(false)}
        >
          <li className="w-full flex">
              <div className="flex-1 mx-4">
              <div className="bg-white
              rounded-lg focus:outline-none focus:shadow-outline 
              block rounded  w-24 
              text-centers
              appearance-none leading-normal text-lg font-bold" 
              >{value}</div>
              </div>
    
          </li>         
      </button>
      <button tabindex="-1" class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default">
      
      </button>
      <div class="absolute left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
          <Link href="#" class="block px-4 py-2 text-gray-800  hover:text-white link-drop" onClick={() => this.onValChange(false, 'Public')}>Public</Link>
          <Link href="#" class="block px-4 py-2 text-gray-800  hover:text-white link-drop" onClick={() => this.onValChange(false, 'Anonymous')}>Anonymous</Link>
          
        </div>
      </div> : <div/>
      }
  
     

      </div> 


      
      
      <section className="fixed flex flex-col h-12 bottom-0 w-full">



      <div class="text-green-700 max-w-full leading-relaxed bg-gray-700"></div>
          <div className="bg-white h-12 w-full  flex shadow-2xl relative">
            <Link href="" class="inline-block dark-blue
                                absolute
                                right-0
                                my-auto
                                self-center
                                mr-4
                                text-white px-2 py-2 uppercase tracking-wider 
                                text-xs font-semibold rounded-lg shadow-md 
                                ">POST
            </Link>          
          </div>
          </section>
      </div>



      
        



              
        </div>
      </div>
    )
  }
}
