import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { SHOW_COURSE } from '../../services/queries/CoursesQueries';
import { SHOW_LESSON } from '../../services/queries/LessonsQueries';

import QuizzComponent from './components/QuizzComponent';

// sessionStorage.setItem('studentChoices', '');
const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

const Quizz = () => {
  const { course_id, lesson_id } = useParams();
  const [sxq, setSxq] = useState([]);
  const [studentResponses, setStudentResponses] = useState([]);
  const [isAchieved, setIsAchieved] = useState([]);
  const [defaultResp, setDefaultResp] = useState([]);

  const {
    loading: lessonLoading,
    error: lessonError,
    data: lessonData,
  } = useQuery(SHOW_LESSON(lesson_id));

  const {
    loading: courseLoading,
    error: courseError,
    data: courseData,
  } = useQuery(SHOW_COURSE(course_id));

  if (lessonLoading) return <p>Loading...</p>;
  if (lessonError) return <p>Error :(</p>;
  // if (lessonData) console.log(lessonData);

  if (courseLoading) return <p>Loading...</p>;
  if (courseError) return <p>Error :(</p>;
  // if (courseData) console.log(courseData);

  const addStudentResponses = (s) => {
    let subs = studentResponses;
    let filterResponse = subs.filter(
      (r) => r.studentResponse === s.studentResponse
    );
    if (filterResponse.length === 0) {
      subs = subs.filter((q) => q.ask !== s.ask);
      subs.push(s);
      setStudentResponses(subs);
      sessionStorage.setItem('studentChoices', JSON.stringify(subs));
    }
  };

  let quizzIds = [];

  const lessonQ = lessonData.lesson.quizzs;
  lessonQ.map((quizz) => {
    quizzIds.push(quizz.id);
  });

  return (
    <>
      <QuizzComponent
        currentUser={currentUser}
        lessonData={lessonData}
        courseData={courseData}
        courseId={courseData.course.id}
        lessonVideoId={
          lessonData.lesson.lessonVideo ? lessonData.lesson.lessonVideo.id : 0
        }
        lessonId={lessonData.lesson.id}
        course={courseData.course}
        addStudentResponses={addStudentResponses}
        userId={currentUser.data.data.id}
        setSxq={setSxq}
        sxq={sxq}
        setIsAchieved={setIsAchieved}
        setDefaultResp={setDefaultResp}
        lessonQuizzs={lessonData.lesson.quizzs}
        sxqIds={sxq.filter((value, index) => sxq.indexOf(value) === index)}
        isAchieved={isAchieved.filter(
          (value, index) => isAchieved.indexOf(value) === index
        )}
      />
    </>
  );
};

export default Quizz;
