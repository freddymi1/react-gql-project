import React, { useState } from 'react'

export default () => {
  const [language, setLanguage] = useState('')
  return (
    <>
      <div className='w-full pt-8 space-y-4'>
          <label className="text-xl pb-4 text-gray-500">
          Tu connais déjà des langages informatiques ? Réponds par # (#JS, #PHP...)
          </label>
          <input
            className='w-full h-16 text-lg font-bold text-gray-500 border-b-2 border-gray-400 bg-transparent mt-2 outline-none focus:outline-none'
            type='text'
            placeholder="Répondez ici..."
            onChange={e => setLanguage(e.target.value)}
            value={language}
          />
      </div>
    </>
  )
}
