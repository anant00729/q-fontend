import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import {
  R_AddArticles, R_AllArticles, R_AllAuthors ,R_AddAuthor
} from '../../actions/constants';


export default class AdminNavSide extends Component {
  render() {
    return (
      <div>
        <div className="bg-gray-900 shadow-lg h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
          <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
              <li className="mr-3 flex-1">
                <Link to={R_AllArticles} className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                  <i className="fa fa-tasks pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Articles</span>
                </Link>
              </li>
              <li className="mr-3 flex-1">
                <Link to={R_AddArticles} className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                  <i className="fa fa-envelope pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Add Articles</span>
                </Link>
              </li>
              <li className="mr-3 flex-1">
                <Link to={R_AddAuthor} className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                  <i className="fa fa-envelope pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Create Authors</span>
                </Link>
              </li>
              <li className="mr-3 flex-1">
                <Link to={R_AllAuthors} className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                  <i className="fa fa-envelope pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Authors</span>
                </Link>
              </li>
              {/* <li className="mr-3 flex-1">
                <Link to="" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600">
                  <i className="fa fa-envelope pr-0 md:pr-3 text-blue-600" /><span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">Analytics</span>
                </Link>
              </li>
              <li className="mr-3 flex-1">
                <Link to="" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                  <i className="fa fa-envelope pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Payments</span>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
        
      </div>
    )
  }
}
