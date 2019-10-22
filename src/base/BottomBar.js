import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { R_HOME, R_Search, R_HomeCoummunity , R_HomeMenuNew , R_Profile} from '../actions/constants';

export default class BottomBar extends Component {

  constructor(props){
    super(props)

    this.state = {isToggleOn: true, searchClick : props.searchClick };
    this.handleMenuSearch = this.handleMenuSearch.bind(this)
  }

  

  handleMenuSearch(){
    this.props.history.push(R_Search)
  }

  //md:hidden
  render() {
    return  <div>
      
      <section className="fixed flex flex-col h-12 bottom-0 w-full">



      <div class="text-green-700 max-w-full leading-relaxed bg-gray-700 app-line-height"></div>


          <div className="bg-white h-12 w-full bottom-0 flex shadow-2xl">
                <div className="w-1/3 h-full flex content-center flex-wrap cursor-pointer">
                    <Link 
                    to={R_HOME}
                    className="text-center w-full">
                      <i className="fa fa-home text-2xl dark-blue-text"></i>
                      <div className="dark-blue-text -mt-1 text-xs -mt-1">Home</div>
                    </Link>
                </div>
                <div className="w-1/3 h-full flex content-center flex-wrap cursor-pointer">
                    <Link 
                     to={R_Search}
                    
                    className="text-center w-full">
                      <i className="fa fa-search text-xl dark-blue-text"></i>
                      <div className="dark-blue-text text-xs">Search</div>
                    </Link>
                </div>
                <div className="rounded-full w-20 h-14 flex justify-center app-logo-center shadow-2xl"

                  >
                  <Link 
                  to={R_HomeMenuNew}
                  className="text-center mx-0 my-auto">

                    <i className="fa fa-bars text-xl dark-blue-text m-0"></i>
                  </Link>
                </div>
                <div className="w-1/3 h-full flex content-center flex-wrap cursor-pointer">
                    <Link className="text-center w-full"
                    to={R_HomeCoummunity}
                    >
                      <i className="fa fa-comment text-xl dark-blue-text"></i>
                      <div className="dark-blue-text text-xs">Community</div>
                    </Link>
                </div>
                <div className="w-1/3 h-full flex content-center flex-wrap cursor-pointer">
                    <Link to={R_Profile} className="text-center w-full">
                      <i className="fa fa-user text-2xl dark-blue-text"></i>
                      <div className="dark-blue-text -mt-1 text-xs">Profile</div>
                    </Link>
                </div>
          </div>

          

          </section>

          

      </div>
    
  }
}