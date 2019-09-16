import React, {Component} from 'react'
import { Link } from 'react-router-dom'



export default class BottomBar extends Component {

  constructor(props){
    super(props)

    this.state = {isToggleOn: true, menuC : props.handleMenuC};

    // This binding is necessary to make `this` work in the callback
    this.handleMenuC = this.handleMenuC.bind(this)
    
  }

  handleMenuC(){
    const { menuC } = this.state
    menuC()
  }

  render() {
    return  <div>
      
      <section className="fixed flex flex-col md:hidden h-12 bottom-0 w-full">



      <div class="text-green-700 max-w-full leading-relaxed bg-gray-700 app-line-height"></div>


          <div className="bg-white h-12 w-full bottom-0 flex shadow-2xl">
                <div className="w-1/3 h-full flex content-center flex-wrap cursor-pointer">
                    <Link href="" className="text-center mx-auto">
                      <i className="fa fa-home text-2xl text-gray-700"></i>
                      <div className="text-gray-700 -mt-1 text-xs -mt-1">Home</div>
                    </Link>
                </div>
                <div className="w-1/3 h-full flex content-center flex-wrap cursor-pointer">
                    <Link href="" className="text-center mx-auto">
                      <i className="fa fa-search text-xl text-gray-700"></i>
                      <div className="text-gray-700 text-xs">Search</div>
                    </Link>
                </div>
                <div className="rounded-full w-20 h-14 flex justify-center app-logo-center shadow-2xl"
                  onClick={this.handleMenuC}>
                  <Link href="" className="text-center mx-0 my-auto">
                    <i className="fa fa-bars text-xl text-gray-700 m-0"></i>
                  </Link>
                </div>
                <div className="w-1/3 h-full flex content-center flex-wrap cursor-pointer">
                    <Link href="" className="text-center mx-auto">
                      <i className="fa fa-comment text-xl text-gray-700"></i>
                      <div className="text-gray-700 text-xs">Community</div>
                    </Link>
                </div>
                <div className="w-1/3 h-full flex content-center flex-wrap cursor-pointer">
                    <Link href="" className="text-center mx-auto">
                      <i className="fa fa-user text-2xl text-gray-700"></i>
                      <div className="text-gray-700 -mt-1 text-xs">Profile</div>
                    </Link>
                </div>
          </div>

          

          </section>

          

      </div>
    
  }
}