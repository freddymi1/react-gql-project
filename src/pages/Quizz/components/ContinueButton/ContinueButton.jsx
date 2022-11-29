import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  INIT_STUDENT_X_QUIZZ,
  UPDATE_STUDENT_X_QUIZZ,
} from '../../../../services/mutations/StudentXQuizzMutations';
import { UPDATE_STUDENT_XP } from '../../../../services/mutations/StudentMutations';

import SuccessNotif from './Components/SuccessNotif';
import ErrorNotif from './Components/ErrorNotif';

import './Style/style.css';

const currentUser = sessionStorage.getItem('currentUser');

toast.configure();
const ContinueButton = (props) => {
  // const [isRedirect, setIsRedirect] = useState(false);
  // const [initStudentXQuizz, { data }] = useMutation(INIT_STUDENT_X_QUIZZ);
  const [updateStudentXQuizz, { data }] = useMutation(UPDATE_STUDENT_X_QUIZZ);
  const [updateStudentXp] = useMutation(UPDATE_STUDENT_XP);

  const [isSuccess, setIsSuccess] = useState(false);

  const checkQuizzResponses = () => {
    let studentQuizzs = sessionStorage.getItem('studentChoices');
    let trueResponses = [];

    if (studentQuizzs) {
      studentQuizzs = JSON.parse(studentQuizzs);

      props.lessonQuizzs.map((lq) => {
        studentQuizzs.map((sq) => {
          if (trueResponses.length === 0) {
            if (sq.studentResponse === lq.answer && sq.ask === lq.ask) {
              trueResponses.push({
                ask: lq.ask,
                answer: lq.answer,
                studentAnswer: sq.studentResponse,
              });
            }
          } else {
            if (sq.studentResponse === lq.answer && sq.ask === lq.ask) {
              trueResponses.push({
                ask: lq.ask,
                answer: lq.answer,
                studentAnswer: sq.studentResponse,
              });
            }
          }
        });
      });
      if (trueResponses.length === props.lessonQuizzs.length) {
        toast.success(<SuccessNotif />);
        props.lessonQuizzs.map((lq) => {
          props.sxqIds.map((sxqId) => {
            // console.log(sxqId);
            updateStudentXQuizz({
              variables: {
                id: sxqId,
                isAchieved: true,
                studentId: parseInt(JSON.parse(currentUser).data.data.id),
                quizzId: parseInt(lq.id),
              },
            });
            setTimeout(() => setIsSuccess(true), 1000);
            // setIsSuccess(true);
          });
        });
        updateStudentXp({
          variables: {
            id: parseInt(JSON.parse(currentUser).data.data.id),
            totalXp: JSON.parse(currentUser).data.data.total_xp + xps,
          },
        });
        let newCurrentUser = JSON.parse(currentUser);
        newCurrentUser.data.data.total_xp += xps;
        sessionStorage.setItem('currentUser', JSON.stringify(newCurrentUser));
      } else if (props.isAchieved.toString() === 'true') {
        toast.success(<SuccessNotif />);
        setTimeout(() => setIsSuccess(true), 1000);
      } else {
        toast.error(<ErrorNotif />);
        setIsSuccess(false);
      }
    }
  };
  let xps = 0;
  props.lessonQuizzs.map((xp) => {
    xps += xp.xp;
  });
  // console.log('props.isAchieved :' + props.isAchieved);
  // console.log(isSuccess);
  // console.log("MMMMMMMMMMMMM", props.lessonQuizzs)
  if (isSuccess) {
    return (window.location.href =
      '/course/' + props.courseId + '/lesson/' + props.lessonId + '/train');

    // <Redirect
    //   to={
    //     '/course/' + props.courseId + '/lesson/' + props.lessonId + '/train'
    //   }
    // />
  }
  return (
    <>
      <button
        className="bg-green-700 w-full px-6 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-3 shadow hover:shadow-lg outline-none focus:outline-none"
        type="button"
        style={{ transition: 'all .15s ease' }}
        onClick={(e) => {
          checkQuizzResponses();
        }}
      >
        Continuer
      </button>
      <ToastContainer
        toastClassName="toast"
        position="top-center"
        autoClose={15000}
        showProgressBar
        newestOnTop={true}
        closeOnClick
      ></ToastContainer>
    </>
  );
};

export default ContinueButton;
