import React, {
  Component
} from 'react'


import TopBar from './common/TopBar';
import AdminNavSide from './common/AdminNavSide';
import BreadCrum from './common/BreadCrum';

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
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">City</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">New York</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <Link to="/Admin" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</Link>
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</Link>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">Paris</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</Link>
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</Link>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">London</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</Link>
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</Link>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">Oslo</td>
                <td className="py-4 px-6 border-b border-grey-light">
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">Edit</Link>
                  <Link to="/AdminAllArticles" className="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">View</Link>
                </td>
              </tr>
              <tr className="hover:bg-grey-lighter">
                <td className="py-4 px-6 border-b border-grey-light">Mexico City</td>
                <td className="py-4 px-6 border-b border-grey-light">
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