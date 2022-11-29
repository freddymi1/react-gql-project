import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { SHOW_CODE } from '../../services/queries/CodeQueries';
import ShowWebCodeComponent from './components/ShowWebCodeComponent/ShowWebCodeComponent';

const NewWebCode = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(SHOW_CODE(id));

  if (loading) return <h2>LOADING...</h2>;
  if (error) return <h2>ERROR...</h2>;
  console.log(data)
  return (
    <>
      <ShowWebCodeComponent code={data.code}/>
    </>
  );
};

export default NewWebCode;
