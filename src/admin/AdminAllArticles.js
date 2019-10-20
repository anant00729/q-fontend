import React, {
  Component
} from 'react'


import TopBar from './common/TopBar';
import AdminNavSide from './common/AdminNavSide';
import BreadCrum from './common/BreadCrum';
import app_img from '../app_img.jpg';

import { Link } from 'react-router-dom'

class AdminAllArticles extends Component {
  render() {
    return (
      <div>
      <TopBar/>
      <div class="flex flex-col md:flex-row bg-gray-900">
        <AdminNavSide/>
        
        <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
        <BreadCrum
        name={'Articles'}
        />
        <div className="w-2/3 mx-auto">
        <div className="bg-white shadow-md rounded my-6">
          <table className="text-left w-full border-collapse"> {/*Border collapse doesn't work on this site yet but it's available in newer tailwind versions */}
            <thead>
              <tr>
                <th className="py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b ">Image</th>
                <th className="py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b ">Article Name</th>
                <th className="py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b ">Author</th>
                <th className="py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b ">isActive</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-200">
              <td className="py-4 px-6 border-b ">
              <div className="w-8 h-8">
                      <img src={app_img} className="rounded-full shadow-md"alt="asdasd"/>
                </div>
              </td>
                <td className="py-4 px-6 border-b ">New York</td>
                <td className="py-4 px-6 border-b ">
                  <Link to="/Admin" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</Link>
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</Link>
                </td>
              </tr>
              <tr className="hover:bg-gray-200">
                <td className="py-4 px-6 border-b ">
              <div className="w-8 h-8">
                      <img src={app_img} className="rounded-full shadow-md"alt="asdasd"/>
                </div>
              </td>
                <td className="py-4 px-6 border-b ">Paris</td>
                <td className="py-4 px-6 border-b ">
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</Link>
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</Link>
                </td>
              </tr>
              <tr className="hover:bg-gray-200">
                <td className="py-4 px-6 border-b ">
              <div className="w-8 h-8">
                      <img src={app_img} className="rounded-full shadow-md"alt="asdasd"/>
                </div>
              </td>
                <td className="py-4 px-6 border-b ">London</td>
                <td className="py-4 px-6 border-b ">
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</Link>
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</Link>
                </td>
              </tr>
              <tr className="hover:bg-gray-200">
                <td className="py-4 px-6 border-b ">
                <div className="w-8 h-8">
                        <img src={app_img} className="rounded-full shadow-md"alt="asdasd"/>
                  </div>
              </td>
                <td className="py-4 px-6 border-b ">Oslo</td>
                <td className="py-4 px-6 border-b ">
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</Link>
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</Link>
                </td>
              </tr>
              <tr className="hover:bg-gray-200">
                <td className="py-4 px-6 border-b ">
              <div className="w-8 h-8">
                      <img src={app_img} className="rounded-full shadow-md"alt="asdasd"/>
                </div>
              </td>
                <td className="py-4 px-6 border-b ">Mexico City</td>
                <td className="py-4 px-6 border-b ">
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</Link>
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
          </div>
      </div>
      </div>          

      
    );
  }
}


export default AdminAllArticles