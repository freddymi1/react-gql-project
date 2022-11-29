import React, { useEffect, useState } from 'react';

import CodeMirror from '@uiw/react-codemirror';
import ReactHtmlParser from 'react-html-parser';
import $ from 'jquery';

import 'codemirror/keymap/sublime';
import '../../../../../node_modules/codemirror/theme/monokai.css';
import '../../styles/lessonContent.css';


const LessonContent = (props) => {
  const [ lessonContent, setLessonContent ] = useState(ReactHtmlParser(props.lesson.content))

  return (
      <>
          <div className="tab w-full mb-6 overflow-hidden">
              <input className="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs"/>
              <label className="block pt-5 pb-5 leading-normal uppercase font-black text-green-500" htmlFor="tab-multi-one">{ props.lesson.title }</label>
              <div id="lesson" className="block leading-normal pb-5 pt-5 text-gray-700">
                { lessonContent }
              </div>
              {/* <div className="h-72">
                <CodeMirror
                  value={code}
                  options={{
                    theme: 'monokai',
                    keyMap: 'sublime',
                    tabSize: 2,
                    mode: 'jsx',
                    readOnly: true
                  }}
                />
              </div>
              <div className="tab-content py-5 overflow-hidden border-l-2 bg-gray-100 border-blue-500 leading-normal">
                  <h5 className="text-blue-500  ml-12">Resume:</h5>
                  <ul className="list-decimal text-gray-700  ml-24 my-2">
                      <li>his is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</li>
                      <li>his is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</li>
                      <li>his is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</li>
                      <li>his is a no-brainer to wash your face, or we need to future-proof this high performance keywords granularity.</li>
                  </ul>
              </div> */}
          </div>
      </>
  )
}

export default LessonContent;