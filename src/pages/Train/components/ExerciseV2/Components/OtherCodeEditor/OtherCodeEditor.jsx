import React, { useState } from 'react'
import WebCodeMirror from '../WebCodeMirror/WebCodeMirror';

const CodeEditor = (props) => {

  // props.handleCodeChange(["<h1>sesetsets</h1>", "", ""])
  console.log(props.exercise)

  return (
    <>
      <WebCodeMirror 
        exercise={ props.exercise.instruction }
        mode={ JSON.parse(props.exercise.language)[0].item_text }
        studentCode={ props.studentCode }
      />
    </>
  )
}

export default CodeEditor;