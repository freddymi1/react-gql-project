import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { RiFileCodeLine, RiFileUnknowLine } from "react-icons/ri";
import { BiError } from "react-icons/bi";
import OtherCodeEditor from '../OtherCodeEditor/OtherCodeEditor';

import { ToastContainer, toast } from 'react-toastify'

import ErrorNotification from "../../../ErrorNotification/ErrorNotification";
import SuccessNotification from "../../../SuccessNotification/SuccessNotification";

import { STUDENT_X_LESSON_BY_STUDENT_ID_AND_LESSON_ID } from '../../../../../../services/queries/StudentXLessonQueries';
import { STUDENT_X_EXERCISE_BY_STUDENT_ID_AND_EXERCISE_ID } from '../../../../../../services/queries/StudentXExerciseQueries';

import { UPDATE_STUDENT_X_LESSON } from '../../../../../../services/mutations/StudentXLessonMutations';
import { UPDATE_STUDENT_XP } from '../../../../../../services/mutations/StudentMutations';
import { UPDATE_STUDENT_X_EXERCISE } from '../../../../../../services/mutations/MutationsStudentXExercise';


const currentUser = sessionStorage.getItem("currentUser")

export default function ContaintCodeEditor(props){
    const { lesson_id } = useParams();
    let [ showIndication, setShowIndication ] = useState(true)
    let [ showCode, setShowCode ] = useState(false)
    let [ showResult, setShowResult ] = useState(false)
    let [ studentCode, setStudentCode ] = useState("")

    const { loading: SXLLoading, error: SXLError, data: SXLData } = useQuery(STUDENT_X_LESSON_BY_STUDENT_ID_AND_LESSON_ID(JSON.parse(currentUser).data.data.id, lesson_id));
    const { loading: SXELoading, error: SXEError, data: SXEData } = useQuery(STUDENT_X_EXERCISE_BY_STUDENT_ID_AND_EXERCISE_ID(JSON.parse(currentUser).data.data.id, props.exercise.id));
    
    const [updateStudentXLesson] = useMutation(UPDATE_STUDENT_X_LESSON);
    const [updateStudentXp] = useMutation(UPDATE_STUDENT_XP);
    const [updateStudentXExercise] = useMutation(UPDATE_STUDENT_X_EXERCISE);

    const compareCode = (studentCode) => {
      if(studentCode === JSON.parse(props.exercise.solution)[0]) {
        toast.success(<SuccessNotification message="Felicitations"/>)
        if(SXLData) {
          if(SXLData.studentXLessonByStudentIdAndLessonId.isAchieved === false) {
            updateStudentXLesson({
              variables: {
                id: parseInt(SXLData.studentXLessonByStudentIdAndLessonId.id),
                isAchieved: true,
                studentId: parseInt(JSON.parse(currentUser).data.data.id),
                lessonId: parseInt(lesson_id)
              }
            })
            let xps = 0
            props.exercise.exerciseCriteriums.map(xp => {
              xps += xp.xp
            })
            updateStudentXp({
              variables: {
                id: parseInt(JSON.parse(currentUser).data.data.id),
                totalXp: JSON.parse(currentUser).data.data.total_xp + xps
              }
            })

            updateStudentXExercise({
              variables: {
                id: SXEData.studentXExerciseByStudentIdAndExerciseId.id,
                exerciseId: props.exercise.id,
                studentId: parseInt(JSON.parse(currentUser).data.data.id)
              }
            })

            let newCurrentUser = JSON.parse(currentUser)
            newCurrentUser.data.data.total_xp += xps
            sessionStorage.setItem("currentUser", JSON.stringify(newCurrentUser))
          }
          
          setTimeout(() => window.location.href = "/learning/" + lastLearning, 1000)
        }
      } else {
        toast.error(<ErrorNotification message="Veuillez verifier vos code"/>)
      }
    }

    let lastLearning = sessionStorage.getItem("ll")
    if(!lastLearning) {
      <Redirect to="/"/>
    }

    console.log("FFFFFFFFFFFFFFF", props.exercise)

    return(
        <>
            <div className="tab w-full mb-6 overflow-hidden flex flex-row">
              <div className="w-1/6 pr-5 text-gray-700">
                <button 
                  onClick={ 
                    e => {
                      setShowIndication(true)
                      setShowCode(false)
                      setShowResult(false)
                    } 
                  }
                  className="block mb-5 px-6 py-3 w-full text-gray-700 bg-gray-200 rounded shadow hover:shadow-md outline-none focus:outline-none">
                  <RiFileUnknowLine className="inline mr-2" size="2em" />
                  <span>Indication</span>
                </button>
                <button
                  onClick={ 
                    e => {
                      setShowIndication(false)
                      setShowCode(true)
                      setShowResult(false)
                    } 
                  }
                  className="block mb-5 px-6 py-3 w-full text-gray-700 bg-gray-200 rounded shadow hover:shadow-md outline-none focus:outline-none">
                  <RiFileCodeLine className="inline mr-2" size="2em" />
                  <span>Code</span>
                </button>
                <button
                  className="bg-green-700 w-full px-6 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-3 shadow hover:shadow-lg outline-none focus:outline-none"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                  onClick={ 
                    e => {
                      setShowIndication(false)
                      setShowCode(false)
                      setShowResult(true)
                      compareCode(studentCode)
                    } 
                  }>
                  RUN
                </button>
              </div>
              <div className="w-5/6 overflow-auto" style={{ height: "60vh" }}>
                <div className={ (showIndication ? "h-full opacity-100" : "h-0 overflow-hidden opacity-0") + " w-full" } style={{ transition: "opacity .3s ease" }}>
                  <div className="leading-normal border-l-2 border-indigo-200 px-5 mb-5 text-gray-700 font-light">
                  { props.exercise.hint }
                  </div>
                  <ul>
                    <li className="leading-normal shadow w-1/2 px-5 py-3 mb-5 border-l-4 border-yellow-500 rounded text-gray-700 flex flex-row items-center"><BiError className="mr-5 text-yellow-500" size="2.5em" />Mettre quelques choses</li>
                    <li className="leading-normal shadow w-1/2 px-5 py-3 mb-5 border-l-4 border-yellow-500 rounded text-gray-700 flex flex-row items-center"><BiError className="mr-5 text-yellow-500" size="2.5em" />Mettre quelques choses</li>
                    <li className="leading-normal shadow w-1/2 px-5 py-3 mb-5 border-l-4 border-yellow-500 rounded text-gray-700 flex flex-row items-center"><BiError className="mr-5 text-yellow-500" size="2.5em" />Mettre quelques choses</li>
                  </ul>
                </div>
                <div className={ (showCode ? "h-full opacity-100" : "h-0 overflow-hidden opacity-0") + " w-full" } style={{ transition: "opacity .3s ease" }} >
                  <OtherCodeEditor exercise={props.exercise} studentCode={setStudentCode} />
                </div>
                <div className={ (showResult ? "h-full opacity-100" : "h-0 overflow-hidden opacity-0") + " w-full" } style={{ transition: "opacity .3s ease" }} >
                  <iframe className="block w-full h-full shadow-lg border-2 border-gray-200 rounded" id="runCode"></iframe>
                </div>
              </div>
          </div>
          <ToastContainer 
            toastClassName="toast"
            position="top-left"
            autoClose={15000}
            showProgressBar
            newestOnTop={true}
            closeOnClick
          >
          </ToastContainer>
        </>
    )

}