import React, {
  Component
} from 'react'

import HomeVM from '../home/HomeVM';

class ADet extends Component {

  constructor(props){
    super(props)

    this.state = {
      mHVM : new HomeVM()
    }

  }


  render() {
    const { mHVM } = this.state
    const m_t = mHVM._getMoreTopics(3)

    return(
      <div className="flex justify-center flex-col">
        <div className="w-full flex justify-center">
          <div className="w-full mx-8 md:w-4/5 lg:w-4/5 flex flex-col max-w-2xl mt-4">
            <h1 className="text-gray-700 text-3xl">Hello All</h1>
            <h1 className="text-gray-700 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
  
  
            <section className="flex my-2 flex-wrap content-center">
              <img src="https://miro.medium.com/fit/c/96/96/1*BH3UOA8mTllBREiHhNBtaQ.jpeg" 
              className="w-12 h-12 rounded-full"
              alt="12e21"/>
  
              <div className="ml-2 flex flex-wrap content-center" >
                <div className="leading-tight text-gray-700">{"Anant S Awasthy"} 
                <br/>
                <span className="text-sm">{"Sep 10 · 8 min read"}</span>
                </div>
              </div>
            </section>
  
          <img class="w-full max-w-2xl object-cover mt-1" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
  
  
          <p className="mt-2 text-md text-gray-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi omnis tenetur nisi consectetur ratione reprehenderit mollitia temporibus ducimus explicabo quibusdam doloremque et hic in rem, illo recusandae dicta dolor nesciunt!
          </p>
  
          <p className="mt-2 text-lg p-4 text-gray-900">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, molestias!"
          </p>
  
          <p className="mt-2 text-md text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laudantium quo obcaecati, repellat aliquid ratione unde amet sunt libero mollitia quas expedita beatae totam harum ipsam facere cumque accusantium repudiandae possimus voluptate? Debitis doloribus, ipsam, sit alias et maiores sequi ad eum commodi repellat dicta velit voluptates. Perspiciatis iste ipsum libero quasi ut omnis nesciunt! Dolores saepe esse vitae cupiditate aut, veritatis repellendus quis quos amet qui numquam ratione illo, suscipit eius ipsa ut accusantium fugit explicabo corrupti itaque cum excepturi. Officiis fuga suscipit alias odio quas vitae reiciendis libero esse consectetur id? Accusamus voluptatum suscipit ullam. Repellat, dolorem saepe!
          </p>
  
          <p className="mt-2 text-lg p-4 text-gray-900">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, molestias!"
          </p>
  
  
          <p className="mt-2 text-md text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laudantium quo obcaecati, repellat aliquid ratione unde amet sunt libero mollitia quas expedita beatae totam harum ipsam facere cumque accusantium repudiandae possimus voluptate? Debitis doloribus, ipsam, sit alias et maiores sequi ad eum commodi repellat dicta velit voluptates. Perspiciatis iste ipsum libero quasi ut omnis nesciunt! Dolores saepe esse vitae cupiditate aut, veritatis repellendus quis quos amet qui numquam ratione illo, suscipit eius ipsa ut accusantium fugit explicabo corrupti itaque cum excepturi. Officiis fuga suscipit alias odio quas vitae reiciendis libero esse consectetur id? Accusamus voluptatum suscipit ullam. Repellat, dolorem saepe!
          </p>
  
  
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2">
              <img class="sm:pr-2 pt-4 adet-por-img sm:h-64 object-contain" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
            </div>
            <div className="w-full sm:w-1/2">
              <img class="sm:pl-2 pt-4 adet-por-img sm:h-64 object-cover" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
            </div>
            
          </div>
  
  
          
  
  
          <p className="mt-2 text-md text-gray-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi omnis tenetur nisi consectetur ratione reprehenderit mollitia temporibus ducimus explicabo quibusdam doloremque et hic in rem, illo recusandae dicta dolor nesciunt!
          </p>
  
          <p className="mt-2 text-md text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laudantium quo obcaecati, repellat aliquid ratione unde amet sunt libero mollitia quas expedita beatae totam harum ipsam facere cumque accusantium repudiandae possimus voluptate? Debitis doloribus, ipsam, sit alias et maiores sequi ad eum commodi repellat dicta velit voluptates. Perspiciatis iste ipsum libero quasi ut omnis nesciunt! Dolores saepe esse vitae cupiditate aut, veritatis repellendus quis quos amet qui numquam ratione illo, suscipit eius ipsa ut accusantium fugit explicabo corrupti itaque cum excepturi. Officiis fuga suscipit alias odio quas vitae reiciendis libero esse consectetur id? Accusamus voluptatum suscipit ullam. Repellat, dolorem saepe!
          </p>
  
          <p className="mt-2 text-lg p-4 text-gray-900">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, molestias!"
          </p>
  
  
          <p className="mt-2 text-md text-gray-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laudantium quo obcaecati, repellat aliquid ratione unde amet sunt libero mollitia quas expedita beatae totam harum ipsam facere cumque accusantium repudiandae possimus voluptate? Debitis doloribus, ipsam, sit alias et maiores sequi ad eum commodi repellat dicta velit voluptates. Perspiciatis iste ipsum libero quasi ut omnis nesciunt! Dolores saepe esse vitae cupiditate aut, veritatis repellendus quis quos amet qui numquam ratione illo, suscipit eius ipsa ut accusantium fugit explicabo corrupti itaque cum excepturi. Officiis fuga suscipit alias odio quas vitae reiciendis libero esse consectetur id? Accusamus voluptatum suscipit ullam. Repellat, dolorem saepe!
          </p>
  
          </div>
  
          
  
  
        </div>


        <div className="px-4">
          <p className="md:max-w-full max-w-md w-full flex justify-between py-2 text-2xl">More Topics</p>
          <div className="w-full min-w-full hor-list pb-8 overflow-x-auto whitespace-no-wrap">    
            {m_t}
          </div>
        </div>


        {/* <p className="md:max-w-full max-w-md w-full flex justify-between py-2 text-2xl mr-20 ml-4">More Topics</p>
              <div className="w-full min-w-full hor-list pb-8 overflow-x-auto whitespace-no-wrap ml-4">    
                {m_t}
          </div> */}

        {/* <div className="mx-auto md:px-12 px-4 md:px-0">
          
        </div> */}
      </div>
    )
  }
}
export default ADet