import React, {
  Component
} from 'react'


import TopBar from './common/TopBar';
import AdminNavSide from './common/AdminNavSide';
import BreadCrum from './common/BreadCrum';
import AddArticles from './AddArticles';
import Profile from '../profile/Profile';
import app_img from '../app_img.jpg';

import {
   R_HOME, R_AdminMain , R_AddArticles, R_Profile
} from '../actions/constants';

import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'




import { Link } from 'react-router-dom'

class AdminMain extends Component {
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
            <h1>This is admin page</h1>
            {/* <Switch>
                <Route exact path={R_AddArticles} component={AddArticles}/>
                <Route exact path={R_Profile} component={Profile}/>
            </Switch> */}
          </div>
        </div>
      </div>
      </div>          

      
    );
  }
}


export default AdminMain