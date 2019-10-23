import React, { Component } from 'react'
import InputTextAdmin from './common/InputTextAdmin';
import FilePicker from './common/FilePicker';
import { generateBase64FromImage } from '../utils/image';
import axios from 'axios';
import {BASE_URL} from '../actions/constants';



class AddAuthors extends Component {

  state = {
    name : '',
    email : '',
    password : '',
    picture : null,
    errors : {},
    x : -1
  };


  onChange = e => {
    this.setState({
        [e.target.name] : e.target.value
    })
  }


  //  go = () => {
  //    let {x} = this.state
  //    x += 5 
  //   if (x <= 100) {
  //       setTimeout(() => this.go(), 100);
  //       console.log('x :', x);
  //       this.setState({x})
  //   }else {
  //     this.setState({x : -1})
  //   }
  // }

  addAuthor = (e) => {
    e.preventDefault()
    // this.go();
    // return
    
    const {  email , name, picture , password} = this.state
    let errors = {}
    
    if(name === ''){
      errors.name = 'Name is required' 
      this.setState({ errors })
      return
    }
   
    if(email === ''){
        errors.email = 'Email is required' 
        this.setState({ errors })
        return
    } 

    if(password === ''){
      errors.password = 'Password is required' 
      this.setState({ errors })
      return
    } 
    

    if(picture === null){
      errors.picture = 'Please select a profile image' 
      this.setState({ errors })
      return
    }
    

    const req_d = { email , name, password , picture}


    console.log('DONE');
    // const pro = { email , name }
    // this.props.addAuthor(pro, 'nor');
  }



  postInputChangeHandler = async (input, value, files) => {
    
    if (files) {

      console.log('files[0] :', files);
      if(files[0]){
        let b64 = []
        const formData = new FormData();
        
        formData.append('name', 'Author1');
        formData.append('image', files[0]);
        try {

          const res = await axios.post('/api/article/uploadImageForAuthor', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progressEvent => {

              let d = parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              );

              console.log('d :', d);

              this.setState({x : d})
              // Clear percentage
              //setTimeout(() => setUploadPercentage(0), 10000);
            }
          });


          let res_d = res.data
          console.log('res_d :', res_d);  
          if(res_d.Status){
            let errors = {}
            const img  = await generateBase64FromImage(files[0])
            this.setState({ picture: img, errors, x : -1 });
          }



          for(let f of files){
            b64.push(await generateBase64FromImage(f)) 
          }
          
        } catch (error) {
          let errors = {}
          errors.picture = error
          console.log('error :', error);
          //this.setState({ picture: null, errors });
        }
      }
    }
  }


  


  render() {

    let {name , email , picture , errors , password, x} = this.state

    
    return (
      <div>
        <form 
        onSubmit={this.addAuthor}
        className="w-full sm:max-w-4xl px-16 max-w-2xl mt-4 mx-auto">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Name
              </label>
              <InputTextAdmin
                        name = "name" 
                        label = "Name"
                        value = {name}
                        placeholder = ""
                        type = "name" 
                      onChange = {this.onChange}
                      error = { errors.name }
                      />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Emaill
              </label>
              <InputTextAdmin
                        name = "email" 
                        label = "Email"
                        value = {email}
                        placeholder = ""
                        type = "email" 
                      onChange = {this.onChange}
                      error = { errors.email }
                      />
            </div>
            
          </div>
          <div className="w-full md:w-1/2 pr-3 ">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Password
              </label>
              <InputTextAdmin
                        name = "password" 
                        label = "Password"
                        value = {password}
                        placeholder = ""
                        type = "password" 
                      onChange = {this.onChange}
                      error = { errors.password }
                      />
            </div>
          <div className="flex flex-wrap -mx-3 mb-3">
          <div className="px-3 mt-2">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2" htmlFor="grid-password">
              Main Image
            </label>

              <FilePicker
                 id="image"
                 label="Image"
                 control="input"
                 isMutiple={false}
                 onChange={this.postInputChangeHandler}
              />


            {picture ? 
           <div className="
            
            relative cursor-pointer shadow-md bg-white
            rounded">
             <img className="
             rounded
             h-48
             shadow-md" 
             src={picture} alt={(new Date()).getTime()}
             />
               {x === -1 ? null :
               <div className="absolute w-full top-0 h-48 insta-overlay text-center rounded shadow-md">
               <p className="text-white m-auto h-48 flex align-middle justify-center text-center">
                 <span className="align-middle w-full justify-center text-center self-center">{x}%</span>
               </p>
             </div>
               }
           </div>
            
            : null}
            {errors.picture ? <p className="text-gray-600 text-xs italic text-red-500">{errors.picture}</p> : null}
          </div>
          

        </div>
        <input type="submit" value="Submit"
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
                    />


        </form>
       
      </div>
    )
  }
}


export default AddAuthors