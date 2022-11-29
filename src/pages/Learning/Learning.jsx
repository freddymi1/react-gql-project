import React from "react";
import { useParams, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Course from './components/Course/Course';

import { SEARCH_LEARNING_COURSES } from '../../services/queries/LearningXCourseQueries';
import { STUDENT_X_LEARNING_BY_ID_AND_STUDENT_ID } from "../../services/queries/StudentXLearningQueries";

import Progressbar from "./components/Progressbar/Progressbar";


const currentUser = sessionStorage.getItem("currentUser")

const Learning = currentUser ? () => {
  const { id } = useParams();
 console.log(id)
  const { loading: learningLoading, error: learningError, data: learningData } = useQuery(SEARCH_LEARNING_COURSES(id));
  const { loading: lxsLoading, error: lxsError, data: lxsData } = useQuery(STUDENT_X_LEARNING_BY_ID_AND_STUDENT_ID(id, JSON.parse(currentUser).data.data.id));


  if (learningLoading) return <p>Loading...</p>;
  // if (learningError) return <p>Error :(</p>;
  if (learningData) console.log(learningData)

  if (lxsLoading) return <p>Loading...</p>;
  // if (SXCError) return <p>Error :(</p>;
  if (lxsData) console.log(lxsData)
  

  if(!currentUser || !lxsData) {
    return(
      <Redirect to="/" />
    )
  }


  sessionStorage.setItem("SXLs", "[]")

  const courseArray = [];

  learningData.learningXCoursesByLearningId.map((learningXCourse) => (
    courseArray.push(<Course key={ learningXCourse.id } learning={learningXCourse.learning} course={ learningXCourse.course } />)
  ))
  
  return(
    <>
     <div className="block pl-14 pr-14 pt-11">
       {
         learningData.learningXCoursesByLearningId.map((sxc) => (
          <Progressbar key={ sxc.id } course={sxc.course} />
         ))
       }
     </div>
     <div className="block pl-14 pr-14 pt-5 mt-5 overflow-auto" style={{ height: "100vh" }}>
        {
          courseArray.sort((a, b) => b.key - a.key)
        }
       
     </div>

    </>
  )
}
: () => {
  const {id} = useParams();
  const { loading: learningLoading, error: learningError, data: learningData } = useQuery(SEARCH_LEARNING_COURSES(id));

  return(
    <>
     <div className="block pl-14 pr-14 pt-11">
       <div className="w-full bg-gray-300 rounded-lg">
         <div className="p-2 bg-yellow-300 rounded-lg"></div>
       </div>
     </div>
     <div className="block pl-14 pr-14 pt-5 mt-5 overflow-auto" style={{ height: "100vh" }}>
      {
         learningData.learningXCoursesByLearningId.map((learningXCourse) => (
           <Course key={ learningXCourse.id } course={ learningXCourse.course } learningId={ id } studentId={currentUser.data.data.id}/>
         ))
      }
       
     </div>

    </>
  )
}
export default Learning;