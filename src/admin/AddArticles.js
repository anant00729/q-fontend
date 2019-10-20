import React, { Component } from 'react'
import TopBar from './common/TopBar';
import AdminNavSide from './common/AdminNavSide';
import BreadCrum from './common/BreadCrum';
import FilePicker from './common/FilePicker';

import { required, length } from '../utils/validators';
import { generateBase64FromImage } from '../utils/image';

import { FIRST_PARA } from '../actions/constants';



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
    ArticleTemplate: '',
    isActive: '',
    id: '',
    createdAt: '',
    updatedAt: '',
    SubTitle: '',
    MainImg: '',
    SearchTags: 'asdad'
      };

  


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
    // this.setState(prevState => {
    //   let isValid = true;
    //   for (const validator of prevState.postForm[input].validators) {
    //     isValid = isValid && validator(value);
    //   }
    //   const updatedForm = {
    //     ...prevState.postForm,
    //     [input]: {
    //       ...prevState.postForm[input],
    //       valid: isValid,
    //       value: files ? files[0] : value
    //     }
    //   };
    //   let formIsValid = true;
    //   for (const inputName in updatedForm) {
    //     formIsValid = formIsValid && updatedForm[inputName].valid;
    //   }
    //   return {
    //     postForm: updatedForm,
    //     formIsValid: formIsValid
    //   };
    // });
  };


  inputBlurHandler = input => {
    this.setState(prevState => {
      return {
        postForm: {
          ...prevState.postForm,
          [input]: {
            ...prevState.postForm[input],
            touched: true
          }
        }
      };
    });
  };

  render() {
    let { imagePreviewList }= this.state
    let l = []

    if(imagePreviewList){
      l = imagePreviewList.map((_f)=> {
        return (
          <img src={_f} className="rounded shadow-md h-48 mt-2"alt="asdasd"/>
        )
      })
    }
    

    return (
      <div>
        <div>
        <TopBar/>
        <div className="flex flex-col md:flex-row bg-gray-900">
        <AdminNavSide/>
        <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
        <BreadCrum 
        name={'Add Article'}
        />
          <section>
          
          <form className="w-full sm:max-w-4xl px-16 max-w-2xl mt-4 mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Article Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              Choose Author 
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
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
                 onChange={this.postInputChangeHandler}
                 onBlur={this.inputBlurHandler.bind(this, 'image')}
                 valid={this.state.postForm['image'].valid}
                 touched={this.state.postForm['image'].touched}
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
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
             type="text" placeholder="" />
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>


        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
              City
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              State
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
              Zip
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder={90210} />
          </div>
        </div>
      </form>
          
          
          {/* Options */}
          <div className="inline-block relative w-64">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Really long option that will likely overlap the chevron</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          </section>
        </div>
        </div>
        </div>
        
      </div>
    )
  }
}

export default AddArticles
