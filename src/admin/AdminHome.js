import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AdminAllArticles from './AdminAllArticles';
import TopBar from './common/TopBar';
import AdminNavSide from './common/AdminNavSide';
import BreadCrum from './common/BreadCrum';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
export default class AdminHome extends Component {
  render() {
    return(
      <div>
        <TopBar/>
        <div class="flex flex-col md:flex-row bg-gray-900">
          <AdminNavSide/>
          <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
          <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
          <BreadCrum/>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*Metric Card*/}
            <div className="bg-green-100 border-b-4 border-green-600 rounded-lg shadow-lg p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-green-600"><i className="fa fa-wallet fa-2x fa-inverse" /></div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-600">Total Revenue</h5>
                  <h3 className="font-bold text-3xl">$3249 <span className="text-green-500"><i className="fas fa-caret-up" /></span></h3>
                </div>
              </div>
            </div>
            {/*/Metric Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*Metric Card*/}
            <div className="bg-orange-100 border-b-4 border-orange-500 rounded-lg shadow-lg p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-orange-600"><i className="fas fa-users fa-2x fa-inverse" /></div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-600">Total Users</h5>
                  <h3 className="font-bold text-3xl">249 <span className="text-orange-500"><i className="fas fa-exchange-alt" /></span></h3>
                </div>
              </div>
            </div>
            {/*/Metric Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*Metric Card*/}
            <div className="bg-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-lg p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-yellow-600"><i className="fas fa-user-plus fa-2x fa-inverse" /></div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-600">New Users</h5>
                  <h3 className="font-bold text-3xl">2 <span className="text-yellow-600"><i className="fas fa-caret-up" /></span></h3>
                </div>
              </div>
            </div>
            {/*/Metric Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*Metric Card*/}
            <div className="bg-blue-100 border-b-4 border-blue-500 rounded-lg shadow-lg p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-blue-600"><i className="fas fa-server fa-2x fa-inverse" /></div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-600">Server Uptime</h5>
                  <h3 className="font-bold text-3xl">152 days</h3>
                </div>
              </div>
            </div>
            {/*/Metric Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*Metric Card*/}
            <div className="bg-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-lg p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-indigo-600"><i className="fas fa-tasks fa-2x fa-inverse" /></div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-600">To Do List</h5>
                  <h3 className="font-bold text-3xl">7 tasks</h3>
                </div>
              </div>
            </div>
            {/*/Metric Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*Metric Card*/}
            <div className="bg-red-100 border-b-4 border-red-500 rounded-lg shadow-lg p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-red-600"><i className="fas fa-inbox fa-2x fa-inverse" /></div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-600">Issues</h5>
                  <h3 className="font-bold text-3xl">3 <span className="text-red-500"><i className="fas fa-caret-up" /></span></h3>
                </div>
              </div>
            </div>
            {/*/Metric Card*/}
          </div>
        </div>
        <div className="flex flex-row flex-wrap flex-grow mt-2">
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*Graph Card*/}
            <div className="bg-white border-transparent rounded-lg shadow-lg">
              <div className="bg-gray-400 uppercase text-gray-800 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                <h5 className="font-bold uppercase text-gray-600">Graph</h5>
              </div>
              <div className="p-5">
                <canvas id="chartjs-7" className="chartjs" width="undefined" height="undefined" />
              </div>
            </div>
            {/*/Graph Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*Graph Card*/}
            <div className="bg-white border-transparent rounded-lg shadow-lg">
              <div className="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                <h5 className="font-bold uppercase text-gray-600">Graph</h5>
              </div>
              <div className="p-5">
                <canvas id="chartjs-0" className="chartjs" width="undefined" height="undefined" />
              </div>
            </div>
            {/*/Graph Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*Graph Card*/}
            <div className="bg-white border-transparent rounded-lg shadow-lg">
              <div className="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                <h5 className="font-bold uppercase text-gray-600">Graph</h5>
              </div>
              <div className="p-5">
                <canvas id="chartjs-1" className="chartjs" width="undefined" height="undefined" />
              </div>
            </div>
            {/*/Graph Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*Graph Card*/}
            <div className="bg-white border-transparent rounded-lg shadow-lg">
              <div className="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                <h5 className="font-bold uppercase text-gray-600">Graph</h5>
              </div>
              <div className="p-5"><canvas id="chartjs-4" className="chartjs" width="undefined" height="undefined" />
              </div>
            </div>
            {/*/Graph Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*Table Card*/}
            <div className="bg-white border-transparent rounded-lg shadow-lg">
              <div className="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                <h5 className="font-bold uppercase text-gray-600">Table</h5>
              </div>
              <div className="p-5">
                <table className="w-full p-5 text-gray-700">
                  <thead>
                    <tr>
                      <th className="text-left text-blue-900">Name</th>
                      <th className="text-left text-blue-900">Side</th>
                      <th className="text-left text-blue-900">Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Obi Wan Kenobi</td>
                      <td>Light</td>
                      <td>Jedi</td>
                    </tr>
                    <tr>
                      <td>Greedo</td>
                      <td>South</td>
                      <td>Scumbag</td>
                    </tr>
                    <tr>
                      <td>Darth Vader</td>
                      <td>Dark</td>
                      <td>Sith</td>
                    </tr>
                  </tbody>
                </table>
                <p className="py-2"><a href="#">See More issues...</a></p>
              </div>
            </div>
            {/*/table Card*/}
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-3">
            {/*Template Card*/}
            <div className="bg-white border-transparent rounded-lg shadow-lg">
              <div className="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2">
                <h5 className="font-bold uppercase text-gray-600">Template</h5>
              </div>
              <div className="p-5">
              </div>
            </div>
            {/*/Template Card*/}
          </div>
        </div>
      </div>
          </div>
        </div>

      </div>
    )
    }
    
  }