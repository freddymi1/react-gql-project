import React, { useState } from 'react'
import { BsCloudUpload } from 'react-icons/bs';


export default () => {

  return (
    <>
      
      <div className='w-full flex text-center pt-8 space-x-2'>
        <div className="w-full inline-block">
          <label className="text-2xl text-center text-gray-500">
              Importation de ton CV
            </label>
            <div className="flex w-full items-center justify-center">
              <label className="w-full flex flex-col items-center hover:bg-blue-100 py-6 bg-white text-blue  tracking-wide border border-blue cursor-pointer hover:text-blue-500"  style={{transition:"all .4s"}}>
                  <BsCloudUpload className="text-gray-500" size="5em"/>
                  <span className="mt-2 text-base text-gray-500 font-bold leading-normal">Choisissez ton CV ou glissez ici</span>
                  <span className="bolk text-gray-500">Taille maximale : 10Mo</span>
                  <input type='file' className="hidden" />
              </label>
          </div>
        </div>
        <div className="w-full inline-block">
          <label className="text-2xl text-center text-gray-500">
            ... et de ton CIN
          </label>
          <div className="flex w-full items-center justify-center">
            <label className="w-full flex flex-col items-center hover:bg-blue-100 py-6 bg-white text-blue  tracking-wide border border-blue cursor-pointer hover:text-blue-500"  style={{transition:"all .4s"}}>
                <BsCloudUpload className="text-gray-500" size="5em"/>
                <span className="mt-2 text-base text-gray-500 font-bold leading-normal">Choisissez ton CIN ou glissez ici</span>
                <span className="bolk text-gray-500">Taille maximale : 10Mo</span>
                <input type='file' className="hidden" />
            </label>
          </div>
        </div>
          
      </div>
    </>
  )
}
