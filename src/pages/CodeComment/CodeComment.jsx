import React from 'react';

import { useParams } from 'react-router-dom';
import { CodeCommentComponent } from './components/CodeCommentComponent';


const CodeComment = () => {
  const { codeId } = useParams();

  return (
    <CodeCommentComponent codeId={ codeId } />
  );
};

export default CodeComment;
