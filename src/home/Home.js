import React, {
  Component
} from 'react'

import vid from '../vid.mov';
import { Link } from 'react-router-dom'

import classnames from 'classnames'

 class Home extends Component {


  constructor(props){
    super(props)

    this.state = {
      times : 4,
      img1 : "https://instagram.fbom16-1.fna.fbcdn.net/vp/b92edc51234d678dec853272a2f7690f/5DFF3F3F/t51.2885-15/sh0.08/e35/s640x640/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%20640w,https://instagram.fbom16-1.fna.fbcdn.net/vp/8b64c0c62d2decb495ec8c9e317d85e7/5E195E3F/t51.2885-15/sh0.08/e35/s750x750/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%20750w,https://instagram.fbom16-1.fna.fbcdn.net/vp/ffdc3ec05564d2fc38e14178053cda26/5E013DDA/t51.2885-15/e35/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%201080w"
    }
  }

  componentDidMount(){
    this.refs.vidRef.play();
  }

  render() {
    const { times, img1 } = this.state


  
    const data = []
    const data2 = []

    for(let i = 0 ; i < times * 3 ; i++){
      data.push(

        <div className={classnames('md:max-w-xs bg-gray-100 flex m-auto justify-between rounded overflow-hidden shadow-md' ,{'mb-4' : i !== (times * 3) - 1})}>
        <div className="p-2">
          <p className="text-gray-700 text-xl">Hello</p>
          <p className="text-gray-700 text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus fugit rerum commodi, dolore
          </p>
        </div>

        <i className="fa fa-bookmark text-xl text-gray-700 pr-3 pb-3 self-end align-bottom"></i>

        <img src={img1} 
        className="w-32 object-cover h-full" 
        alt="asdjasd"/>
        
      </div>
      )
    }

    for(let i = 0 ; i < times * 3 ; i++){

      let _d = ""
      _d = "Lorem ipsum dolor, sit amet "

      data2.push(

      <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 my-2 px-2">
        <div class="rounded shadow-lg bg-white inline-block align-top">
            <img class="w-full rounded" src={img1} alt="Sunset in the mountains"/>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 whitespace-pre-wrap">Hello</div>
            <p class="text-gray-700 text-base whitespace-pre-wrap">
              {_d}
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


    const moreTopics = []

    for(let i = 0 ; i <  10; i++){


      let _d = ""


      _d = "Lorem ipsum dolor, sit amet "

      // if(i % 2 === 0 ){
      //   _d = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolorem ipsam perferendis praesentium, recusandae consectetur sequi vero corporis sint consequuntur possimus iure sapiente, deleniti laboriosam ut. Dolore eum dolor aspernatur!"
      // }else{
        
      // }

      moreTopics.push(
        <span class="inline-block bg-gray-400 rounded-full text-sm font-semibold text-gray-700 my-2 px-4 py-2 mx-2">#photography</span>          
      )
    }


    const horl = []

    for(let i = 0 ; i <  10; i++){


      let _d = ""


      _d = "Lorem ipsum dolor, sit amet "

      // if(i % 2 === 0 ){
      //   _d = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis dolorem ipsam perferendis praesentium, recusandae consectetur sequi vero corporis sint consequuntur possimus iure sapiente, deleniti laboriosam ut. Dolore eum dolor aspernatur!"
      // }else{
        
      // }

      horl.push(

        <div class="max-w-xs rounded shadow-lg mx-2 bg-white inline-block align-top my-2">
             <img class="w-full rounded" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
           <div class="px-6 py-4">
             <div class="font-bold text-xl mb-2 whitespace-pre-wrap">The Coldest Sunset</div>
             <p class="text-gray-700 text-base whitespace-pre-wrap">
               {_d}
             </p>
           </div>
           <div class="px-6 py-4">
             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
             <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
         </div>
          
        </div>

        // <img src={"https://tailwindcss.com/img/card-left.jpg"}  alt="0" className="mr-2 w-64 h-64"/>    

      //   <div class="w-full h-64 rounded shadow-lg mr-16">
      
      // </div>

        
      )
    }

    

    return ( <div>
                <div className="app-main-bg w-full pt-12 relative">
                  <video ref="vidRef" loop src={vid} type="video/mp4" 
                  className="my-0 mx-auto w-64"/>
                  {/* <div className="absolute bg-green-500 bottom-0 app-trans">
                    <p className=>ajskdsahk</p>
                  </div> */}
                </div>
                <div className="md:px-12 px-3">
                  
                  <div class="flex m-4 ">
                    <div className="hidden xl:text-sm xl:block xl:w-1/6 xl:px-6 pt-4">
                      <h5 class="lg:tracking-wide lg:text-2xl">On this page</h5>
                        <ul>
                          <li className="mb-3 lg:mb-1">
                            <a className="px-2 -mx-2 py-1 transition-fast relative block hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium" href="/docs/installation">
                              <span className="rounded absolute inset-0 bg-teal-200 opacity-0"></span>
                              <span className="relative">Home</span>
                            </a>
                          </li>
                          <li className="mb-3 lg:mb-1">
                            <a className="px-2 -mx-2 py-1 transition-fast relative block hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium" href="/docs/installation">
                              <span className="rounded absolute inset-0 bg-teal-200 opacity-0"></span>
                              <span className="relative">Search</span>
                            </a>
                          </li>
  
                          <li className="mb-3 lg:mb-1">
                            <a className="px-2 -mx-2 py-1 transition-fast relative block hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium" href="/docs/installation">
                              <span className="rounded absolute inset-0 bg-teal-200 opacity-0"></span>
                              <span className="relative">Community</span>
                            </a>
                          </li>
  
                          <li className="mb-3 lg:mb-1">
                            <a className="px-2 -mx-2 py-1 transition-fast relative block hover:translate-r-2px hover:text-gray-900 text-gray-600 font-medium" href="/docs/installation">
                              <span className="rounded absolute inset-0 bg-teal-200 opacity-0"></span>
                              <span className="relative">Profile</span>
                            </a>
                          </li>
  
                        </ul>
                    </div>
                    <div class="mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-5/6">
                    <p className="md:max-w-full max-w-md w-full flex m-auto justify-between py-2 px-2 text-2xl">Top Topics</p>
                    <div className="flex flex-wrap md:hidden">
                      {data}
                    </div>
  
                    <div className="md:flex md:flex-wrap hidden justify-start">
                      {data2}
                    </div>

                    <section>
                    <div className="mt-8 text-blue-900 mx-auto">
                      <div className="rounded shadow-md bg-gray-100 w-full min-w-ful py-4 px-2">    
                        <h1 className=" text-xl">We invest in Emotions which are meant to be outpoured</h1>
                        <p className=" mt-4">Never Miss Our Story</p>
                        <p className="text-sm ">Sign up for Quonquer weekly digest and get the best mental health advice from us.</p>
                        <div className="text-center shadow">
                          <input className="bg-white focus:outline-none focus:shadow-outline py-2 px-4 
                            mt-2 block rounded w-full appearance-none leading-normal" type="email"/>
                          </div>
                          <Link href="" class="
                          
                          mt-4
                          inline-block bg-indigo-500 
                            text-white px-2 py-2 uppercase tracking-wider 
                            text-xs font-semibold rounded-lg shadow-md 
                            max-w-lg
                            ">Sign Up
                            </Link>  
                      </div>
                    </div>
                  </section>

                    </div>
                    
                  </div>




                  


                  <p className="md:max-w-full max-w-md w-full flex m-auto justify-between py-2 px-2 text-2xl">Topics For You</p>
                    <div className="pl-4 pr-2">
                    <div className="rounded shadow-md bg-gray-100 w-full min-w-full hor-list-nobar overflow-x-auto whitespace-no-wrap py-3 px-2">    
                      {moreTopics}
                    </div>
                  </div>
                  
  

                  <p className="md:max-w-full max-w-md w-full flex m-auto justify-between py-2 px-2 text-2xl">More Topics</p>
                  <div className="w-full min-w-full mb-24 hor-list pb-8 overflow-x-auto whitespace-no-wrap px-2">    
                    {horl}
                  </div>
                </div>
          </div>
    )
  }
}


export default Home