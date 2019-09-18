import React, {
  Component
} from 'react'

import classnames from 'classnames'
import { Link } from 'react-router-dom'





class HomeVM {


  _getSideMenuItem(){
    const data = ["Home" , "Search", "Community", "Profile"]

    return data.map((d)=>{
      return (
      <li className="mb-3 lg:mb-1">
      <a className="px-2 -mx-2 py-1 transition-fast relative block hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium" href="/docs/installation">
        <span className="rounded absolute inset-0 bg-teal-200 opacity-0"></span>
        <span className="relative">{d}</span>
      </a>
    </li>)
    })

  }

  _getTopStories(times , img1, onClick){
    const ts_s = []
    const ts_l = []
    for(let i = 0 ; i < times ; i++){
      ts_s.push(

        <div 
        onClick={() => onClick(i)}
        className={classnames('cursor-pointer md:max-w-xs bg-gray-100 flex m-auto justify-between rounded overflow-hidden shadow-md' ,{'mb-4' : i !== (times) - 1})}>
        <div className="p-2">
          <p className="text-gray-700 text-xl">Hello All</p>
          <p className="text-gray-700 text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus fugit rerum commodi, dolore
          </p>
        </div>

        <i className="fa fa-bookmark text-xl text-gray-700 pr-3 pb-3 self-end align-bottom"></i>

        <img src={img1} 
        className="w-32 object-cover h-full" 
        alt="asdjasd"/>
        
      </div>
      )

      ts_l.push(
        
        <div 
        onClick={() => onClick(i)}
        className="cursor-pointer sm:w-1/2 md:w-1/3 lg:w-1/4 my-2 px-2">
          <div class="rounded shadow-lg bg-white inline-block align-top">
              <img class="w-full rounded" src={img1} alt="Sunset in the mountains"/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 whitespace-pre-wrap">Hello</div>
              <p class="text-gray-700 text-base whitespace-pre-wrap">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus fugit rerum commodi, dolore
              </p>
            </div>
            <div class="px-6 py-4">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
         
          </div>
        </div>
  
        )
    }

    return [ts_s, ts_l]

  }

  _getInterestedTopics(){
    const moreTopics = []
    for(let i = 0 ; i <  10; i++){
      moreTopics.push(
        <span class="cursor-pointer inline-block bg-gray-400 rounded-full text-sm font-semibold text-gray-700 my-2 px-4 py-2 mx-2">#photography</span>          
      )
    }
    return moreTopics 
  }


  _getMoreTopics(j = 10){
    const horl = []

    for(let i = 0 ; i < j ; i++){
      horl.push(

        <div class="cursor-pointer max-w-xs rounded shadow-lg mr-4 bg-white inline-block align-top my-2">
             <img class="w-full rounded" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
           <div class="px-6 py-4">
             <div class="font-bold text-xl mb-2 whitespace-pre-wrap">The Coldest Sunset</div>
             <p class="text-gray-700 text-base whitespace-pre-wrap">
              Lorem ipsum dolor, sit amet 
             </p>
           </div>
           <div class="px-6 py-4">
             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
         </div>
          
        </div>
      )
    }
    return horl
  }    
}


export default HomeVM
