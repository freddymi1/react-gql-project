import React from 'react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { RiPencilLine } from 'react-icons/ri';
import { IoMdPersonAdd, IoMdMore } from 'react-icons/io';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div className='bg-green-700 h-18 flex flex-row p-5 relative'>
          <a className='text-left right-0 text-lg text-white font-semibold'>
            <HiArrowNarrowLeft className='inline' size='1.5em' />
            {/* <span className="ml-4 none">Your name</span> */}
          </a>

          <ul className='absolute inline-block right-0 space-x-4'>
            <li className='inline'>
              <a className='text-lg text-white font-semibold'>
                <IoMdPersonAdd className='inline' size='2em' />
              </a>
            </li>
            <li className='inline'>
              <a className='text-lg text-white font-semibold'>
                <IoMdMore className='inline' size='2em' />
              </a>
            </li>
          </ul>
          <div className='justify-center block text-center mx-auto relative'>
            <div className='w-full'>
              <img
                className='w-1/3 m-auto rounded-full'
                src='images/avatar.png'
                alt='profil avatar'
              />
            </div>
            <div className='mt-6 text-gray-100 '>
              <h3 className='font-semibold text-xl'>Your Name</h3>
              <div className='flex flex-row w-full justify-center mx-auto text-center mt-1 text-semibold text-gray-300'>
                <span className='grap-4 mr-5'>
                  <img
                    className='mx-auto'
                    src='images/mada.png'
                    alt='profil avatar'
                  />
                </span>
                <span className='grap-4 mr-5'>
                  <span className='inline-block'>MADAGASCAR</span>
                </span>
                <span className='grap-4'>
                  <span className='inline-block'>LEVEL 1</span>
                </span>
              </div>
              <div className='flex flex-row w-full justify-center mx-auto text-center mt-1 text-semibold text-gray-300'>
                <span className='grap-4 mr-5'>
                  <span className='inline-block'>0 Followers</span>
                </span>
                <span className='grap-4'>
                  <span className='inline-block'>1 Following</span>
                </span>
              </div>
              <p className='text-gray-50 text-md'>
                <span className='mr-2'>Add your profile summary</span>
                <RiPencilLine className='inline' />
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
