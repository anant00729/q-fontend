import React, {
  Component
} from 'react'

import vid from '../vid.mov';

import classnames from 'classnames'

 class Home extends Component {


  constructor(props){
    super(props)

    this.state = {
      times : 3,
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

        <div className={classnames('max-w-md w-full bg-gray-100 flex m-auto justify-between rounded overflow-hidden shadow-md' ,{'mb-4' : i !== (times * 3) - 1})}>
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

      <div class="max-w-xs rounded shadow-lg mx-2 bg-white inline-block align-top my-2">
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
                  <p className="md:max-w-full max-w-md w-full flex m-auto justify-between py-2 px-2 text-2xl">Top Topics</p>
  
                  <div className="flex flex-wrap md:hidden">
                    {data}
                  </div>
  
                  <div className="md:flex md:flex-wrap hidden">
                    {data2}
                  </div>
  

                  <p className="md:max-w-full max-w-md w-full flex m-auto justify-between py-2 px-2 text-2xl">More Topics</p>
  
                
                  
                  
  
                  <div className="w-full min-w-full mb-24 hor-list pb-8 overflow-x-auto whitespace-no-wrap">    
                   {horl}
                </div>
                </div>
          </div>
    )
  }
}


export default Home