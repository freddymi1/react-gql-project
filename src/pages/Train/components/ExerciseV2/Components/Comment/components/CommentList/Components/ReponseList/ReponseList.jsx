import React from 'react';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
export default function ReponseList(){
    return (
      <div className='w-full bg-white rounded-lg p-3  flex flex-col justify-center  md:items-start shadow-md mb-4 mx-auto clear-right'>
      <div className='flex flex-row justify-center mr-2 '>
        <img
          alt='avatar'
          width='48'
          height='48'
          className='rounded-full w-10 h-10 mr-4 shadow-lg mb-4'
          src='https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png'
        />
        <div>
          <h3 className='text-purple-600 font-semibold text-lg text-center md:text-left '>
            @Mario
          </h3>
          <p className='text-gray-600 text-lg text-center md:text-left'>
            Message text reponse comment!
          </p>
          <div className='text-gray-600'>
            <a href='#'>
              <RiArrowUpSLine className='inline' size='2em' />
            </a>
            <span className='text-gray-600 text-sm'>+100</span>
            <a href='#'>
              <RiArrowDownSLine className='inline' size='2em' />
            </a>
          </div>
        </div>
      </div>
    </div>
      );
}