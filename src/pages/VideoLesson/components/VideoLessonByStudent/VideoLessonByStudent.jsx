import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { SHOW_COURSE } from '../../../../services/queries/CoursesQueries';
import { SHOW_LESSON_VIDEO } from '../../../../services/queries/LessonVideoQueries';
import { STUDENT_X_LESSON_BY_ID_AND_STUDENT_ID } from "../../../../services/queries/StudentXLessonQueries";

import { INIT_STUDENT_X_LESSON } from "../../../../services/mutations/StudentXLessonMutations"

import Progressbar from '../Progressbar/Progressbar';
import ContinueButton from '../ContinueButton/ContinueButton';  
import Title from '../Title/Title';

const currentUser = sessionStorage.getItem("currentUser");

let VideoLessonByStudent = (props) => {
  const { loading: videoLoading, error: videoError, data: videoData } = useQuery(SHOW_LESSON_VIDEO(props.lessonVideoId));
  const { loading: courseLoading, error: courseError, data: courseData } = useQuery(SHOW_COURSE(props.courseId));
  const [initStudentXLesson, { data }] = useMutation(INIT_STUDENT_X_LESSON);
  const [ sxl, setSxl ] = useState(props.sxl)

  if (videoLoading) return <p>Loading...</p>;
  if (videoError) return <p>Error :(</p>;
  if (videoData) {
    console.log(videoData)
    if(currentUser){
      if(sxl === null ){
        initStudentXLesson({ 
          variables: {
            isAchieved: false, 
            studentId: parseInt(JSON.parse(currentUser).data.data.id), 
            lessonId: parseInt(videoData.lessonVideo.lesson.id) 
          } 
        })
        setSxl(data)
      }
    }
  }

  if (courseLoading) return <p>Loading...</p>;
  if (courseError) return <p>Error :(</p>;
  if (courseData) console.log(courseData)


  return (
    <>
      <section className="bg-white">
        <div className="container pt-3 pb-6 px-6 mx-auto">
          <Progressbar/>
        </div>
      </section>
      {/* Section Titre */}
      <section className="bg-white">
        <div className="container pb-6 px-6 mx-auto">
          <Title course={ courseData.course } videoLessonId={ videoData.lessonVideo.id } />
        </div>
      </section>
      {/* Fin Section Titre */}
      {/* Section Titre */}

      <div className="block h-screen overflow-y-auto pb-96">
        <section className="bg-white">
          <div className="container pt-3 pb-2 px-6 mx-auto w-3/5" style={{ height: "53vh" }}>
          <iframe className="block w-full h-full"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
          </iframe>
          </div>
        </section>
        {/* Fin Section Titre */}
        <section className="bg-white">
          <div className="container pb-2 px-6 mx-auto">
            <div className="text-center w-full md:w-1/4 mt-8 mx-auto">
              <ContinueButton courseId={ courseData.course.id } lessonId={ videoData.lessonVideo.lesson.id } />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default VideoLessonByStudent;