import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import '../../../../../../../node_modules/codemirror/theme/monokai.css';

export default class WebCodeMirror extends React.Component{
    render(){
        return(
            <>
                <div className="w-full bg-gray-100 block z-40">
                    <button className="bg-gray-200 bg-gray-100 px-6 py-3 text-gray-500 outline-none active:bg-indigo-800 focus:outline-none">
                        { this.props.mode }
                    </button>
                    
                </div>
                <div className="h-full h-0 overflow-hidden w-full" >
                <CodeMirror
                    
                    height="50vh"
                    options={{
                    theme: 'monokai',
                    keyMap: 'sublime',
                    tabSize: 2,
                    mode: this.props.mode,
                    readOnly: false,
                    autocorrect: true
                    }}
                    value={ JSON.parse(this.props.exercise)[0] }
                    onChange={(editor, data, value) => {
                        this.props.studentCode(editor.getValue())
                    }}
                />
                </div>
            </>
        )
    }
}