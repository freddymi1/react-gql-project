import React, { useState } from 'react';

import { RiFileCodeLine } from "react-icons/ri";
import { FaPlay } from 'react-icons/fa';
import CodeEditor from '../CodeEditor/CodeEditor';
import DescriptionEditor from './components/DescriptionEditor/DescriptionEditor'

const ExerciseContent = () => {
  let [lineCodes, setLineCodes] = useState(['print("TEST")']);

  let [showDescription, setShowDescription] = useState(true)
  let [showCode, setShowCode] = useState(false)
  let [showResult, setShowResult] = useState(false)

  let handleCodeChange = (lineOfCodes) => {
    setLineCodes(lineOfCodes)
    console.log(lineOfCodes)
  }

  return (
    <>
      <div className="tab w-full overflow-auto">

        <div className="w-full overflow-hidden z-10" style={{ position: "absolute", top: "6.5%", bottom: "120px", zIndex: -1 }}>

          <div className={(showDescription ? "h-full opacity-100" : "h-0 overflow-hidden opacity-0") + " w-full"}>
            <DescriptionEditor />
          </div>

          <div className={(showCode ? "h-full opacity-100" : "h-0 overflow-hidden opacity-0") + " w-full"}>
            <CodeEditor lineOfCode={lineCodes} handleCodeChange={handleCodeChange} />
          </div>
          <div className={(showResult ? "h-full opacity-100" : "h-0 overflow-hidden shadow opacity-0") + " w-full bg-white"}>
            <iframe className="block w-full h-full shadow-lg border-2 border-gray-200" id="runCode"></iframe>
          </div>
        </div>
        <div className="w-full bg-gray-500 flex h-14 pr-5 text-gray-700 float-right" style={{ position: "absolute", bottom: "70px" }}>
          <button className="block px-6 py-3 w-full text-gray-50 bg-transparent hover:shadow-md outline-none focus:outline-none"
            onClick={
              e => {
                setShowDescription(true)
                setShowCode(false)
                setShowResult(false)
              }
            }
          >
            <RiFileCodeLine className="inline mr-2" size="2em" /><span>Description</span>
          </button>
          <button className="block px-6 py-3 w-full text-gray-50 bg-transparent hover:shadow-md outline-none focus:outline-none"
            onClick={
              e => {
                setShowDescription(false)
                setShowCode(true)
                setShowResult(false)
              }
            }
          >
            <RiFileCodeLine className="inline mr-2" size="2em" /><span>Code</span>
          </button>
          <button
            className="bg-transparent w-full px-6 text-gray-50 active:bg-indigo-800 text-sm font-bold uppercase outline-none focus:outline-none"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={
              e => {
                var code = document.getElementById("runCode").contentWindow.document;
                code.open();
                code.writeln(
                  '<script>' +
                  lineCodes[0]
                  + '</script>'
                );
                code.close();
                setShowDescription(false)
                setShowCode(false)
                setShowResult(true)
              }
            }
          >
            <span>RUN</span>
            <FaPlay className="inline ml-2 text-green-500" size="1.2em" />
          </button>
        </div>
      </div>
    </>
  )
}

export default ExerciseContent;