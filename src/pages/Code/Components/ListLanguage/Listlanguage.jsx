import React from 'react';
import { Link } from 'react-router-dom';
import { DiRubyRough, DiHtml5  } from "react-icons/di";

export default function ListLanguage() {
  return (
    <>
      <div className="container pt-3 py-1 px-6 mx-auto">
        <div className="flex items-center text-gray-800">
          <div className="py-4" style={{ width: "600px" }}>
            <div className="w-full space-y-4">
              <div className="w-full cursor-pointer hover:shadow">
                <Link to='/new_web_code'>
                  <div className="h-16 flex flex-row bg-white rounded-sm">
                    <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-16 rounded-sm bg-blue-600 text-red-500">
                      <label className="text-sm font-bold text-gray-50">
                        <DiHtml5 size="3em" />
                      </label>
                    </div>
                    <div className="flex flex-col flex-grow bg-transparent p-4">
                      <div className="text-xl font-bold text-gray-500">Web</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-full cursor-pointer hover:shadow">
                <Link to='/new_code/ruby'>
                  <div className="h-16 flex flex-row bg-white rounded-sm">
                    <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-16 rounded-sm bg-red-600 text-red-500">
                      <label className="text-sm font-bold text-gray-50">
                        <DiRubyRough size="3em" />
                      </label>
                    </div>
                    <div className="flex flex-col flex-grow bg-transparent p-4">
                      <div className="text-xl font-bold text-gray-500">Ruby</div>
                    </div>
                  </div>
                </Link>
              </div>


            </div>
          </div>
        </div>
      </div>

    </>
  )
}