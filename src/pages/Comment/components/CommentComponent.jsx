import CommentList from './CommentList/CommentList';


export const CommentComponent = ({ comments, handleMessageSubmit, setMessage }) => {
  return (
    <div className='text-center transform m-5'>
      <div>
        {
          comments.map(comment => (
            <CommentList comment={ comment } />
          ))
        }


        <form onSubmit={ e => { handleMessageSubmit(e) } }>
          <div className='h-full w-full flex flex-wrap content-end justify-center'>
            <input type='hidden' />
            <textarea
              className='w-8/12 shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-1xl shadow-lg'
              placeholder='Votre commentaire :)'
              cols='1'
              rows='3'
              id='comment_content'
              spellcheck='false'
              onChange={ 
                e => {
                  setMessage(e.target.value )
                }
              }
            ></textarea>
            <button className='font-bold py-2 px-4 w-8/12 bg-green-700 text-lg text-white shadow-md rounded-lg '>
              Commenter{' '}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}