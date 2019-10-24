import React, { Component } from 'react'
import TopBar from './common/TopBar';
import AdminNavSide from './common/AdminNavSide';
import BreadCrum from './common/BreadCrum';
import FilePicker from './common/FilePicker';
import InputTextAdmin from './common/InputTextAdmin';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import AdminTextArea from '../admin/common/AdminTextArea';
import axios from 'axios';

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
    imageIndex : 1,
    ArticleTemplate: [
      {
        type: FIRST_PARA,
        value : ''
      }
  ],
    TemplateTypes: [FIRST_PARA, PARA, INLINE_IMG, BLOCK_IMG, POINTER, QUOTE]
    };

  


  static getDerivedStateFromProps(nextProps, prevState){
    let { all_authors, next_article_id } = nextProps.article
    next_article_id = parseInt(next_article_id)
    if(all_authors!==prevState.all_authors){
      return { all_authors, ArticleAuthorName : all_authors[0]};
    }
    if(next_article_id!==prevState.next_article_id){
      console.log('next_article_id :', next_article_id);
      next_article_id += 1
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

  postInputChangeHandlerAT = async (input, value, files, i) => {
    let {ArticleTemplate, next_article_id, imageIndex} = this.state
    if (files) {

      console.log('files[0] :', files);
      
      if(files[0]){
        let b64 = []
        try {

          
          const formData = new FormData();
          
          formData.append('token', localStorage.Admin_Token || '');
          formData.append('type', 'article');
          let names = []
          let temp = imageIndex

          console.log('formData :', formData);


          let index = 0

          for(let _f of files){
            //let v = Object.keys(files).find(key => files[key] === _f)
            let blob = await generateBase64FromImage(_f)
            b64.push(blob)

            let name = ''
            if(imageIndex <= 9){
              name = `article_${next_article_id}_0${temp}.png`
            }else {
              name = `article_${next_article_id}_${temp}.png`
            }
            console.log('name :', name);
            ++temp
            ++index
            let fi = new File([_f] , name ,{ type :"image/png"})
            formData.append(`images[${index}]`, fi);
          }

          // console.log('formData :', formData); 

          // Object.keys(files).map(async _g => {
          //   //let v = Object.keys(files).find(key => files[key] === files[_g])
          //   formData.append(`images[${_g}]`, files[_g]);
            
          // })

          console.log('formData :', formData);
          console.log('b64 :', b64);



          // Distigusih b/w main and article template
          console.log('ArticleTemplate[i].value :', ArticleTemplate[i].value);

          ArticleTemplate[i].value = b64.map((picture) => {
            let data = { picture ,  x : -1 , picturePath : '', error : ''}
            return data
          })

          console.log('ArticleTemplate[i].value :', ArticleTemplate[i].value);
          this.setState({ArticleTemplate})
          

          

          console.log('formData :', formData);
          
        

          const res = await axios.post('/api/article/uploadImageForArticles', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progressEvent => {

              let d = parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              );
              console.log('d :', d);
              for(var tem of ArticleTemplate[i].value){
                tem.x = d
              }
              
              this.setState({ArticleTemplate})
            }
          });


          let res_d = res.data
          console.log('res_d :', res_d);  
          if(res_d.Status){
            var i = 0
            for(var tem of ArticleTemplate[i].value){
              tem.x = -1
              tem.picturePath = res_d.imgUrl[i]
              ++i
            }
            imageIndex += files.length
            this.setState({ArticleTemplate, imageIndex})
          }else {
            console.log('res_d :', res_d);
          }
        
          
        } catch (error) {
          console.log('error :', error);
          console.log('ArticleTemplate :', ArticleTemplate);
          console.log('i :', i);

          ArticleTemplate[i].error = error
          this.setState({ArticleTemplate})
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
    switch(ArticleTemplate[i].type){
      case POINTER:
          ArticleTemplate[i].value = []
          break
      case INLINE_IMG:
      case BLOCK_IMG:  
          ArticleTemplate[i].value = []
          ArticleTemplate[i].x = -1
          break
      default:
          ArticleTemplate[i].value = ''
          ArticleTemplate[i].x = -1
          break

    }
    
    this.setState({ArticleTemplate})
    
  }

  onChangeATInput = (e,i) => {
    let {ArticleTemplate} = this.state
    ArticleTemplate[i].value = e.target.value
     this.setState({ArticleTemplate})
  }


  getTemplateType = (_t,i) => {
    let { errors } = this.state
    switch(_t.type){

      case BLOCK_IMG:
      case INLINE_IMG:

        let dis = []
        let isMulti = false
        if(_t.type === INLINE_IMG){
          isMulti = true
        }

        if(_t.value.length > 0){
          dis = _t.value.map(tem => {

              let ind = _t.value.indexOf(tem)

              return (
                <div key={ind}>
                  <div className="flex flex-wrap mt-2">
                      <div className="
                      relative cursor-pointer shadow-md bg-white
                      rounded">
                      <img 
                      className="
                      object-cover
                      rounded
                      h-48
                      shadow-md" 
                      src={tem.picture} alt={(new Date()).getTime()}
                      />
                      {tem.x === -1 ? null :
                      <div className="absolute w-full top-0 h-48 insta-overlay text-center rounded shadow-md">
                      <p className="text-white m-auto h-48 flex align-middle justify-center text-center">
                        <span className="align-middle w-full justify-center text-center self-center">{tem.x}%</span>
                      </p>
                    </div>
                      }
                      {tem.errors? <p className="text-gray-600 text-xs italic text-red-500">{tem.errors}</p> : null}
                    </div>
                  </div>
                </div>
              )
          })
        }




        return (
          <div className="w-full">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Main Image
            </label>

              <FilePicker
                 id="image"
                 label="Image"
                 control="input"
                 isMutiple={isMulti}
                 onChange={(input, value, files) => this.postInputChangeHandlerAT(input, value, files, i)}
              />

            {dis}
          </div>
        )

      case FIRST_PARA:
      case PARA:
      default:
        console.log('_t.value :', _t.value);
        console.log('i :', i);
        return (  
          <AdminTextArea 
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name = {_t.value} 
            value={_t.value}
            onChange={(e) => this.onChangeATInput(e,i)}
           />
        );


    }
  }

 


  getArticleTemplateDis = () => {
    let { ArticleTemplate, TemplateTypes } = this.state
    TemplateTypes = TemplateTypes.map((_tt)=>{
      return (<option value={_tt} key={_tt}> {_tt}</option>)
    })

    return ArticleTemplate.map((_t)=>{
      
      let i = ArticleTemplate.indexOf(_t)
      let t_t = this.getTemplateType(_t,i)

      

        return (
          <li key={i} className="bg-gray-100 shadow-md p-3 mb-3 rounded">
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase text-gray-700 tracking-wide   text-xs font-bold mb-2" htmlFor="grid-state">
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
            <div className="w-full md:w-full px-3 mt-4">
              {t_t}
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


  //  go = () => {
  //    let {ArticleTemplate} = this.state
     
     
  //    ArticleTemplate[0].value[0].x += 5 
  //   if (ArticleTemplate[0].value[0].x <= 100) {
  //       setTimeout(() => this.go(), 100);
  //       //ArticleTemplate[0].x = ArticleTemplate[0].x
  //       console.log('y :', ArticleTemplate[0].value[0].x);
  //       this.setState({ArticleTemplate})
  //   }else {
  //     ArticleTemplate[0].value[0].x = -1
  //     this.setState({ArticleTemplate})
  //   }
  // }

  addArticle = (e) => {
    e.preventDefault()
    //this.go();
    return
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
          <button 
          onClick={this.addArticle}
          type="submit" 
                      className="inline-block border-solid border border-white
                      mx-auto
                      text-white px-8 py-3 tracking-wider 
                      font-semibold rounded-lg shadow-md 
                      w-32
                      text-sm
                      hover:bg-gray-900
                      bg-gray-800
                      text-center
                      "
                    >
            Submit                      
          </button>

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


