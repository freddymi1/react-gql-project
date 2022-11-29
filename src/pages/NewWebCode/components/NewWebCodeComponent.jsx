import React from 'react';
import ExerciseContent from './ExerciseContent/ExerciseContent';

const NewWebCodeComponent = () => {
  return (
    <>
      <div className="block overflow-y-auto">
        <section className="bg-white">
          <ExerciseContent />
        </section>
      </div>
    </>
  );
};

export default NewWebCodeComponent;
