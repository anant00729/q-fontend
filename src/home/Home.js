import React, {Component} from 'react'
import Header from '../base/Header'
import Footer from '../base/Footer'
import BottomBar from '../base/BottomBar'
import { Route , Switch } from 'react-router-dom'
import NotFound from '../base/NotFound';

import { R_ADet , R_Login, R_Search, R_HomeMenuNew, R_Profile, R_HomeCoummunity, R_CreatePost } from '../actions/constants';
import PrivateRoute from '../base/PrivateRoute';

import AllArticlesHome from './AllArticlesHome';
import Login from '../menu/Login';
import ADet from '../a_det/ADet';
import Search from '../search/Search';
import HomeMenuNew from '../menu/HomeMenuNew';
import Profile from '../profile/Profile';
import HomeCoummunity from '../community/HomeCoummunity';
import CreatePost from '../profile/CreatePost';


class Home extends Component {


  state = {
    isVisible : true
  }

  onError = () => {
    this.setState({isVisible:false})
  }
  
  render() {
    const { match } = this.props
    let isVisible = this.state

    switch(this.props.location.pathname){
      case R_Search:
      case R_Login:
      case R_HomeMenuNew:
      case R_Profile:
      case R_CreatePost:
          isVisible = false
          break;
      case '/':  
      case R_ADet:   
      case R_HomeCoummunity:   
          isVisible = true
          break
      default:
          isVisible = false
          break;
    }


    return ( <div className="w-full relative h-screen w-12 absolute">
              <Switch>
                <Route path={ match.url } exact component={AllArticlesHome} />
                <Route exact path={ R_Login } component={Login}/>
                <Route exact path={ R_ADet} component={ADet}/>
                <Route exact path={R_Search} component={Search}/>
                <Route exact path={R_HomeCoummunity} component={HomeCoummunity}/>

                <Route exact path={R_HomeMenuNew} component={HomeMenuNew}/>
                <PrivateRoute exact path={R_CreatePost} component={CreatePost}/>
                <PrivateRoute exact path={R_Profile} component={Profile}/>
                <Route 
                render={(props) =>  <NotFound {...props} data='web' onError={this.onError}/>} />
              </Switch>

              {isVisible ?  <Header/> : null}
              {isVisible ?  <BottomBar/> : null}
              {isVisible ?  <Footer/> : null}

          </div>
    )
  }
}




export default Home






{/* <Route exact path="/Admin" component={AdminHome}/>
                <Route exact path="/AdminAllArticles" component={AdminAllArticles}/>

                <Route exact path="/CreatePost" component={CreatePost}/>
                <Route exact path="/AddArticles" component={AddArticles}/> */}