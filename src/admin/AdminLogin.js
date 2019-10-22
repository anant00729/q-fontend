import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import app_img from '../app_img.jpg';
class AdminLogin extends Component {
  render() {
    return (
      <div className="w-full h-screen flex justify-center flex-col bg-gray-900">

      <div className="w-24 content-center mx-auto admin-form-width flex-col flex justify-center">
        <img src={app_img} className="rounded-full shadow-md border-2 border-white-500 w-24 h-24 self-center mb-4"alt="asdasd"/>
        <p className="text-gray-500 mt-1 text-md text-center my-8">Quonquer Admin</p>
      </div>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 self-center admin-form-width" >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          <p className="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
          </button>
          {/* <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
            Forgot Password?
          </Link> */}
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs mt-12">
        ©2019 QUONQUER Corp. All rights reserved.
      </p>
    </div>
    )
  }
}

export default AdminLogin
