import React, { useState } from 'react'

export default () => {
  const [anecdote, setAnecdote] = useState('')

  return (
    <>
      <div className='w-full pt-8 space-y-4'>
          <label className="text-xl pb-4 text-gray-500">
          9- Racontes-moi une anecdote drôle sur toi (oui on aime l’humour chez SAYNA)
          </label>
          <textarea
            className='w-full resize-y h-32 text-lg font-bold text-gray-500 border-b-2 border-gray-400 bg-transparent mt-2 outline-none focus:outline-none'
            type='text'
            placeholder="Répondez ici..."
            onChange={e => setAnecdote(e.target.value)}
            value={anecdote}
          ></textarea>
      </div>
      
    </>
  )
}
