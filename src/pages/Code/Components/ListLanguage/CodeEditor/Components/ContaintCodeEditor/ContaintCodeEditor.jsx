import React from 'react';
import { RiFileCodeLine, RiFileUnknowLine } from "react-icons/ri";
import OtherCodeEditor from '../OtherCodeEditor/OtherCodeEditor';

export default function ContaintCodeEditor(){

    return(
        <>
            <div className="tab w-full mb-6 overflow-hidden flex flex-row">
              <div className="w-1/6 pr-5 text-gray-700">
                <button className="block mb-5 px-6 py-3 w-full text-gray-700 bg-gray-200 rounded shadow hover:shadow-md outline-none focus:outline-none">
                  <RiFileUnknowLine className="inline mr-2" size="2em" />
                  <span>Indication</span>
                </button>
                <button className="block mb-5 px-6 py-3 w-full text-gray-700 bg-gray-200 rounded shadow hover:shadow-md outline-none focus:outline-none">
                  <RiFileCodeLine className="inline mr-2" size="2em" />
                  <span>Code</span>
                </button>
                <button
                  className="bg-green-700 w-full px-6 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-3 shadow hover:shadow-lg outline-none focus:outline-none"
                  type="button"
                  style={{ transition: "all .15s ease" }}>
                  RUN
                </button>
              </div>
              <div className="w-5/6 overflow-auto" style={{ height: "60vh" }}>
                <div className="h-full h-0 overflow-hidden w-full" >
                  <OtherCodeEditor />
                </div>
                <div className="h-full h-0 overflow-hidden w-full" >
                  <iframe className="block w-full h-full shadow-lg border-2 border-gray-200 rounded" id="runCode"></iframe>
                </div>
              </div>
          </div>
        </>
    )

}