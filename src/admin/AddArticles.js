import React, { Component } from 'react'
import TopBar from './common/TopBar';
import AdminNavSide from './common/AdminNavSide';
import BreadCrum from './common/BreadCrum';
import FilePicker from './common/FilePicker';
import InputTextAdmin from './common/InputTextAdmin';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  FIRST_PARA,
  PARA,  
  INLINE_IMG,
  BLOCK_IMG,
  POINTER,
  QUOTE,
} from '../actions/constants';


import { required, length } from '../utils/validators';
import { generateBase64FromImage } from '../utils/image';
import { getArticleFutureIDAndAllActiveAuthors} from '../actions/articleActions';

import { link } from 'fs';



const POST_FORM = {
  
  image: {
    value: '',
    valid: false,
    touched: false,
    validators: [required]
  }
};



class AddArticles extends Component {



  state = {
    postForm: POST_FORM,
    formIsValid: false,
    imagePreview: null,
    imagePreviewList: null,
    ArticleName : '',
    ArticleAuthorName: '',
    PublishedOn: '',
    ReadTime: '',
    isActive: '',
    id: '',
    createdAt: '',
    updatedAt: '',
    SubTitle: '',
    MainImg: '',
    SearchTags: 'asdad',
    all_authors : [],
    next_article_id : -1,
    errors : {},
    ArticleTemplate: [
      {
        type: FIRST_PARA,
        value : 'asdaskdjh '
      },
      {
        type: BLOCK_IMG,
        value : 'asdaskdjh '
      },
      {
        type: PARA,
        value : 'asdaskdjh '
      },
      {
        type: INLINE_IMG,
        value : 'asdaskdjh '
      },


  ],
    TemplateTypes: [FIRST_PARA, PARA, INLINE_IMG, BLOCK_IMG, POINTER, QUOTE]
    };

  


  static getDerivedStateFromProps(nextProps, prevState){
    let { all_authors, next_article_id } = nextProps.article
    if(all_authors!==prevState.all_authors){
      return { all_authors, ArticleAuthorName : all_authors[0]};
    }
    if(next_article_id!==prevState.next_article_id){
      return { next_article_id};
    }
    else return null;
  }

  componentDidMount = () => {
    window.scrollTo(0, 0)
    this.props.getArticleFutureIDAndAllActiveAuthors()
  }    


  onMainImgClick = () => {
    const { SearchTags} = this.state
    console.log('SearchTags :', SearchTags);
  }


  postInputChangeHandler = async (input, value, files) => {
    if (files) {

      console.log('files[0] :', files);
      if(files[0]){
        let b64 = []
        try {
        
          for(let f of files){
            b64.push(await generateBase64FromImage(f)) 
          }


          this.setState({ imagePreviewList: b64 });
          
          
        } catch (error) {
          this.setState({ imagePreviewList: null });
        }
      }
    }
  
  };

  onChange = e => {
    console.log('[e.target.name] :', [e.target.name]);
    console.log('e.target.valeu :', e.target.value);
    this.setState({
        [e.target.name] : e.target.value
    })
  }


  onChangeATOtp = (e,i) => {
    let {ArticleTemplate} = this.state
    ArticleTemplate[i].type = e.target.value
    this.setState({ArticleTemplate})
    // console.log('[e.target.name] :', [e.target.name]);
    // console.log('e.target.valeu :', e.target.value);
    // this.setState({
    //     [e.target.name] : e.target.value
    // })
  }

 


  getArticleTemplateDis = () => {
    let { ArticleTemplate, TemplateTypes } = this.state



    TemplateTypes = TemplateTypes.map((_tt)=>{
      return (<option value={_tt} key={_tt}> {_tt}</option>)
    })
    

    return ArticleTemplate.map((_t)=>{
      
      let i = ArticleTemplate.indexOf(_t)
        return (
          <li key={i} className="bg-green-500  shadow-md p-3">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                choose template type
              </label>
              <div className="relative">
                <select 
                name = {_t.type} 
                value={_t.type}
                onChange={(e) => this.onChangeATOtp(e,i)}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                  {TemplateTypes}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </li>
        )
    })
    
  }

  onAddClick = () => {
    let { ArticleTemplate } = this.state
    ArticleTemplate.push({
      type: PARA,
      value : ''
    })
    this.setState({ArticleTemplate})
  }

 

  render() {
    let { imagePreviewList, next_article_id ,ArticleTemplate, ArticleAuthorName, all_authors, ArticleName, SubTitle,  errors, PublishedOn, ReadTime }= this.state

    let _at = this.getArticleTemplateDis()

    console.log('ArticleTemplate :', ArticleTemplate);
    
    all_authors = all_authors.map((_a)=> {
      return (<option value={_a.name} key={_a.id}>{_a.name}</option>)
    })
    let l = []
    if(imagePreviewList){
      l = imagePreviewList.map((_f)=> {
        return (
          <img src={_f} className="rounded shadow-md h-48 mt-2"alt="asdasd"/>
        )
      })
    }
    //"PublishedOn", "ReadTime", "SearchTags", "ArticleTemplate"

    return (
          <section>
          <div className="w-full sm:max-w-4xl px-16 max-w-2xl mt-4 mx-auto">
          <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Article Name
            </label>

            <InputTextAdmin
                        name = "ArticleName" 
                        label = "ArticleName"
                        value = {ArticleName}
                        placeholder = ""
                        type = "ArticleName" 
                      onChange = {this.onChange}
                      error = { errors.ArticleName }
                      />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              Choose Author 
            </label>
            <div className="relative">
              <select 
              name = "ArticleAuthorName" 
              value={ArticleAuthorName}
              onChange={this.onChange}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                {all_authors}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Main Image
            </label>

              <FilePicker
                 id="image"
                 label="Image"
                 control="input"
                 isMutiple={false}
                 onChange={this.postInputChangeHandler}
              />



            {l}

            {/* {this.state.imagePreviewList == null ? 
              null : 
              <img src={this.state.imagePreview} className="rounded shadow-md h-48"alt="asdasd"/>
            } */}




            <p className="text-gray-600 text-xs italic mt-2">This is the main display image of article.</p>
          </div>
        </div>

       

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              SUBTITLE
            </label>
            <InputTextAdmin
                        name = "SubTitle" 
                        label = "SubTitle"
                        value = {SubTitle}
                        placeholder = ""
                        type = "SubTitle" 
                      onChange = {this.onChange}
                      error = { errors.SubTitle }
                      />
          </div>
        </div>


        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Published On
              </label>
              <InputTextAdmin
                        name = "PublishedOn" 
                        label = "PublishedOn"
                        value = {PublishedOn}
                        placeholder = ""
                        type = "PublishedOn" 
                      onChange = {this.onChange}
                      error = { errors.PublishedOn }
                      />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Read Time
              </label>
              <InputTextAdmin
                        name = "ReadTime" 
                        label = "ReadTime"
                        value = {ReadTime}
                        placeholder = ""
                        type = "ReadTime" 
                      onChange = {this.onChange}
                      error = { errors.ReadTime }
                      />
            </div>
            
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
          <div className="px-3 w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              article template
            </label>
            
            <ul>
              {_at}
            </ul>
            <button
            onClick={this.onAddClick}
            className="cursor-pointer mt-4 appearance-none block w-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >+</button>
            </div>
          </div>
      </div>
    </section>
       
    )
  }
}

const mapStateToProps = state => ({
  article : state.article
})

AddArticles.propTypes = {
  article : PropTypes.object.isRequired
}


export default connect(mapStateToProps,{getArticleFutureIDAndAllActiveAuthors})(AddArticles)


