import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Progressbar from './components/Progressbar/Progressbar'; 
import Title from './components/Title/Title';
import ExerciseContent from './components/ExerciseContent/ExerciseContent'

import { SHOW_COURSE } from '../../../../services/queries/CoursesQueries';
import { SHOW_LESSON } from '../../../../services/queries/LessonsQueries';


const ExerciseV3 = (props) => {
  const { course_id, lesson_id } = useParams();
  const [ studentResponses, setStudentResponses ] = useState([])
  const { loading: lessonLoading, error: lessonError, data: lessonData } = useQuery(SHOW_LESSON(lesson_id));
  const { loading: courseLoading, error: courseError, data: courseData } = useQuery(SHOW_COURSE(course_id));

  if (lessonLoading) return <p>Loading...</p>;
  if (lessonError) return <p>Error :(</p>;

  if (courseLoading) return <p>Loading...</p>;
  if (courseError) return <p>Error :(</p>;

  return (
    <>
      <section className="bg-white">
        <div className="container pt-3 pb-6 px-6 mx-auto">
            {
                lessonData.lesson.lessonVideo === null ? (
                <Progressbar courseId={ courseData.course.id } lessonVideoId={ 0 } lessonId={ lessonData.lesson.id } />
                ) : (
                <Progressbar courseId={ courseData.course.id } lessonVideoId={ lessonData.lesson.lessonVideo.id } lessonId={ lessonData.lesson.id } />
                )
            }
        </div>
      </section>
      {/* Section Titre */}
      <section className="bg-white">
        <div className="container pt-3 pb-6 px-6 mx-auto">
          <Title course={ courseData.course } lessonId={ lessonData.lesson.id } exercise={props.exercise}/>
        </div>
      </section>
      {/* Fin Section Titre */}
      {/* Section Titre */}

      <div className="block h-screen overflow-y-auto pb-96">
        <section className="bg-white">
          <div className="container pt-3 pb-2 px-6 mx-auto">
            <ExerciseContent exercise={props.exercise} />
          </div>
        </section>
      </div>
    </>
  )
}

export default ExerciseV3;