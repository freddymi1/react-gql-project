import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Title from './components/Title/Title';
import ExerciseContent from './components/ExerciseContent/ExerciseContent'

import { SHOW_CODE } from '../../services/queries/CodeQueries';

export default function WebCodeEditorApp (props){
  const { id } = useParams()
  const { loading, error, data } = useQuery(SHOW_CODE(id))

  if(loading) return ( <h2>LOADING...</h2> )
  if(error) return ( <h2>ERROR...</h2>)

  return (
    <>
      <div className="block overflow-y-auto">
        <section className="bg-white">
          <ExerciseContent codeData={ data.code } />
        </section>
      </div>
    </>
  )
}