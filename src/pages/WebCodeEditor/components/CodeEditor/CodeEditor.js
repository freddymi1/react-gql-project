import React, { useState } from 'react'
import WebCodeEditor from '../WebCodeEditor/WebCodeEditor';

const CodeEditor = (props) => {

  // props.handleCodeChange(["<h1>sesetsets</h1>", "", ""])

  return (
    <>
      <WebCodeEditor lineOfCode={ props.lineOfCode } handleCodeChange={ props.handleCodeChange } />
    </>
  )
}

export default CodeEditor;