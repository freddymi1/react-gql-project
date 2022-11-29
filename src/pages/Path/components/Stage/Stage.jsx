import React from 'react';

import Learning from '../Learning/Learning';

export default function Stage(props) {
  const learningArray = [];

  props.stage.learnings.map((learning, i) => {
    learningArray.push(<Learning key={learning.id} learning={learning} />);
  });

  return (
    <>
      <p className='font-bold text-gray-500 text-3xl text-left pl-4 pb-4 mt-9'>
        {props.stage.title}
      </p>
      <div className='flex flex-wrap pl-4 w-full justify-items-auto pb-12'>
        {learningArray.sort((a, b) => a.key - b.key)}
      </div>
      {/* <div className='flex flex-row p-4 mt-8'>
        <div className='w-3/4'>
          <p className='text-left text-xl font-medium text-gray-700'>
            Besoin d'un Mentor
          </p>
          <button className='block py-2 px-4 mt-20 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700'>
            Rencontrer
          </button>
        </div>
        <img
          className='w-1/4'
          src='https://png.pngtree.com/png-vector/20190624/ourlarge/pngtree-coachrefereesportwhistle-abstract-circle-background-flat-c-png-image_1492275.jpg'
        />
      </div> */}
    </>
  );
}
