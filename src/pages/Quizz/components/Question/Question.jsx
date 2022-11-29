import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import AnswerChoice from '../AnswerChoice/AnswerChoice';
import { STUDENT_X_QUIZZ_BY_STUDENT_ID_AND_QUIZZ_ID } from '../../../../services/queries/StudentXQuizzQueries';

const ansArray = [];

// let defaultAns = [];
let sxqArray = [];
let isAchievedArray = [];

const Question = (props) => {
  // console.log(props.quizz.id);

  // const [defaultAns, setDefaultAns] = useState([]);

  const { loading: sxqLoading, error: sxqError, data: sxqData } = useQuery(
    STUDENT_X_QUIZZ_BY_STUDENT_ID_AND_QUIZZ_ID(props.userId, props.quizz.id)
  );

  if (sxqLoading) return <p>Loading...</p>;
  if (sxqError) return <p>Error :(</p>;
  if (sxqData) {
    // console.log(sxqData);
    sxqArray.push(parseInt(sxqData.studentXQuizzByStudentIdAndQuizzId.id));
    props.setSxq(sxqArray);
    isAchievedArray.push(sxqData.studentXQuizzByStudentIdAndQuizzId.isAchieved);
    props.setIsAchieved(isAchievedArray);
    // defaultAns.push({
    //   ask: props.quizz.ask,
    //   answer: props.quizz.answer,
    //   studentResponse: props.quizz.answer,
    // });
    // props.setDefaultResp(defaultAns);
  }

  // console.log(sxqArray);

  // console.log(props.quizz.ask);
  // console.log(props.quizz.answer);

  if (sxqData.studentXQuizzByStudentIdAndQuizzId.isAchieved === true) {
    // let ansArray = [];

    ansArray.push({
      ask: props.quizz.ask,
      answer: props.quizz.answer,
      studentResponse: props.quizz.answer,
    });

    const defaultAnsUniq = ansArray.filter(
      (value, index, a) => a.indexOf(value) === index
    );
    // .slice(1, -1);

    // sessionStorage.removeItem('studentChoices');
    // sessionStorage.setItem('studentChoices', '');
    sessionStorage.setItem('studentChoices', JSON.stringify(defaultAnsUniq));
    // console.log(ansArray);
  }

  const handleResponse = (res) => {
    const studentResp = {
      quizzId: props.quizz.id,
      ask: props.quizz.ask,
      studentResponse: res,
    };
    // console.log(res);
    props.addStudentResponses(studentResp);
  };

  // console.log(sxqData.studentXQuizzByStudentIdAndQuizzId.isAchieved);

  return (
    <>
      <div className="flex flex-col mt-8">
        <div className="flex flex-col">
          <p className="text-gray-800">{props.quizz.ask}</p>

          {props.quizz.quizzChoices.map((quizzChoice) => (
            <AnswerChoice
              key={quizzChoice.id}
              quizzChoice={quizzChoice}
              quizz={props.quizz}
              handleResponse={handleResponse}
              isAchieved={sxqData.studentXQuizzByStudentIdAndQuizzId.isAchieved}
              answer={props.quizz.answer}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;
