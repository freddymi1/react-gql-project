import React, { useState } from 'react'

import HeaderPayment from './components/HeaderPayment/HeaderPayment';


import { SHOW_PATH } from "../../services/queries/PathsQueries";
import { CREATE_STUDENT_X_PATH } from "../../services/mutations/MutationsStudentXPath";
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import StackPaymentComponent from './components/StackPaymentComponent/StackPaymentComponent';

const currentUser = sessionStorage.getItem("currentUser")

const StackPayment = () => {
  const { pathId } = useParams();

  const { loading, error, data } = useQuery(SHOW_PATH( pathId ))
  const [
    initStudentXPath, 
    { 
      loading: mutationLoading, 
      error: mutationError, 
      data: mutationData 
    }
  ] = useMutation(
    CREATE_STUDENT_X_PATH, 
      { 
        onCompleted: () => { 
          window.location.href = '/path/' + pathId; 
        } 
      }
    );

  if(loading) return <h1>LOADING</h1>;
  if(error) return <h1>ERROR :(</h1>;

  const initThePath = () => {
    initStudentXPath({
      variables: {
        isAchieved: false,
        studentId: parseInt(JSON.parse(currentUser).data.data.id),
        pathId: parseInt(pathId)
      }
    })
  }

  return (
    <>
      <HeaderPayment path={ data.path } />
      <StackPaymentComponent initThePath={initThePath} />
    </>
  )
}

export default StackPayment;