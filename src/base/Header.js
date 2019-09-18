import React, {
  Component
} from 'react'
import { Link } from 'react-router-dom'
import app_img from '../app_img.jpg';
import classnames from 'classnames'

export default class Header extends Component {


  constructor(props){
    super(props)

    this.state = {isToggleOn: true, menuC : props.handleMenuC, isUp: props.isUp};
    this.handleMenuC = this.handleMenuC.bind(this)
    
  }

  handleMenuC(){
    const { menuC } = this.state
    menuC()
  }


  static getDerivedStateFromProps(props, state) {
    if (props.isUp !== state.isUp) {
      return {
        isUp: props.isUp,
      };
    }
    return null
  }

  render() {

    const { isUp } = this.state

    
    return ( 
    
    <div 
    className={classnames('asdasd' ,{'header-anim' : isUp !== 1})}
    >
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