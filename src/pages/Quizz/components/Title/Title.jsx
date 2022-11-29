import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMessageRoundedDetail } from 'react-icons/bi';

import Comment from '../Comment/Comment';

let Title = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [countComment, setCountComment] = useState(0);

  let closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='container w-full'>
        <div className='w- flex flex-row items-center justify-between'>
          <h1 className='text-gray-500 uppercase font-black text-3xl'>
            {props.course.title}
          </h1>
          <button className='text-gray-400'>
            <Link to={`/lesson/${props.lessonId}/quizz-comments`}>
              <BiMessageRoundedDetail className='inline' size='2em' />
              <span className='inline pl-3'>{countComment} commentaires</span>
            </Link>
          </button>
        </div>
      </div>
      <Comment
        isOpen={isOpen}
        countComment={setCountComment}
        closeModal={closeModal}
        lessonId={props.lessonId}
      />
    </>
  );
};

export default Title;
