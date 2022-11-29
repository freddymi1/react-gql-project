import React, { useState }from 'react';
import { useParams } from 'react-router-dom'

import { useQuery } from '@apollo/client';
import { SHOW_CODE } from '../../services/queries/CodeQueries';
import ShowCodeComponent from './components/ShowCodeComponent/ShowCodeComponent';



export default function NewWebCode (){
  const { id } = useParams()
  
  const { loading, error, data } = useQuery(SHOW_CODE(id))

  if(loading) return ( <h2>LOADING...</h2> )

  if(error) return ( <h2>ERROR...</h2>)
  if(data) console.log(data)

  return (
    <>
      <ShowCodeComponent code={data.code} />
    </>
  )
}