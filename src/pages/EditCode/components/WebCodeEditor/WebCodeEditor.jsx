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
          <Title language={ this.props.language } setPrivacy={ this.props.setPrivacy } privacy={ this.props.privacy } saveWebCode={ this.props.saveWebCode } />
        </div>
        <div className="w-full bg-gray-100 overflow-hidden m-auto z-40">
          <button className={ "bg-gray-200 px-6 py-3 uppercase text-gray-500 outline-none active:bg-indigo-800 focus:outline-none"}
            onClick={
              e => {
                this.setState({
                  isPython: true
                })
              }
            }
          >{ this.props.language }</button>
          
          
          
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
              mode: this.props.language,
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