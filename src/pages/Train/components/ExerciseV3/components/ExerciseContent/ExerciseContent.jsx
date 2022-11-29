import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'

import { RiFileCodeLine, RiFileUnknowLine } from "react-icons/ri";
import { BiError } from "react-icons/bi";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/monokai.css';
import ReactHtmlParser from 'react-html-parser';

import { ToastContainer, toast } from 'react-toastify'

import SuccessNotification from "../../../SuccessNotification/SuccessNotification";

import { STUDENT_X_LESSON_BY_STUDENT_ID_AND_LESSON_ID } from '../../../../../../services/queries/StudentXLessonQueries';
import { STUDENT_X_EXERCISE_BY_STUDENT_ID_AND_EXERCISE_ID } from '../../../../../../services/queries/StudentXExerciseQueries';

import { UPDATE_STUDENT_X_LESSON } from '../../../../../../services/mutations/StudentXLessonMutations';
import { UPDATE_STUDENT_XP } from '../../../../../../services/mutations/StudentMutations';
import { UPDATE_STUDENT_X_EXERCISE } from '../../../../../../services/mutations/MutationsStudentXExercise';


const currentUser = sessionStorage.getItem("currentUser")

const ExerciseContent = (props) => {
  const { lesson_id } = useParams();

  const { loading: SXLLoading, error: SXLError, data: SXLData } = useQuery(STUDENT_X_LESSON_BY_STUDENT_ID_AND_LESSON_ID(JSON.parse(currentUser).data.data.id, lesson_id));
  const { loading: SXELoading, error: SXEError, data: SXEData } = useQuery(STUDENT_X_EXERCISE_BY_STUDENT_ID_AND_EXERCISE_ID(JSON.parse(currentUser).data.data.id, props.exercise.id));
  
  const [updateStudentXLesson] = useMutation(UPDATE_STUDENT_X_LESSON);
  const [updateStudentXp] = useMutation(UPDATE_STUDENT_XP);
  const [updateStudentXExercise] = useMutation(UPDATE_STUDENT_X_EXERCISE);

  const handleConfirmButton = () => {
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
  }

  let lastLearning = sessionStorage.getItem("ll")
  if(!lastLearning) {
    <Redirect to="/"/>
  }

  return (
      <>
          <div className="tab w-full mb-6 overflow-hidden flex flex-row">
              <div className="w-1/6 pr-5 text-gray-700">
                <button className="block mb-5 px-6 py-3 w-full text-gray-700 bg-gray-200 rounded shadow hover:shadow-md outline-none focus:outline-none"                >
                  <RiFileUnknowLine className="inline mr-2" size="2em" /><span>Indication</span>
                </button>
                
              </div>
              <div className="w-5/6 overflow-auto" style={{ height: "65vh" }}>
                <div className={ "h-full opacity-100 w-full" } style={{ transition: "opacity .3s ease" }}>
                  <div className="leading-normal border-l-2 border-indigo-200 px-5 mb-5 text-gray-700 font-light">
                    {
                      props.exercise.indications.map((i, key) => (
                        <React.Fragment key={ i.id } >
                          <div className="my-5">
                            { ReactHtmlParser(i.content) }
                          </div>
                          {
                            (JSON.parse(props.exercise.instruction) && JSON.parse(props.exercise.instruction)[key]) ? (
                              <CodeMirror
                                height="30vh"
                                value={JSON.parse(props.exercise.instruction)[key] ? JSON.parse(props.exercise.instruction)[key] : ""}
                                options={{
                                  theme: 'monokai',
                                  keyMap: 'sublime',
                                  tabSize: 2,
                                  mode: JSON.parse(props.exercise.language)[key].item_text,
                                  readOnly: true,
                                  autocorrect: true
                                }}
                              />
                            ) : (<></>)
                          }
                        </ React.Fragment>
                      ))
                    }
                  </div>
                  <ul>
                    <li className="leading-normal shadow w-1/2 px-5 py-3 mb-5 border-l-4 border-yellow-500 rounded text-gray-700 flex flex-row items-center"><BiError className="mr-5 text-yellow-500" size="2.5em" />Mettre quelques choses</li>
                    <li className="leading-normal shadow w-1/2 px-5 py-3 mb-5 border-l-4 border-yellow-500 rounded text-gray-700 flex flex-row items-center"><BiError className="mr-5 text-yellow-500" size="2.5em" />Mettre quelques choses</li>
                    <li className="leading-normal shadow w-1/2 px-5 py-3 mb-5 border-l-4 border-yellow-500 rounded text-gray-700 flex flex-row items-center"><BiError className="mr-5 text-yellow-500" size="2.5em" />Mettre quelques choses</li>
                  </ul>
                  <button
                  className="bg-green-700 w-full px-6 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-3 shadow hover:shadow-lg outline-none focus:outline-none"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                  onClick={
                    e => {
                      handleConfirmButton()
                    }
                  }
                  >
                  CONTINUER
                </button>
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

export default ExerciseContent;