import React from 'react';
import Title from './components/Title/Title';
import ExerciseContent from './components/ExerciseContent/ExerciseContent'


export default class WebCodeEditorApp extends React.Component{
  render() {
    return (
      <>
        <div className="block overflow-y-auto">
          <section className="bg-white">
            <ExerciseContent />
          </section>
        </div>
      </>
    )
  }
}