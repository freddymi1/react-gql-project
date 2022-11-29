import React from 'react';
import { useParams } from 'react-router-dom';
import './styles/style.css';
import { useQuery } from '@apollo/client';
import { SHOW_PATH } from '../../services/queries/PathsQueries';
import StackComponent from './components/StackComponent/StackComponent';

const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

const Stack = () => {
  let { id } = useParams();

  const {
    loading: pathLoading,
    error: pathError,
    data: pathData,
  } = useQuery(SHOW_PATH(id));

  let currentPath = sessionStorage.getItem('currentPath');

  if (!currentPath && pathData) {
    sessionStorage.setItem('currentPath', JSON.stringify(pathData.path));
  } else {
    if (pathData) {
      sessionStorage.setItem('currentPath', JSON.stringify(pathData.path));
    }
  }

  let learningCount = 0;
  let courseCount = 0;

  if (pathLoading) return <p>Loading...</p>;
  if (pathError) return <p>Error :(</p>;

  if (pathData) {
    pathData.path.stages.map((s) => {
      learningCount += s.learnings.length
      s.learnings.map((l) => {
        courseCount += l.learningXCourses.length
      });
    });
  }
  
  return (
    <>
      <StackComponent path={pathData.path} currentUser={currentUser}/>
    </>
  );
};

export default Stack;
