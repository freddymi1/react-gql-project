import { Link } from 'react-router-dom';

import { GoRepo, GoTasklist } from 'react-icons/go';
import { RiCodeBoxFill } from 'react-icons/ri';
import { BiEuro } from "react-icons/bi";
import Stage from '../Stage/Stage';
import { useEffect } from 'react';

const StackComponent = (props) => {
    const stageArray = [];
    useEffect(() => {
      props.stages.map((stage) =>
          stageArray.push(<Stage key={stage.id} stage={stage} />)
      );
    })
    return(
    <div className='flex flex-row p-4'>
        <div className='w-1/2 p-4 bg-green-50 rounded-lg'>
          <div className='rounded-lg h-1/3 overflow-hidden'>
            <img
              className='rounded-lg w-full'
              src='https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyODkucG5n/original/VUZ6SV.png'
              alt='logo'
            />
          </div>
          <p className='text-left text-4xl text-gray-600 font-bold mt-8'>
            {props.title}
            <span className="relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-5 py-2 bg-green-600 text-white text-lg">20 &nbsp;<BiEuro className="inline-block mb-1" /></span>
          </p>
          <div className='flex flex-row mt-5 text-semibold text-gray-500'>
            <span className='grid grid-cols-2 grap-4 mr-5'>
              <GoTasklist
                size='1.5em'
                className='text-gray-500 inline-block'
              />
              <span className='inline-block'>
                &nbsp; 0/{props.stages.length}
              </span>
            </span>
            <span className='grid grid-cols-2 grap-4 mr-5'>
              <GoRepo size='1.5em' className='text-gray-500 inline-block' />
              <span className='inline-block'>0/90</span>
            </span>
            <span className='grid grid-cols-2 grap-4 mr-5'>
              <RiCodeBoxFill
                size='1.5em'
                className='text-gray-500 inline-block'
              />
              <span className='inline-block'>0/75</span>
            </span>
          </div>
          <p className='text-left font-light p-2 mt-8 mb-8'>
            {props.description}
          </p>
          {
            props.currentUser ? (

              <Link to="/stack-payment" tabIndex="-1" className="block focus:outline-none w-32 py-2 rounded-md font-semibold text-center text-white bg-indigo-500 focus:ring-4 focus:ring-indigo-300">
                Acheter
              </Link>

            ) : (

              <Link to="/login" tabIndex="-1" className="block focus:outline-none w-32 py-2 rounded-md font-semibold text-center text-white bg-indigo-500 focus:ring-4 focus:ring-indigo-300">
                Acheter
              </Link>

            )
          }
        </div>
        <div className='overflow-y-auto h-screen w-1/2 pl-4 pb-96'>
          {stageArray.sort((a, b) => a.key - b.key)}
        </div>
      </div>
    )
  }
  export default StackComponent;