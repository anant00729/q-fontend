import React,{ Component, Fragment } from 'react';
import Home from './home/Home';
import {withRouter} from 'react-router-dom';
import { R_HOME ,R_Admin  } from './actions/constants';
import {  Route  } from 'react-router-dom'
import './App.css';
import AdminHome from './admin/AdminHome';

class RHome extends Component {
  render(){
    const { pathname } = this.props.location
    const isP = !pathname.includes(R_Admin)
    return (
      <Fragment>
        { isP ? 
        <Route path={R_HOME} component={Home} />
        :
        <Route path={R_Admin} component={AdminHome} />
      }
      </Fragment>
      
    );
  }
}

export default withRouter(RHome);
