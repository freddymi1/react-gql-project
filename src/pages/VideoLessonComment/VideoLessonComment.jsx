import React from 'react';
import VideoLessonCommentComponent from './components/VideoLessonCommentComponent/VideoLessonCommentComponent';
import { useParams, useHistory } from 'react-router-dom';

const currentUser = sessionStorage.getItem('currentUser');


const VideoLessonComment = () => {
  const { lessonVideoId } = useParams();
  let history = useHistory();
  return (
    <VideoLessonCommentComponent 
    history={history} 
    lessonVideoId={lessonVideoId} 
    currentUser={currentUser}/>
  );
};

export default VideoLessonComment;
