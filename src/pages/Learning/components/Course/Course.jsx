import React from "react";
import $ from "jquery";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import AES from 'crypto-js/aes'
import CryptoJS from 'crypto-js'

import { STUDENT_X_LESSON_BY_ID_AND_STUDENT_ID,
  COUNT_IS_ACHIEVED_LESSON, COUNT_LESSON, STUDENT_X_LESSON_BY_LEARNING_ID } from "../../../../services/queries/StudentXLessonQueries";

import Lesson from "../Lesson/Lesson";

// const Cryptr = require('cryptr');
// const cryptr = new Cryptr('myTotalySecretKey');

const currentUser = sessionStorage.getItem("currentUser");
let GetSXL = (studentId, lessonId) => {
  const { loading: lessonLoading, error: lessonError, data: lessonData } = useQuery(STUDENT_X_LESSON_BY_ID_AND_STUDENT_ID(lessonId, studentId));
  if(lessonData) {
    const SXL = {
      s: studentId,
      l: lessonId
    }
    let SXLs = JSON.parse(sessionStorage.getItem('SXLs'))
    SXLs = SXLs.filter(sxl => sxl.l !== lessonId)
    SXLs.push(SXL)
    sessionStorage.setItem("SXLs", JSON.stringify(SXLs))

    return lessonData;
  }
  return null;
}

function Course(props) {
  
  // const {loading:IALLoading, error: IALError, data: IALData} = useQuery(COUNT_IS_ACHIEVED_LESSON(
  //   props.course.id,
  //   JSON.parse(currentUser).data.data.id,
  //   true
  // ))
  // // const {loading:CountLLoading, error: CountLError, data: CountLData} = useQuery(COUNT_LESSON(props.course.id))
  // const {loading: sxlbsLoading, error: sxlbsError, data: sxlbsdata} = useQuery(STUDENT_X_LESSON_BY_LEARNING_ID(
  //   props.learning.id,
  //   JSON.parse(currentUser).data.data.id,
  //   true
  // ))
  const courseXLEssonArray = [];
  props.course.courseXLessons.map((courseXLesson) => {
    let isSXL = GetSXL(JSON.parse(currentUser).data.data.id, courseXLesson.lesson.id)
    if( isSXL !== null && isSXL.studentXLessonByStudentIdAndLessonId.isAchieved){
      courseXLEssonArray.push(<Lesson key={ courseXLesson.id } courseId={ props.course.id } isAchieved={ true } lesson={ courseXLesson.lesson }  />)
    }
    // if(isSXL !== null && isSXL.studentXLessonByStudentIdAndLessonId.isAchieved=== false) {
    //    courseXLEssonArray.push(<Lesson key={ courseXLesson.id } courseId={ props.course.id } isActive={ true } lesson={ courseXLesson.lesson }  />)
    // }
    
    else {
        courseXLEssonArray.push(<Lesson key={ courseXLesson.id } courseId={ props.course.id } isActive={ false } lesson={ courseXLesson.lesson }  />)
    }
    
  });
  // console.log(JSON.parse(currentUser).data.data.id)
  // if(IALLoading) return <p>Loading...</p>
  // if(IALError) return <p>Error</p>
  // if(CountLLoading) return <p>Loading...</p>
  // if(CountLError) return <p>Error</p>
  // if(sxlbsLoading) return <p>Loading...</p>
  // if(sxlbsError) return <p>Error</p>
  // console.log(sxlbsdata.studentXLessonsByLearningId.length)
  // console.log("Lesson: "+ CountLData.countLessons)
  // console.log("IS Achieved Lesson: "+IALData.countIsAchievedLessons)
  // const listIsAchieved = []
  // listIsAchieved.push(IALData.countIsAchievedLessons)
  // console.log(listIsAchieved)

  // nbrLesson.push(CountLData.countLessons)
  // console.log(nbrLesson)
  

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // console.log(arrayXP.reduce(reducer))
  // let sommeIAL = listIsAchieved.reduce(reducer)
  // console.log("Somme is achieved lesson: "+sommeIAL)

  // let sommeLess = nbrLesson.reduce(reducer)
  // console.log("Somme lesseon: "+sommeLess)

  // let width = 0;
  // if(CountLData && IALData){
  //   width = (IALData.countIsAchievedLessons/CountLData.countLessons)*100;
  // }else{
  //   width = 0;
  // }

  // const styles = { width: `${width >= 0 ? width : 0}%` };
  // console.log(styles)
  
  return(
    <>
        <div className="relative left-14 block border-l-4 border-gray-300 pb-64">
    
          <div className="relative right-14 bg-white block flex flex-row items-center justify-start"
              onClick={
                e => {
                  if($(".lofc" + props.course.id).css("display") === "none"){
                    $(".lofc" + props.course.id).css("display", "flex")
                  } else {
                    $(".lofc" + props.course.id).css("display", "none")
                  }
                }
              }
          >
            <div className="w-28 h-28 border-4 border-green-700 shadow rounded-full overflow-hidden mr-10">
              <img className="w-28" src={ "http://82.165.206.170" + props.course.pic } />
            </div>
            <p className="text-3xl font-bold text-gray-600">
              { props.course.title }
            </p>
          </div>

          {
            currentUser ? (
              courseXLEssonArray.sort((a, b) => a.key + b.key)
            ) : (
              props.course.courseXLessons.map((courseXLesson) => (
                courseXLEssonArray.push(<Lesson key={ courseXLesson.id } courseId={ props.course.id } isActive={ false } lesson={ courseXLesson.lesson }  />)
              ))
            )
          }


        </div>
    </>
  )
}

export default Course;