import React, { useState } from 'react';

import { SHOW_LEARNING } from '../../services/queries/LearningsQueries';
import { INIT_STUDENT_X_LEARNING } from '../../services/mutations/StudentXLearningMutations';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import ModulePaymentComponent from './components/ModulePaymentComponent';

const currentUser = sessionStorage.getItem('currentUser');

const ModulePayment = () => {
  const [openTab, setOpenTab] = useState(1);
  const { learningId } = useParams();

  const { loading, error, data } = useQuery(SHOW_LEARNING(learningId));
  const [
    initStudentXLearning,
    { loading: mutationLoading, error: mutationError, data: mutationData },
  ] = useMutation(INIT_STUDENT_X_LEARNING, {
    onCompleted: () => {
      window.location.href = '/learning/' + learningId;
    },
  });

  if (loading) return <h1>LOADING</h1>;
  if (error) return <h1>ERROR :(</h1>;

  const initTheLearning = () => {
    initStudentXLearning({
      variables: {
        isAchieved: false,
        studentId: parseInt(JSON.parse(currentUser).data.data.id),
        learningId: parseInt(learningId),
      },
    });
  };

  return (
    <>
      <ModulePaymentComponent
        data={data}
        setOpenTab={setOpenTab}
        initTheLearning={initTheLearning}
        openTab={openTab}
      />
    </>
  );
};

export default ModulePayment;
