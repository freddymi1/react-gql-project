import React from 'react';

import { useParams, useHistory } from 'react-router-dom';
import TrainCommentComponent from './components/TrainCommentComponent/TrainCommentComponent';
const currentUser = sessionStorage.getItem('currentUser');


const TrainComment = () => {
  const { exerciseId } = useParams();
  let history = useHistory();
  
  return (
    <TrainCommentComponent history={history} exerciseId={exerciseId} currentUser={currentUser} />
  );
};

export default TrainComment;
