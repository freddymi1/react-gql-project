import React, { useState, useEffect } from 'react';
import { FaGlobeAmericas } from 'react-icons/fa';
import { RiRadioButtonLine } from 'react-icons/ri';
import { FiSave } from "react-icons/fi";

const Title = (props) => {
  const [choosePrivacy, setChoosePrivacy] = useState(false)
  const [selectedPrivacy, setSelectedPrivacy] = useState("Publique")
  
  useEffect(() => {
    if(props.privacy === "public"){
      setSelectedPrivacy("Publique")
    }else{
      setSelectedPrivacy("Privee")
    }
  });
  
  return (
    <>
      <div className="w-full flex flex-col justify-center">
        <div className="w-full flex flex-col">
          <div className="h-12 flex flex-row ">
            <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 rounded-sm text-red-500">
              <img className="w-12 h-12" src="images/avatar.png" />
              <label className="">
                <RiRadioButtonLine className="block -ml-4 mt-8 text-yellow-400" size="1.2em" />
              </label>
            </div>
            <div className="w-full px-4 right-0 mx-auto">
              <div className="block float-left">
                <div className="text-md font-bold text-gray-50">Animated Youtube Logo</div>
                <div className="font-bold text-sm text-gray-50">Mode Tech</div>
              </div>
              <div className="float-right absolute right-16 sm:right-12">
                <label className="px-2 bg-gray-200 rounded-sm cursor-pointer">
                  <span className="text-gray-500 font-bold"
                    style={{ fontSize: "12px" }}
                  >{ props.language }</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-center">
          <div className="w-1/3 text-center">


            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="inline-flex justify-center w-full text-white px-4 py-2 text-sm font-medium focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={
                    e => {
                      setChoosePrivacy(!choosePrivacy)
                    }
                  }>
                  <FaGlobeAmericas className="inline text-white" size="1.2em" />&nbsp;&nbsp;
                  <span className="text-white font-bold text-sm uppercase"
                    style={{ fontSize: "12px" }}
                  >{selectedPrivacy}</span>
                  <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>

              {
                choosePrivacy ? (
                  <div className="z-50 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={
                          e => {
                            props.setPrivacy("public")
                            setSelectedPrivacy("Publique")
                            setChoosePrivacy(!choosePrivacy)
                          }
                        }
                      >Publique</a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={
                          e => {
                            props.setPrivacy("private")
                            setSelectedPrivacy("Privee")
                            setChoosePrivacy(!choosePrivacy)
                          }
                        }
                      >Privee</a>
                    </div>
                  </div>
                ) : (
                    <></>
                  )
              }
            </div>


          </div>

          <div className="w-1/3 text-center">
            <button
              className="flex flex-row items-center float-right mt-1 mr-4 flex-shrink-0 bg-green-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200"
              type="button"
              onClick={e => props.saveWebCode()}
            >
              <FiSave className="inline text-white" size="1.2em" />&nbsp;&nbsp;<span>Enregistrer</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Title;