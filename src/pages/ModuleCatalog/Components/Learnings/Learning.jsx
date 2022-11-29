import React from 'react';
import { useQuery } from '@apollo/client';

import CardLearning from '../CardLearning/CardLearning';
import { STUDENT_X_LEARNING_BY_STUDENT_ID_AND_LEARNING_ID } from "../../../../services/queries/StudentXLearningQueries";

const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))

const Learning = currentUser ? ((props) => {
  const { loading: studentXLearningLoading, error: studentXLearningError, data: studentXLearningData } = useQuery(STUDENT_X_LEARNING_BY_STUDENT_ID_AND_LEARNING_ID(currentUser.data.data.id, props.learning.id));
  
  if (studentXLearningLoading) return <p>Loading...</p>;
  // if (studentXLearningData) console.log("XXXXXXXXXXXXXXXXX", studentXLearningData)

  if(studentXLearningData) {
    return (
      <>
        <CardLearning learning={ props.learning } isActive={ true } />
      </>
    )
  }

  return (
    <>
      <CardLearning learning={ props.learning } isActive={ false } />
    </>
  )
}) : (
  (props) => {
    return (
      <>
        <CardLearning learning={ props.learning } isActive={ false } />
      </>
    )
  }
)

export default Learning;
