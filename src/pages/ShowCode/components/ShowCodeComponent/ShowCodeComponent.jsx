import React from 'react';
import ExerciseContent from '../ExerciseContent/ExerciseContent'

const ShowCodeComponent = (props)=>{
    return(
        <div className="block overflow-y-auto">
        <section className="bg-white">
          <ExerciseContent code={props.code}
          />
        </section>
      </div>
    )
}
export default ShowCodeComponent;