import React from 'react';
import { useQuery } from '@apollo/client';

import LearningCard from '../LearningCard/LearningCard';
import { STUDENT_X_LEARNING_BY_STUDENT_ID_AND_LEARNING_ID } from "../../../../services/queries/StudentXLearningQueries";

const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))

const Learning = currentUser ? ((props) => {
  const { loading: studentXLearningLoading, error: studentXLearningError, data: studentXLearningData } = useQuery(STUDENT_X_LEARNING_BY_STUDENT_ID_AND_LEARNING_ID(currentUser.data.data.id, props.learning.id));
  
  if (studentXLearningLoading) return <p>Loading...</p>;
  // if (studentXLearningData) console.log("XXXXXXXXXXXXXXXXX", studentXLearningData)

  if(studentXLearningData) {
    return (
      <>
        <LearningCard learning={ props.learning } isActive={ true } />
      </>
    )
  }

  return (
    <>
      <LearningCard learning={ props.learning } isActive={ false } />
    </>
  )
}) : (
  (props) => {
    return (
      <>
        <LearningCard learning={ props.learning } isActive={ false } />
      </>
    )
  }
)

export default Learning;
