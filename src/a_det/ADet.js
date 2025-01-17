import React, {
  Component
} from 'react'

import HomeVM from '../home/HomeVM';
import fb from '../images/facebook.png';
import insta from '../images/instagram.png';
import tw from '../images/twitter.png';
import li from '../images/linkedin.png';
import wa from '../images/whatsapp.png';
import clap from '../images/clap.png';
import pvt_m from '../images/pvt_m.png';
import users from '../images/users.png';
import search from '../images/search.png';
import { connect } from 'react-redux'
import { FIRST_PARA, PARA, INLINE_IMG, BLOCK_IMG,  QUOTE } from '../actions/constants'
import PropTypes from 'prop-types'
import { getSingleArticle } from '../actions/articleActions'


import det_sigin_up from '../images/a-det-sigin-up.png';
import { Link } from 'react-router-dom'


class ADet extends Component {

  constructor(props){
    super(props)
    const  ArticleId  = localStorage.Article_id

    console.log('ArticleId :', ArticleId);
    this.state = {
      mHVM : new HomeVM(),
      ArticleId,
      single_article : {}
    }

    
    
    
  }


  static getDerivedStateFromProps(nextProps, prevState){
    let { single_article } = nextProps.article
    if(single_article!==prevState.single_article){
      return { single_article};
     }
     else return null;
  }


  componentDidMount(){
    window.scrollTo(0, 0)
    const {ArticleId} = this.state
    this.props.getSingleArticle(ArticleId)
  }

  


  render() {

    let {single_article}  = this.state
    let _s = single_article

    if(!_s){
      _s = {}
    }

    console.log('single_article :', single_article);

    let _temp = []

    if(single_article){
      if(Object.keys(single_article).length !== 0){
  
        _temp = _s.ArticleTemplate.map((_at) => {
          switch(_at.type){
            case  FIRST_PARA :
            return  (
              <p className="mt-2 text-md text-gray-900">
                  <span className="text-5xl">{_at.value[0]}</span>  
                  {_at.value}
                </p>
            )   
    
            case  PARA :
            return  (
              <p className="mt-2 text-md text-gray-900">
                {_at.value}
              </p>
            )   
    
            case  QUOTE :
            return  (
              <div className="rounded shadow-md relative my-2">
              <p className="mt-2 text-lg p-4 text-gray-900 italic app-font">
                {_at.value}
              </p>
              <p className="absolute bottom-0 right-0 pr-1 text-sm">Click to tweet</p>
            </div>
            )   
    
    
            case BLOCK_IMG : 
            return (
              <img class="w-full max-w-2xl object-cover mt-1" src={_at.value[0].picturePath} alt="Sunset in the mountains"/>
            )
    
            case INLINE_IMG : 
            return (
              <img class="w-full max-w-2xl object-cover mt-1" src={_at.value[0].picturePath} alt="Sunset in the mountains"/>
            )
          
    
            default: return (<div> </div>)
          }
        })
  
      }
    }

    

    


    const { mHVM } = this.state
    const m_t = mHVM._getMoreTopics(3)

    return(
        <div className="flex justify-center flex-col">
          <div className="w-full flex justify-center">
            <div className="w-full mx-8 md:w-4/5 lg:w-4/5 flex flex-col max-w-2xl mt-4">
              <h1 className="text-gray-700 text-3xl mt-16">{_s.ArticleName}</h1>
              <h1 className="text-gray-700 text-xl">{_s.SubTitle}</h1>
    
    
              <section className="flex my-2 flex-wrap content-center">
                <img src={_s.picture}
                className="w-12 h-12 rounded-full"
                alt="12e21"/>
    
                <div className="ml-2 flex flex-wrap content-center" >
                  <div className="leading-tight text-gray-700">{_s.ArticleAuthorName} 
                  <br/>
                  <span className="text-sm">{`${_s.PublishedOn} · ${_s.ReadTime}`}</span>
                  </div>
                </div>
              </section>
    
            <img class="w-full max-w-2xl object-cover mt-1" src={_s.MainImg} alt="Sunset in the mountains"/>
  
  
            <div className="flex mt-6 max-w-2xl justify-start mb-10" >
              <div className="w-10 h-10 mr-4">
                <img src={insta} className="rounded-full shadow-md"alt="asdasd"/>
              </div>
              <div className="w-10 h-10 mr-4">
                <img src={fb} className="rounded-full shadow-md"alt="asdasd"/>
              </div>
              <div className="w-10 h-10 mr-4">
                <img src={tw} className="rounded-full shadow-md"alt="asdasd"/>
              </div>
              <div className="w-10 h-10 mr-4">
                <img src={li} className="rounded-full shadow-md"alt="asdasd"/>
              </div>
  
              <div className="w-10 h-10 mr-4">
                <img src={wa} className="rounded-full shadow-md"alt="asdasd"/>
              </div>
          </div>
  


          {_temp}
  
            <section className="flex justify-center">
              <div className="mt-8 text-blue-900 mx-auto">
                  <img src={det_sigin_up} alt="asdasd" className="rounded shadow-md"/>
              </div>
            </section>

            <div className="flex -mx-4">
            <div className="flex h-20 w-full w-2/3">
              <div className="h-20 w-24 flex justify-center flex-col px-8">
                <img src={clap} alt="sadas" className="h-6 w-6"/>
                <p className="dark-blue-text text-xs">Clap</p>
              </div>
              <div className="h-20 w-20 flex justify-center flex-col">
                <img src={pvt_m} alt="sadas" className="h-6 w-6 self-center"/>
                <p className="text-center dark-blue-text text-xs">Private Q&A</p>
              </div>
            </div>
  
            <div className="flex h-20 w-full w-2/3 justify-end px-8">
              <i className="fa fa-share-alt text-xl dark-blue-text pr-6 self-center align-bottom"></i>
              <i className="fa fa-bookmark text-xl dark-blue-text pr-3 self-center align-bottom"></i>
            </div>
          </div>
          <Link href="" class="
                              m-auto
                              dark-blue
                              mt-4
                              inline-block bg-indigo-500 
                              text-white px-2 py-2 uppercase tracking-wider 
                              text-xs font-semibold rounded-lg shadow-md 
                              w-32
                              text-center">Add Comment
                              </Link>  
  
          <div>
            <p className="md:max-w-full max-w-md w-full flex justify-between py-2 text-2xl">Comment</p>
            <div className="h-1 rounded dark-blue"></div>
  
            <ul className="w-full">
              <li className="w-full flex mt-2">
                <div className="">
                  <img src={users} alt="asd" className="h-auto w-10 mt-1  rounded-b-sm object-cover"/>
                </div>
  
                <div className="flex-1 ml-2">
                <textarea className="bg-white 
                border dark-blue-border rounded-lg
                focus:outline-none focus:shadow-outline py-2 px-4 
                              mt-2 block rounded w-full appearance-none leading-normal" 
                              cols="40" rows="5"
                              type="text"/>
  
                <div className="flex mt-3 max-w-2xl justify-start" >
                    <div className="w-8 h-8 mr-4 rounded-full shadow-md">
                      <img src={search} className="p-2"alt="asdasd"/>
                    </div>
                    <div className="w-8 h-8 mr-4">
                      <img src={fb} className="rounded-full shadow-md"alt="asdasd"/>
                    </div>
                    
                </div>      
  
  
                <input className="bg-white 
                mt-4
                border dark-blue-border rounded-lg
                focus:outline-none focus:shadow-outline py-2 px-4 
                              block rounded w-full appearance-none leading-normal" 
                              placeholder="Name"
                              type="text"/>
  
  
              <input className="bg-white 
                            mt-4
                            border dark-blue-border rounded-lg
                            focus:outline-none focus:shadow-outline py-2 px-4 
                                          block rounded w-full appearance-none leading-normal" 
                                          placeholder="Email address"
                                          type="email"/>
  
  
  
              <Link href="" class="inline-block dark-blue
                              mt-4
                              text-white px-2 py-2 uppercase tracking-wider 
                              text-xs font-semibold rounded-lg shadow-md 
                              ">POST
                              </Link>                                        
  
  
  
  
  
  
  
                </div>
                
  
                
  
              </li>
  
              <li className="w-full flex my-4">
                <div className="">
                  <img src={users} alt="asd" className="h-auto w-10 mt-1  rounded-b-sm object-cover"/>
                </div>
  
                <div className="flex-1 ml-2">
                <p>Abc Name</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eos labore voluptates, at culpa ullam in deleniti officia aut unde?</p>
  
  
                </div>
              </li>
  
              <li className="w-full flex my-4">
                <div className="">
                  <img src={users} alt="asd" className="h-auto w-10 mt-1  rounded-b-sm object-cover"/>
                </div>
  
                <div className="flex-1 ml-2">
                <p>Abc Name</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eos labore voluptates, at culpa ullam in deleniti officia aut unde?</p>
  
  
                </div>
              </li>
  
              <li className="w-full flex my-4">
                <div className="">
                  <img src={users} alt="asd" className="h-auto w-10 mt-1  rounded-b-sm object-cover"/>
                </div>
  
                <div className="flex-1 ml-2">
                <p>Abc Name</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eos labore voluptates, at culpa ullam in deleniti officia aut unde?</p>
  
  
                </div>
              </li>
  
              <li className="w-full flex my-4">
                <div className="">
                  <img src={users} alt="asd" className="h-auto w-10 mt-1  rounded-b-sm object-cover"/>
                </div>
  
                <div className="flex-1 ml-2">
                <p>Abc Name</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eos labore voluptates, at culpa ullam in deleniti officia aut unde?</p>
  
  
                </div>
              </li>
              </ul>
              </div>
            </div>
          </div>
          <Link href="" class="
                              m-auto
                              dark-blue
                              mt-4
                              inline-block bg-indigo-500 
                              text-white px-2 py-2 uppercase tracking-wider 
                              text-xs font-semibold rounded-lg shadow-md 
                              my-auto
                              w-32
                              text-center">Show More
                              </Link>  
          <div className="px-4">
            <p className="py-2 text-2xl self-center wrap text-center mt-4 " >Related Topics</p>
            <div className="mb-6 w-full min-w-full hor-list pb-8 overflow-x-auto whitespace-no-wrap md:self-center md:warp md:hor-list md:pb-8 md:mx-0 md:flex md:justify-center">    
              {m_t}
            </div>
          </div>
          {/* <p className="md:max-w-full max-w-md w-full flex justify-between py-2 text-2xl mr-20 ml-4">More Topics</p>
                <div className="w-full min-w-full hor-list pb-8 overflow-x-auto whitespace-no-wrap ml-4">    
                  {m_t}
            </div> */}
  
          {/* <div className="mx-auto md:px-12 px-4 md:px-0">
            
          </div> */}
        </div>
    )
  }
}

ADet.propTypes = {
  article : PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  article : state.article,
})

export default connect(mapStateToProps, { getSingleArticle })(ADet)



{/* <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2">
                <img class="sm:pr-2 pt-4 adet-por-img sm:h-64 object-contain" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
              </div>
              <div className="w-full sm:w-1/2">
                <img class="sm:pl-2 pt-4 adet-por-img sm:h-64 object-cover" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"/>
              </div>
              
            </div>
     */}