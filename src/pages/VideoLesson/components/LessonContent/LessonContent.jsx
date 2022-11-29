import React from 'react';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';

const LessonContent = () => {
    const code = 'const a = 0;';

    return (
        <>
            <div className="tab w-full mb-6 overflow-hidden">
                <input className="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs"/>
                <label className="block pt-5 pb-5 leading-normal uppercase font-black text-green-500" htmlFor="tab-multi-one">Les fondamentaux</label>
                <p className="block leading-normal pb-5 pt-5 text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <div className="h-72">
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
                    
                </div>
            </div>
        </>
    )
}

export default LessonContent;