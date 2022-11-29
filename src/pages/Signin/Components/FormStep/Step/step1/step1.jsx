import React, { useState } from 'react'

export default () => {
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')

  return (
    <>
      
      <div className='w-full pt-8 space-y-4'>
          <label className="text-gray-400 font-bold text-lg">
            1- Commençons l'aventure ensemble, mais d'abord apprenons à se connaître !
          </label><br/>
          <label className="text-xl pb-4 text-gray-500">
            Donnes-nous ton Prénom :Cette question est requise *
          </label>
          <input
            className='w-full h-16 text-lg font-bold text-gray-500 border-b-2 border-gray-400 bg-transparent mt-2 outline-none focus:outline-none'
            placeholder='Répondez ici...'
            type='text'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
      </div>
      <div className='w-full mt-8 space-y-4'>
          <label className="text-xl pb-4 text-gray-500">
            et ton nom :*
          </label>
          <input
            className='w-full h-16 text-lg font-bold text-gray-500 border-b-2 border-gray-400 bg-transparent mt-2 outline-none focus:outline-none'
            placeholder='Répondez ici...'
            type='text'
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
          />
      </div>
    </>
  )
}
