import React, { useState } from 'react'

export default () => {
  const [working, setWorking] = useState('')

  return (
    <>
      <div className='w-full pt-8 space-y-4'>
          <label className="text-xl pb-4 text-gray-500">
            As-tu déjà travaillé ? Si oui parle nous de tes expériences les plus significatives ! (Élevage de poulet de chair ça compte !)
          </label>
          <input
            className='w-full h-16 text-lg font-bold text-gray-500 border-b-2 border-gray-400 bg-transparent mt-2 outline-none focus:outline-none'
            type='text'
            placeholder="Répondez ici..."
            onChange={e => setWorking(e.target.value)}
            value={working}
          />
      </div>
      
    </>
  )
}
