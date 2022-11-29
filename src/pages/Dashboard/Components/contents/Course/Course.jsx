import React from 'react';
import { STUDENT_X_COURSES_BY_STUDENT_ID } from '../../../../../services/queries/StudentXCourseQueries'; // '../../../../../services/queries/StudentXCourseQueries';
import { useQuery } from '@apollo/client';

import CardCourse from './CardCourse/CardCourse';
const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

const Course = (props) => {
  const { loading: sxcLoading, error: sxcError, data: sxcData } = useQuery(
    STUDENT_X_COURSES_BY_STUDENT_ID(currentUser.data.data.id)
  );

  if (sxcLoading) return <p>Loading...</p>;
  if (sxcError) return <p>error :(</p>;
  if (sxcData) console.log(sxcData.studentXCoursesByStudentId);

  props.count(sxcData.studentXCoursesByStudentId.length);
  const courseCard = [];
  sxcData.studentXCoursesByStudentId.map((sxc) => {
    // console.log(sxl.learning);
    courseCard.push(
      <CardCourse
        key={sxc.id}
        learningId={sxc.course.learningXCourses[0].learning.id}
        courseTitle={sxc.course.title}
        coursePic={sxc.course.pic}
        createdAt={sxc.createdAt}
        updatedAt={sxc.updatedAt}
      />
    );
  });

  for (let i = courseCard.length - 1; i >= 0; i--) {
    // console.log(learningData[i].learning);
    for (let j = 0; j < courseCard.length; j++) {
      if (courseCard[i]) {
        if (courseCard[j]) {
          if (
            courseCard[i].props.courseTitle ===
              courseCard[j].props.courseTitle &&
            i !== j
          ) {
            courseCard.splice(i, 1);
          }
        }
      }
    }
  }

  props.count(courseCard.length);

  return (
    <>
      {courseCard.length !== 0 ? (
        <div className='px-6 py-4 w-full justify-items-auto'>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {courseCard}
          </div>
        </div>
      ) : (
        <div className='flex flex-row w-full justify-center bg-white text-center block mt-8'>
          <h1 className='mb-4 font-semibold uppercase text-gray-500 dark:text-gray-300'>
            AUCUNE COURS SUIVI
          </h1>
        </div>
      )}
    </>
  );
};

export default Course;
