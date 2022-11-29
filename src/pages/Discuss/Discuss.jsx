
import React from 'react';
import Main from './Components/Main/Main'
// import Sidebar from './Components/Sidebar/Sidebar';
export default class Discuss extends React.Component {
  render() {
    return (
      <>
          <section className="w-full h-screen px-4 pt-8 pb-16 pb-32 bg-gray-50 mx-auto overflow-auto">
              
              <div className="space-y-4 md:flex md:space-y-0 w-full md:space-x-4">
                <div className="w-full h-full py-4 bg-white shadow">
                    <Main />
                </div>
                {/* <div className="w-full h-full rounded-md bg-white md:w-1/4 shadow">
                    <Sidebar />
                </div> */}
              </div>
          </section>  
      </>
    )
  }
}