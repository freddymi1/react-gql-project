import React from 'react';

import Progressbar from './Progressbar/Progressbar';
import ContinueButton from './ContinueButton/ContinueButton';
import Title from './Title/Title';
import Question from './Question/Question';

const QuizzComponent = (
  lessonData,
  // courseId,
  // lessonVideoId,
  // lessonId,
  // course,
  // quizzId,
  // quizz,
  addStudentResponses,
  // userId,
  setSxq,
  setIsAchieved,
  setDefaultResp,
  // lessonQuizzs,
  // sxqIds,
  isAchieved,
  courseData,
  sxq,
  currentUser
) => {
  // console.log(lessonData);
  return (
    <>
      {/* Section Titre */}
      <section className="bg-white">
        <div className="container pt-3 pb-6 px-6 mx-auto">
          {lessonData.lessonData.lesson.lessonVideo === null ? (
            <Progressbar
              courseId={lessonData.courseData.course.id}
              lessonVideoId={lessonData.lessonVideoId}
              lessonId={lessonData.lessonData.lesson.id}
            />
          ) : (
            <Progressbar
              courseId={courseData.course.id}
              lessonVideoId={lessonData.lesson.lessonVideo.id}
              lessonId={lessonData.lesson.id}
            />
          )}
        </div>
      </section>
      {/* Fin Section Titre */}
      {/* Section Titre */}
      <section className="bg-white">
        <div className="container pt-3 pb-6 px-6 mx-auto">
          <Title
            course={lessonData.courseData.course}
            lessonId={lessonData.lessonData.lesson.id}
          />
        </div>
      </section>

      <div className="block h-screen overflow-y-auto pb-96">
        <section className="bg-white">
          <div className="container pb-6 px-6 mx-auto">
            {lessonData.lessonData.lesson.quizzs.map((quizz) => (
              <Question
                key={quizz.id}
                quizz={quizz}
                addStudentResponses={addStudentResponses}
                userId={currentUser.data.data.id}
                setSxq={setSxq}
                setIsAchieved={setIsAchieved}
                setDefaultResp={setDefaultResp}
              />
            ))}
          </div>
        </section>
        {/* Fin radio button choix */}

        {/* Correction et continue btn */}
        <section className="bg-white">
          <div className="container pb-2 px-6 mx-auto">
            <div className="text-center w-full md:w-1/4 mt-8 mx-auto">
              <ContinueButton
                courseId={lessonData.courseData.course.id}
                lessonQuizzs={lessonData.lessonData.lesson.quizzs}
                lessonId={lessonData.lessonData.lesson.id}
                sxqIds={lessonData.sxq.filter(
                  (value, index) => sxq.indexOf(value) === index
                )}
                isAchieved={lessonData.isAchieved.filter(
                  (value, index) => isAchieved.indexOf(value) === index
                )}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuizzComponent;
