import React, {
  Component
} from 'react'


import TopBar from './common/TopBar';
import AdminNavSide from './common/AdminNavSide';
import BreadCrum from './common/BreadCrum';
import AddArticles from './AddArticles';
import AdminLogin from './AdminLogin';
import AllAtricles from './AllAtricles';
import AddAuthors from './AddAuthors';

import app_img from '../app_img.jpg';
import classnames from 'classnames'
import NotFound from '../base/NotFound'
import PrivateRoute from '../base/PrivateRoute';
import AdminPrivate from '../base/AdminPrivate';

import {
    R_AddArticles, R_Admin, R_AllArticles, R_AllAuthors, R_AddAuthor
} from '../actions/constants';

import { Route , Switch } from 'react-router-dom'




import { Link } from 'react-router-dom'
import AllAuthors from './AllAuthors';

class AdminMain extends Component {


  state = {
    isVisible : true
  }

  onError = () => {
    this.setState({isVisible:false})
  }

  render() {
    let isVisible = this.state
    switch(this.props.location.pathname){
      case R_AddArticles:
      case R_AllArticles:
      case R_AllAuthors: 
      case R_AddAuthor: 
          isVisible = true
          break;
      case R_Admin:
      default:
          isVisible = false
          break;
    }

    return (
      <div>

        {isVisible ? <TopBar/> : null}
        <div className={classnames('', {'flex flex-col md:flex-row bg-gray-900' : isVisible})}>
        {isVisible ? <AdminNavSide/> : null}
        <div 
        className={classnames('', {'main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5' : isVisible})}>
        {isVisible ? <BreadCrum name={'Articles'}/> : null}
          <div className={classnames('', {'w-full px-6 mt-32' : isVisible})}>
            <Switch>
              <Route exact path={R_Admin} component={AdminLogin} />
              <AdminPrivate exact path={R_AddArticles} component={AddArticles}/>
              <AdminPrivate exact path={R_AllArticles} component={AllAtricles}/>
              <AdminPrivate exact path={R_AllAuthors} component={AllAuthors}/>
              <AdminPrivate exact path={R_AddAuthor} component={AddAuthors}/>
              <Route 
                render={(props) =>  <NotFound {...props} data='admin' onError={this.onError}/>}/>
            </Switch>
          </div>
          
        </div>
        </div>
      </div>          

      
    );
  }
}


export default AdminMain