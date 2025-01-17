import React, {
  Component
} from 'react'

import classnames from 'classnames'
import { Link } from 'react-router-dom'
import share from '../images/share.png'




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

  _getTopStories(_a_l,onClick){
    let ts_s = []
    let ts_l = []


    if(_a_l){

      _a_l.forEach(_a =>{

        let i = _a_l.indexOf(_a)
  
  
        ts_s.push(<div 
          onClick={() => onClick(_a.id)}
          className={classnames('relative w-full cursor-pointer  bg-gray-100 flex m-auto justify-between rounded overflow-hidden shadow-md article-card-home-mobile' ,{'mb-4' : i !== (12) - 1})}>
          <div className="p-2 flex-1">
            <p className="text-gray-700 text-xl">{_a.ArticleName}</p>
            <p className="text-gray-700 text-xs">{_a.SubTitle}
            </p>
          </div>
          <i className="fa fa-share-alt text-xl dark-blue-text pr-6 pb-3 self-end align-bottom"></i>
          <i className="fa fa-bookmark text-xl dark-blue-text pr-3 pb-3 self-end align-bottom"></i>
          <img src={_a.MainImg} 
          className="w-32 object-cover relative" 
          alt="asdjasd"/>
        </div>)
  

        let tags = ''
        if(_a.SearchTags === ''){
          tags =  JSON.parse(_a.SearchTags)
  
          tags = tags.map(_t=>{
            return  (<span class="inline-block mt-2 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {_t}</span>)
          })
        }
  
        
  
        ts_l.push(
                
          <div 
          onClick={() => onClick(_a.id)}
          className="cursor-pointer sm:w-1/2 md:w-1/3 lg:w-1/4 my-2 px-2">
            <div class="rounded shadow-lg bg-white inline-block align-top">
                <img class="w-full rounded" src={_a.MainImg}  alt="Sunset in the mountains"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 whitespace-pre-wrap">{_a.ArticleName}</div>
                <p class="text-gray-700 text-base whitespace-pre-wrap">
                  {_a.SubTitle}
                </p>
              </div>
              <div class="px-6 py-4">
                {tags}
              </div>
          
            </div>
          </div>
  
          )
  
      })

    }

    

    return [ts_s, ts_l]

  }


  _getIntaPosts(){
    const moreTopics = []
    for(let i = 0 ; i <  3; i++){


      let _d = ''

      if(i === 3-1){
        _d = ( <div className="absolute top-0 w-full h-full insta-overlay text-center rounded shadow-md">
                <p className="text-white m-auto h-full flex align-middle justify-center text-center">
                  <span className="align-middle justify-center text-center self-center">+300</span>
                </p>
              </div>);

      }

      
      moreTopics.push(
        <div className="inline-block text-sm font-semibold text-gray-700 my-2 py-2 w-1/3 pr-3">

          <div className="relative cursor-pointer shadow-md bg-white
          w-full rounded">
            <img class="
            rounded
            shadow-md" src="https://instagram.fbom16-1.fna.fbcdn.net/vp/b92edc51234d678dec853272a2f7690f/5DFF3F3F/t51.2885-15/sh0.08/e35/s640x640/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%20640w,https://instagram.fbom16-1.fna.fbcdn.net/vp/8b64c0c62d2decb495ec8c9e317d85e7/5E195E3F/t51.2885-15/sh0.08/e35/s750x750/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%20750w,https://instagram.fbom16-1.fna.fbcdn.net/vp/ffdc3ec05564d2fc38e14178053cda26/5E013DDA/t51.2885-15/e35/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%201080w" alt="Sunset in the mountains"/>


           {_d}

            

          </div>

          
        </div>

        
      )
    }
    return moreTopics 
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
