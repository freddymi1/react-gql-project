import React from 'react';
import Progressbar from './Progressbar/Progressbar';
import ContinueButton from './ContinueButton/ContinueButton';
import Title from './Title/Title';
import LessonContent from './LessonContent/LessonContent';

const LessonComponent = ({
  courseId,
  lessonVideoId,
  lessonId,
  course,
  lesson,
  lessonData,
}) => {
  return (
    <>
      <section className="bg-white">
        <div className="container pt-3 pb-6 px-6 mx-auto">
          {lessonData.lesson.lessonVideo === null ? (
            <Progressbar
              courseId={courseId}
              lessonVideoId={lessonVideoId}
              lessonId={lessonId}
            />
          ) : (
            <Progressbar
              courseId={courseId}
              lessonVideoId={lessonVideoId}
              lessonId={lessonId}
            />
          )}
        </div>
      </section>
      {/* Section Titre */}
      <section className="bg-white">
        <div className="container pb-6 px-6 mx-auto">
          <Title course={course} lessonId={lessonId} />
        </div>
      </section>
      {/* Fin Section Titre */}
      {/* Section Titre */}

      <div className="block h-screen overflow-y-auto pb-96">
        <section className="bg-white">
          <div className="container pt-3 pb-2 px-6 mx-auto">
            <LessonContent lesson={lesson} />
          </div>
        </section>
        {/* Fin Section Titre */}
        <section className="bg-white">
          <div className="container pb-2 px-6 mx-auto">
            <div className="text-center w-full md:w-1/4 mt-8 mx-auto">
              <ContinueButton courseId={courseId} lessonId={lessonId} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LessonComponent;
