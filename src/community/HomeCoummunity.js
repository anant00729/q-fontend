import React, { Component } from 'react'

import clap from '../images/clap.png';

export default class HomeCoummunity extends Component {
  render() {
    return (
      <div className="flex justify-center flex-col items-center">
         <div class="cursor-pointer max-w-md rounded shadow-lg mr-4 bg-white inline-block align-top my-2 flex flex-col">
             
           <div class="py-4 text-blue-900">
             
             <div class="text-xl mb-2 px-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, quam?</div>
             <div className="bg-gray-200 app-line-height w-full">
             </div>


           </div>


           <div className="flex max-w-5xl w-full self-center home-menu-login-text mb-6 bg-indigo-500 justify-center" >
                  <div className="w-1/3 text-black flex-1 text-center bg-green-500">
                    <div className="h-10 w-full flex justify-center px-8 items-center">
                      <img src={clap} alt="sadas" className="h-6 w-6"/>
                      <p className="dark-blue-text text-xs">Clap</p>
                    </div>
                  </div>
                  <div className="w-1/3 text-black flex-1 text-center bg-green-500">
                    <div className="h-10 w-full flex justify-center px-8 items-center">
                      <img src={clap} alt="sadas" className="h-6 w-6"/>
                      <p className="dark-blue-text text-xs">Answer</p>
                    </div>
                  </div>

                  <div className="w-1/3 text-black flex-1 text-center bg-green-500">
                    <div className="h-10 w-full flex justify-center px-8 items-center">
                      <img src={clap} alt="sadas" className="h-6 w-6"/>
                      <p className="dark-blue-text text-xs">Save</p>
                    </div>
                  </div>
                  
              </div>
        </div>


       



      



      </div>
    )
  }
}
