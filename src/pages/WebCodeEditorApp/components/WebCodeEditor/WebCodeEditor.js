import React, { useState } from 'react';
import Title from '../Title/Title'
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/python/python';


class WebCodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPython: true,
      myPython: this.props.lineOfCode[0],
    };
  }

  render() {
    const { isPython, myPython } = this.state;
    return (
      <>
        <div className="bg-gray-500 w-full px-6 py-3">
          <Title />
        </div>
        <div className="w-full bg-gray-100 overflow-hidden m-auto z-40">
          <button className={ (isPython ? "bg-gray-200" : "bg-gray-100") + " px-6 py-3 text-gray-500 outline-none active:bg-indigo-800 focus:outline-none"}
            onClick={
              e => {
                this.setState({
                  isPython: true
                })
              }
            }
          >PYTHON</button>
          
          
          
        </div>
        <div className={ (isPython ? "h-full" : "h-0 overflow-hidden") + " w-full" }>
          <CodeMirror
            onChange={
              (editor, data, python) => {
                this.setState({ myPython: editor.getValue() })
                this.props.handleCodeChange([this.state.myPython])
              }
            }
            height="80vh"
            value={myPython}
            options={{
              theme: 'monokai',
              keyMap: 'sublime',
              tabSize: 2,
              mode: 'python',
              readOnly: false,
              autocorrect: true
            }}
          />
        </div>
        
        
        
      </>
    )
  }
}


export default WebCodeEditor;