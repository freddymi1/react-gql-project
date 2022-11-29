import React from 'react';
import { useParams } from 'react-router-dom';
import LessonCommentComponent from './components/LessonCommentComponent';

const LessonComment = () => {
  const { lessonId } = useParams();
  return (
    <>
      <LessonCommentComponent lessonId={lessonId} />
    </>
  );
};

export default LessonComment;
