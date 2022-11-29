import React, { useState } from 'react'
import { BsCloudUpload } from 'react-icons/bs';


export default () => {
  const [url, setUrl] = useState('')
  return (
    <>
      
      <div className='w-full pt-8 space-y-4'>
          <label className="text-2xl py-8 text-gray-500">
            A présent, fff, on aura besoin de ton site Web ou tout autre lien utile te concernant :
          </label>
          <span className="block text-gray-400 text-lg">LinkedIn, Portfolio, CV Online ...</span>
          <input
            className='w-full h-16 text-lg font-bold text-gray-500 border-b-2 border-gray-400 bg-transparent mt-2 outline-none focus:outline-none'
            type='text'
            placeholder="http://"
            onChange={e => setUrl(e.target.value)}
            value={url}
          />
          
      </div>
    </>
  )
}
