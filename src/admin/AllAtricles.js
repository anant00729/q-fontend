import React, { Component } from 'react'
import { getAllArticles } from '../actions/articleActions'
import { ADMIN } from '../actions/constants'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


class AllAtricles extends Component {


  state = {
    all_articles : []
  }


  componentDidMount = () => {
    window.scrollTo(0, 0)
    this.props.getAllArticles(ADMIN);
  }


  static getDerivedStateFromProps(nextProps, prevState){
    let { all_articles } = nextProps.article
   // this.refs.vidRef.play();

    if(all_articles!==prevState.all_articles){
      return { all_articles};
     }
     else return null;
 }



  render() {

    let { all_articles } = this.state
    console.log('all_articles :', all_articles);
    let _td = []
    
    _td = all_articles.map((_a) => {
      console.log('_a.isActive :', _a.isActive);
      let val = _a.isActive === 1 ? 'Yes' : 'No'
      return (
        <tr className="hover:bg-gray-100" key={_a.id}>
              <td className="py-4 px-6 border-b ">
                <img src={_a.MainImg} className="rounded-full shadow-md w-12 h-12"alt="asdasd"/>
              </td>
                <td className="py-4 px-6 border-b">{_a.ArticleName}</td>
                <td className="py-4 px-6 border-b">
                  {_a.ArticleAuthorName}
                </td>
                <td className="py-4 px-6 border-b ">
                  <button
                  className="cursor-pointer appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >{val}</button>
                </td>
        </tr>
      )
    })

    return (
      <div className="bg-white shadow-md rounded my-6">
          <table className="text-left w-full border-collapse"> 
            <thead>
              <tr>
                <th className="w-20 py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b">Image</th>
                <th className="py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b">ArticleName</th>
                <th className="w-56 py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b">Author</th>
                <th className="w-20 py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b">ISActive</th>
              </tr>
            </thead>
            <tbody>
              {_td}
            </tbody>
          </table>  
        </div>
    )
  }
}


AllAtricles.propTypes = {
  article : PropTypes.object.isRequired,
}


const mapStateToProps = (state) => ({
  article : state.article,
  
})


export default connect(mapStateToProps, { getAllArticles })(AllAtricles)
