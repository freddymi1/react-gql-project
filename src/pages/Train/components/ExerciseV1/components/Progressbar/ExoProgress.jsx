import React from 'react';
import { BiDumbbell } from 'react-icons/bi';

let ExoProgress = ({ isAchieved }) => {
  if (isAchieved) {
    return (
      <>
        <div className='flex-1'>
          <div className='w-10 h-10 bg-yellow-300 mx-auto rounded-full text-lg text-white flex items-center'>
            <span className='text-white text-center w-full'>
              <BiDumbbell
                size='1.5em'
                className='text-white text-black inline-block'
              />
            </span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className='flex-1'>
        <div className='w-10 h-10 bg-gray-300 mx-auto rounded-full text-lg text-white flex items-center'>
          <span className='text-white text-center w-full'>
            <BiDumbbell
              size='1.5em'
              className='text-white text-black inline-block'
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default ExoProgress;