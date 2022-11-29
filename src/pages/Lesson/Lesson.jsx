import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { SHOW_COURSE } from '../../services/queries/CoursesQueries';
import { SHOW_LESSON } from '../../services/queries/LessonsQueries';

import LessonComponent from './components/LessonComponent';

import { INIT_STUDENT_X_LESSON } from '../../services/mutations/StudentXLessonMutations';

const currentUser = sessionStorage.getItem('currentUser');

let Lesson = () => {
  const { course_id, lesson_id } = useParams();

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
  const [initStudentXLesson, { data }] = useMutation(INIT_STUDENT_X_LESSON);

  // useEffect(() => {
  //   (e) => {
  //     window.location.reload();
  //   };
  // }, []);

  if (lessonLoading) return <p>Loading...</p>;
  if (lessonError) return <p>Error :(</p>;
  if (lessonData && sessionStorage.getItem('SXLs')) {
    let SXLs = JSON.parse(sessionStorage.getItem('SXLs'));
    let SXL = SXLs.filter((sxl) => sxl.l === lessonData.lesson.id)[0];
    if (SXL === undefined) {
      initStudentXLesson({
        variables: {
          isAchieved: false,
          studentId: parseInt(JSON.parse(currentUser).data.data.id),
          lessonId: parseInt(lessonData.lesson.id),
        },
      });
      SXLs.push({
        student: JSON.parse(currentUser).data.data.id,
        lesson: lessonData.lesson.id,
      });
      sessionStorage.setItem('SXLs', JSON.stringify(SXLs));
    }
  }

  if (courseLoading) return <p>Loading...</p>;
  if (courseError) return <p>Error :(</p>;
  if (courseData) console.log(courseData);

  return (
    <>
      <LessonComponent
        courseId={courseData.course.id}
        lessonVideoId={
          lessonData.lesson.lessonVideo ? lessonData.lesson.lessonVideo.id : 0
        }
        lessonId={lessonData.lesson.id}
        course={courseData.course}
        lesson={lessonData.lesson}
        lessonData={lessonData}
      />
    </>
  );
};

export default Lesson;
