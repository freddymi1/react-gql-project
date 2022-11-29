import React from 'react';

export default class CommentForm extends React.Component {
  render() {
    return (
      <form>
        <div className='h-full w-full flex flex-wrap content-end justify-center'>
          <input type='hidden' />
          <textarea
            className='w-8/12 shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-1xl shadow-lg'
            placeholder='Votre commentaire :)'
            cols='1'
            rows='3'
            id='comment_content'
            spellcheck='false'
          ></textarea>
          <button className='font-bold py-2 px-4 w-8/12 bg-green-700 text-lg text-white shadow-md rounded-lg '>
            Commenter{' '}
          </button>
        </div>
      </form>
    );
  }
}
