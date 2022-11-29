import React, { useState, useEffect } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { RiRadioButtonLine } from 'react-icons/ri';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { MdComment } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Title = (props) => {
  const [choosePrivacy, setChoosePrivacy] = useState(false);
  const [selectedPrivacy, setSelectedPrivacy] = useState('Publique');

  useEffect(() => {
    if (props.privacy === 'public') {
      setSelectedPrivacy('Publique');
    } else {
      setSelectedPrivacy('Privee');
    }
  });

  const { id } = useParams();
  // console.log(useParams());

  return (
    <>
      <div className='w-full flex flex-col justify-center'>
        <div className='w-full flex flex-col'>
          <div className='h-12 flex flex-row '>
            <div className='flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 rounded-sm text-red-500'>
              <img className='w-12 h-12' src='images/avatar.png' />
              <label className=''>
                <RiRadioButtonLine
                  className='block -ml-4 mt-8 text-yellow-400'
                  size='1.2em'
                />
              </label>
            </div>
            <div className='w-full px-4 right-0 mx-auto'>
              <div className='block float-left'>
                <div className='text-md font-bold text-gray-50'>
                  Animated Youtube Logo
                </div>
                <div className='font-bold text-sm text-gray-50'>Mode Tech</div>
              </div>
              <div className='float-right absolute right-16 sm:right-12'>
                <label className='px-2 bg-gray-200 rounded-sm cursor-pointer'>
                  <span
                    className='text-gray-500 font-bold'
                    style={{ fontSize: '12px' }}
                  >
                    web
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-row justify-center'>
          <div className='w-1/3 text-center border-r-2 border-gray-50'>
            <label className='space-x-1'>
              <a href='#'>
                <RiArrowUpSLine
                  className='inline text-sm text-gray-50 font-bold'
                  size='2em'
                />
              </a>
              <span className='inline text-sm text-gray-50 font-bold cursor-pointer'>
                +104
              </span>
              <a href='#'>
                <RiArrowDownSLine
                  className='inline text-sm text-gray-50 font-bold'
                  size='2em'
                />
              </a>
            </label>
          </div>
          {/* Button comment  */}

          <button className='w-1/3 text-center border-r-2 border-gray-50'>
            <Link to={`/code-comment/${id}/comments`}>
              <label className='space-x-1 cursor-pointer'>
                <MdComment className='inline text-white' size='1.2em' />
                <span
                  className='text-white font-bold text-sm pt-6'
                  style={{ fontSize: '12px' }}
                >
                  1004
                </span>
              </label>
            </Link>
          </button>

          {/* END Button comment  */}
          <div className='w-1/3 text-center'>
            <label className='space-x-1'>
              <FaGlobeAmericas className='inline text-white' size='1.2em' />
              <span
                className='text-white font-bold text-sm pt-6 uppercase'
                style={{ fontSize: '12px' }}
              >
                {selectedPrivacy}
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
