import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { SHOW_COURSE } from '../../services/queries/CoursesQueries';
import { SHOW_LESSON_VIDEO } from '../../services/queries/LessonVideoQueries';

import { INIT_STUDENT_X_LESSON } from "../../services/mutations/StudentXLessonMutations"



import VideoLessonComponent from './components/VideoLessonComponent/VideoLessonComponent';

const currentUser = sessionStorage.getItem("currentUser");


let VideoLesson = () => {
  const [ sxl, setSxl ] = useState()
  const { course_id, lesson_video_id } = useParams();
  const { loading: videoLoading, error: videoError, data: videoData } = useQuery(SHOW_LESSON_VIDEO(lesson_video_id));
  const { loading: courseLoading, error: courseError, data: courseData } = useQuery(SHOW_COURSE(course_id));
  const [initStudentXLesson, { data }] = useMutation(INIT_STUDENT_X_LESSON);

  
  
  if (videoLoading) return <p>Loading...</p>;
  if (videoError) return <p>Error :(</p>;
  
  if(videoData && sessionStorage.getItem("SXLs")) {
    let SXLs = JSON.parse(sessionStorage.getItem("SXLs"))
    let SXL = SXLs.filter(sxl => sxl.l === videoData.lessonVideo.lesson.id)[0]
    if(SXL === undefined){
      initStudentXLesson({ 
        variables: {
          isAchieved: false, 
          studentId: parseInt(JSON.parse(currentUser).data.data.id), 
          lessonId: parseInt(videoData.lessonVideo.lesson.id) 
        } 
      })
      SXLs.push({ s: JSON.parse(currentUser).data.data.id, l: videoData.lessonVideo.lesson.id})
      sessionStorage.setItem("SXLs", JSON.stringify(SXLs))
    }
  }
  if (courseLoading) return <p>Loading...</p>;
  if (courseError) return <p>Error :(</p>;
  return (
    <>
      <VideoLessonComponent key={courseData.id} course={courseData.course} lessonVideo={videoData.lessonVideo} currentUser={currentUser} />
    </>
  )
}

export default VideoLesson;