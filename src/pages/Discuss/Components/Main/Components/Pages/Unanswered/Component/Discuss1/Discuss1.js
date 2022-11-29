import React from 'react';

const Discuss1 = (props) => {
  const author = () => {
    if (props.comment.studentXCommentXLessonVideo !== null) {
      return props.comment.studentXCommentXLessonVideo.student.name;
    } else if (props.comment.studentXCommentXLesson !== null) {
      return props.comment.studentXCommentXLesson.student.name;
    } else if (props.comment.studentXCommentXQuizz !== null) {
      return props.comment.studentXCommentXQuizz.student.name;
    } else if (props.comment.studentXCommentXExercise !== null) {
      return props.comment.studentXCommentXExercise.student.name;
    } else {
      return 'anonymous';
    }
  };

  const monthNames = [
    'janv.',
    'févr.',
    'mars',
    'avr.',
    'mai',
    'juin',
    'juill.',
    'août',
    'sept.',
    'oct.',
    'nov.',
    'déc.',
  ];

  const dateOfCreation = new Date(props.createdAt.replace(/-/g, ' '));
  const day = dateOfCreation.getDate();
  const month = monthNames[dateOfCreation.getMonth()];
  const year = dateOfCreation.getFullYear();
  const hour = dateOfCreation.getHours();
  const minutes = dateOfCreation.getMinutes();

  //   console.log(dateOfCreation);
  //   console.log(`${day} ${month} ${year} a ${hour}:${minutes}`);

  return (
    <>
      <div className='pb-16 border-b-2 border-gray-200'>
        <div className=' flex flex-wrap space-x-4'>
          <div className='block text-center'>
            <p className='text-gray-400 text-md font-bold cursor-pointer'>
              {props.nbr_vote ? props.nbr_vote : '0'}
            </p>
            <span className='text-gray-400 text-sm'>Votes</span>
          </div>
          <div className='block text-center'>
            <p className='text-gray-400 text-md font-bold cursor-pointer'>
              {props.nbr_resp ? props.nbr_resp : '0'}
            </p>
            <span className='text-gray-400 text-sm'>Réponses</span>
          </div>
          <div className='block'>
            <p className='text-gray-400 text-md font-bold cursor-pointer'>
              {props.content}
            </p>
            <button
              className='bg-green-400 text-white font-bold text-sm text-md px-2 rounded hover:bg-green-500'
              type='button'
              style={{ transition: 'all .4s' }}
            >
              {props.types}
            </button>
          </div>
        </div>
        <div className='w-full'>
          <div className='flex  float-right space-x-1'>
            <div className='block'>
              <p className='text-green-500 text-md font-normal cursor-pointer text-right hover:text-green-600'>
                {author()}
              </p>
              <span className='text-gray-400 text-sm'>
                {`${day} ${month} ${year} à ${hour}:${
                  minutes < 9 ? '0' + minutes : minutes
                }`}
                {/* 6th July 2017, 8:02 PM */}
              </span>
            </div>
            <div>
              <img
                src='images/Trending/apple.jpg'
                alt='Apple'
                className='rounded-full w-12'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discuss1;
