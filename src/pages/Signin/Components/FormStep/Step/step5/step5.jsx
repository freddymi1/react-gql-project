import React, { useState } from 'react'

export default () => {
  const [ambition, setAmbition] = useState('')

  return (
    <>
      <div className='w-full pt-8 space-y-4'>
          <label className="text-xl pb-4 text-gray-500">
            Peux-tu nous donner tes principales ambitions à t'inscrire chez nous ? *
          </label>
          <textarea
            className='w-full resize-y h-32 text-lg font-bold text-gray-500 border-b-2 border-gray-400 bg-transparent mt-2 outline-none focus:outline-none'
            type='text'
            placeholder="Répondez ici..."
            onChange={e => setAmbition(e.target.value)}
            value={ambition}
          ></textarea>
      </div>
      
    </>
  )
}
