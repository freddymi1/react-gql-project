import React from 'react';

const AnswerChoice = (props) => {
  if (props.isAchieved === true) {
    return (
      <>
        <label className='inline-flex items-center mt-3'>
          <input
            type='radio'
            name={'quizz' + props.quizzChoice.quizz.id}
            className='form-radio h-5 w-5 text-indigo-600'
            value={props.quizzChoice.choice}
            onChange={(e) => props.handleResponse(e.target.value)}
            defaultChecked
          />
          <span className='font-light ml-2 text-gray-700'>
            {props.quizzChoice.choice}
          </span>
        </label>
      </>
    );
  } else {
    return (
      <>
        <label className='inline-flex items-center mt-3'>
          <input
            type='radio'
            name={'quizz' + props.quizzChoice.quizz.id}
            className='form-radio h-5 w-5 text-indigo-600'
            value={props.quizzChoice.choice}
            onChange={(e) => props.handleResponse(e.target.value)}
            // defaultChecked
          />
          <span className='font-light ml-2 text-gray-700'>
            {props.quizzChoice.choice}
          </span>
        </label>
      </>
    );
  }
};

export default AnswerChoice;

// import React from 'react';

// const answerValue = JSON.parse(sessionStorage.getItem('studentChoices'));

// const AnswerChoice = (props) => {
//   console.log(answerValue);
//   return (
// <>
//   <label className='inline-flex items-center mt-3'>
//     <input
//       type='radio'
//       name={'quizz' + props.quizzChoice.quizz.id}
//       className='form-radio h-5 w-5 text-indigo-600'
//       value={props.quizzChoice.choice}
//       onChange={(e) => props.handleResponse(e.target.value)}
//     />
//     <span className='font-light ml-2 text-gray-700'>
//       {props.quizzChoice.choice}
//     </span>
//   </label>
// </>
//   );
// };

// export default AnswerChoice;
