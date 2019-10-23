import React, { Component } from 'react'
import { getAllArticles } from '../actions/articleActions'
import { ADMIN, R_AllAuthors } from '../actions/constants'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllAuthors } from '../actions/authorActions';


class AllAuthors extends Component {
  
  
  

  constructor(props){
    super(props)
    this.state = {
      all_authors : []
    }


  }


  componentDidMount = () => {
    window.scrollTo(0, 0)
    this.props.getAllAuthors();
  }


  static getDerivedStateFromProps(nextProps, prevState){
    let { all_authors } = nextProps.authors

    console.log('nextProps.authors :', nextProps.authors);
   // this.refs.vidRef.play();

    if(all_authors!==prevState.all_authors){
      
      return { all_authors};
     }
     else return null;
 }



  render() {

    let { all_authors } = this.state
    
    let _td = []

    if(all_authors){
      _td = all_authors.map((_a) => {
        let val = _a.isActive === 1 ? 'Yes' : 'No'
        return (
          <tr className="hover:bg-gray-100" key={_a.id}>
                <td className="py-4 px-6 border-b ">
                  <img src={_a.picture} className="rounded-full shadow-md w-12 h-12"alt="asdasd"/>
                </td>
                  <td className="py-4 px-6 border-b ">{_a.name}</td>
                  <td className="py-4 px-6 border-b ">
                    {_a.email}
                  </td>
                  <td className="py-4 px-6 border-b ">
                    <button
                    className="cursor-pointer appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >{val}</button>
                  </td>
          </tr>
        )
      })
    }
    

    return (
      <div className="bg-white shadow-md rounded my-6">
          <table className="text-left w-full border-collapse"> {/*Border collapse doesn't work on this site yet but it's available in newer tailwind versions */}
            <thead>
              <tr>
                <th className="w-20 py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b ">Image</th>
                <th className="py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b ">Name</th>
                <th className="w-56 py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b ">Email</th>
                <th className="w-20 py-4 px-6 bg-gray-300 font-bold uppercase text-sm text-grey-dark border-b ">ISActive</th>
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


AllAuthors.propTypes = {
  authors : PropTypes.object.isRequired,
}


const mapStateToProps = (state) => ({
  authors : state.authors,
  
})


export default connect(mapStateToProps, { getAllAuthors })(AllAuthors)
