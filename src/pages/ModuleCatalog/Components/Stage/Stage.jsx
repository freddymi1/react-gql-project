import React from 'react';
import Modal from 'react-modal';

import { COUNT_LEARNING_BY_STAGE } from '../../../../services/queries/StagesQueries';

import Learning from '../Learnings/Learning';

import { useQuery } from '@apollo/client';
// const customStyles = {
//   overlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(255, 255, 255, 0.75)',
//   },
//   content: {
//     position: 'absolute',
//     top: '40px',
//     left: '40px',
//     right: '40px',
//     bottom: '40px',
//     border: '1px solid #ccc',
//     background: '#fff',
//     overflow: 'auto',
//     WebkitOverflowScrolling: 'touch',
//     borderRadius: '4px',
//     outline: 'none',
//     padding: '20px',
//     margin: '0 40px 40px 40px',
//   },
// };

Modal.setAppElement('#root');
export default function Stage(props) {
  const { loading: CLSLoading, error: CLSError, data: CLSData } = useQuery(
    COUNT_LEARNING_BY_STAGE(props.stage.id)
  );

  if (CLSLoading) return <p>Loading...</p>;
  if (CLSError) return <p>Erreur</p>;
  // if(CLSData) console.log(CLSData.countLearnings)

  const learningArray = [];

  props.stage.learnings.map((learning) => {
    learningArray.push(<Learning key={learning.id} learning={learning} />);
  });

  return (
    <>
      <div className={'container' + props.stage.id + 'pt-3 py-6 px-6 mx-auto'}>
        <div className="bg-white">
          <label className="mb-4 font-semibold text-gray-500 dark:text-gray-300">
            <img
              src="./images/html.png"
              alt="Logo html 5"
              className="w-7 inline mr-2"
            />
            {props.stage.title}
          </label>
        </div>
        <div className="mt-4 w-full justify-items-auto">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {learningArray.sort((a, b) => a.key + b.key)}
          </div>
        </div>
        <div className="w-full">
          <label className="text-gray-400 text-sm">
            {CLSData.countLearnings + ' learnings'}
          </label>
        </div>
      </div>
    </>
  );
}
