import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import BuyLearning from './BuyLearning/BuyLearning';

const CardLearning = (props) => {
  const date1 = new Date(props.createdAt);
  const date2 = new Date(props.updatedAt);

  //   console.log(date2 - date1);
  const diffTime = Math.abs(date2 - date1);
  const timePassed = Math.ceil(diffTime / (1000 * 60));

  return (
    <>
      <Link to={'/learning/' + props.learningId} className='flex-auto'>
        <div className='h-32 flex flex-row  bg-green-600 shadow-md rounded-sm'>
          <div className='flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 text-red-500'>
            <img
              className='w-16 h-16'
              src={'http://82.165.206.170' + props.learningPic}
            />
          </div>
          <div className='flex flex-col border-l-2 border-gray-50 flex-grow p-2'>
            <div className='font-bold uppercase text-md text-gray-50'>
              {props.learningTitle}
            </div>
            <div className='font-semibold pt-2 text-sm text-left text-white'>
              {props.learningDesc.split('').length <= 80
                ? props.learningDesc
                : props.learningDesc.slice(0, 80) + ' ...'}
            </div>
            <div className='font-semibold pt-2 text-sm text-left text-white'>
              <p>total time passed: {timePassed} minutes</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardLearning;
