import React from 'react';
import ExerciseContent from './components/ExerciseContent/ExerciseContent';

export default class WebCodeEditor extends React.Component {
  render() {
    return (
      <>
        <div className="block overflow-y-auto">
          <section className="bg-white">
            <ExerciseContent />
          </section>
        </div>
      </>
    );
  }
}
