import React, { useState } from 'react';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';


class WebCodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHtml: true,
      isCss: false,
      isJs: false,
      myCodeHtml: this.props.lineOfCode[0],
      myCodeCss: this.props.lineOfCode[1],
      myCodeJs: this.props.lineOfCode[2]
    };
  }

  render() {
    const { isHtml, isCss, isJs, myCodeHtml, myCodeCss, myCodeJs } = this.state;
    return (
      <>
        <div className="w-full bg-gray-100 block z-40">
          <button className={ (isHtml ? "bg-gray-200" : "bg-gray-100") + " px-6 py-3 text-gray-500 outline-none active:bg-indigo-800 focus:outline-none"}
            onClick={
              e => {
                this.setState({
                  isHtml: true,
                  isCss: false,
                  isJs: false
                })
              }
            }
          >HTML</button>
          <button className={ (isCss ? "bg-gray-200" : "bg-gray-100") + " px-6 py-3 text-gray-500 outline-none active:bg-indigo-800 focus:outline-none"}
            onClick={
              e => {
                this.setState({
                  isHtml: false,
                  isCss: true,
                  isJs: false
                })
              }
            }
          >CSS</button>
          <button className={ (isJs ? "bg-gray-200" : "bg-gray-100") + " px-6 py-3 text-gray-500 outline-none active:bg-indigo-800 focus:outline-none"}
            onClick={
              e => {
                this.setState({
                  isHtml: false,
                  isCss: false,
                  isJs: true
                })
              }
            }
          >JS</button>
        </div>
        <div className={ (isHtml ? "h-full" : "h-0 overflow-hidden") + " w-full" }>
          <CodeMirror
            onChange={
              (editor, data, html) => {
                this.setState({ myCodeHtml: editor.getValue() })
                this.props.handleCodeChange([ this.state.myCodeHtml, this.state.myCodeCss, this.state.myCodeJs ])
              }
            }
            height="50vh"
            value={myCodeHtml}
            options={{
              theme: 'monokai',
              keyMap: 'sublime',
              tabSize: 2,
              mode: 'html',
              readOnly: false,
              autocorrect: true
            }}
          />
        </div>
        <div className={ (isCss ? "h-full" : "h-0 overflow-hidden") + " w-full" }>
          <CodeMirror
            onChange={
              (editor, data, css) => {
                this.setState({ myCodeCss: editor.getValue() })
                this.props.handleCodeChange([ this.state.myCodeHtml, this.state.myCodeCss, this.state.myCodeJs ])
              }
            }
            height="50vh"
            value={myCodeCss}
            options={{
              theme: 'monokai',
              keyMap: 'sublime',
              tabSize: 2,
              mode: 'css',
              readOnly: false,
              autocorrect: true
            }}
          />
        </div>
        <div className={ (isJs ? "h-full" : "h-0 overflow-hidden") + " w-full" }>
          <CodeMirror
            onChange={
              (editor, data, js) => {
                this.setState({ myCodeJs: editor.getValue() })
                this.props.handleCodeChange([ this.state.myCodeHtml, this.state.myCodeCss, this.state.myCodeJs ])
              }
            }
            height="50vh"
            value={myCodeJs}
            options={{
              theme: 'monokai',
              keyMap: 'sublime',
              tabSize: 2,
              mode: 'js',
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