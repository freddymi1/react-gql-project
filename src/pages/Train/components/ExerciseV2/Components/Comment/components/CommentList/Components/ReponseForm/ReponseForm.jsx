import React from 'react';

export default function ReponseForm(){
    return(
        <form>
            <div className='h-full w-full flex flex-wrap content-end justify-center'>
                <input type='hidden' />
                <textarea
                    className='w-2/3 shadow-inner p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-1xl shadow-lg'
                    placeholder='Votre reponse :)'
                    cols='1'
                    rows='2'
                    id='comment_content'
                    spellcheck='false'
                ></textarea>
                <button className='font-bold py-2 px-4 w-full md:w-1/2 bg-green-700 text-lg text-white shadow-md rounded-lg '>
                    Repondre{' '}
                </button>
            </div>
        </form>
    )
}