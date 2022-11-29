import React from 'react';
import CardLearning from './CardLearning/CardLearning';
import { useQuery } from '@apollo/client';

import { STUDENT_X_LEARNINGS_BY_STUDENT_ID } from '../../../../../services/queries/StudentXLearningQueries';

const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

const Module = (props) => {
  const { loading: sxlLoading, error: sxlError, data: sxlData } = useQuery(
    STUDENT_X_LEARNINGS_BY_STUDENT_ID(currentUser.data.data.id)
  );

  if (sxlLoading) return <p>Loading...</p>;
  if (sxlError) return <p>Error :(</p>;
  if (sxlData) console.log(sxlData);

  // console.log(sxlData.studentXLearningsByStudentId);

  const learningCard = [];
  sxlData.studentXLearningsByStudentId.map((sxl) => {
    // console.log(sxl.learning);
    learningCard.push(
      <CardLearning
        key={sxl.id}
        learningId={sxl.learning.id}
        learningTitle={sxl.learning.title}
        learningPic={sxl.learning.pic}
        learningDesc={sxl.learning.description}
        createdAt={sxl.createdAt}
        updatedAt={sxl.updatedAt}
      />
    );
  });

  // for (let i = 0; i < learningCard.length; i++) {
  //   // console.log(learningData[i].learning);
  //   for (let j = learningCard.length; j >= 0; j--) {
  //     if (learningCard[i]) {
  //       if (learningCard[j]) {
  //         if (
  //           learningCard[i].props.learningTitle ===
  //             learningCard[j].props.learningTitle &&
  //           i !== j
  //         ) {
  //           learningCard.splice(i, 1);
  //         }
  //       }
  //     }
  //   }
  // }

  for (let i = learningCard.length - 1; i >= 0; i--) {
    // console.log(learningData[i].learning);
    for (let j = 0; j < learningCard.length; j++) {
      if (learningCard[i]) {
        if (learningCard[j]) {
          if (
            learningCard[i].props.learningTitle ===
              learningCard[j].props.learningTitle &&
            i !== j
          ) {
            learningCard.splice(i, 1);
          }
        }
      }
    }
  }

  props.count(learningCard.length);

  // console.log(learningCard);

  return (
    <>
      {learningCard.length !== 0 ? (
        <div className='px-6 py-4 w-full justify-items-auto'>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {learningCard}
          </div>
        </div>
      ) : (
        <div className='flex flex-row w-full justify-center bg-white text-center block mt-8'>
          <h1 className='mb-4 font-semibold uppercase text-gray-500 dark:text-gray-300'>
            AUCUNE MODULE SUIVI
          </h1>
        </div>
      )}
    </>
  );
};

export default Module;
