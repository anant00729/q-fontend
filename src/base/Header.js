import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'
import app_img from '../app_img.jpg';
export default class Header extends Component {

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


    
    return ( <div >
      <section className="fixed bg-white h-12 w-full top-0 flex shadow-md justify-between px-4">
              <div className="w-1/3 h-full flex content-center flex-wrap cursor-pointer">
                  <Link href="" className="text-center flex items-center">

                    <div className="w-8 h-8">
                      <img src={app_img} className="rounded-full shadow-md"alt="asdasd"/>
                    </div>
                    <p className="content-center text-gray-700 pl-2">Quonquer</p>
                  </Link>
              </div>
              <div className="w-1/3 h-full flex content-center justify-end
              flex-wrap cursor-pointer"
              onClick={this.handleMenuC}
              >
                <Link href="" class="inline-block bg-indigo-500 
                text-white px-2 py-2 uppercase tracking-wider 
                text-xs font-semibold rounded-lg shadow-md 
                 ">Join Now
                </Link>
              </div>
          </section>

      </div>
    )
  }
}