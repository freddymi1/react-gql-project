import React, {useState} from 'react';
import { BsSearch } from 'react-icons/bs';
import Menu from './Menu/Menu';

export default function Main (){

    const [showModal, setShowModal] = React.useState(false);

        return(
            <>
              
                <div className="container pt-3 px-6 mx-auto">
                    
                    <div className="bg-white">
                        <h1 className="mb-4 text-2xl font-semibold capitalize text-gray-500 dark:text-gray-300">
                        Q&A Community
                        </h1>
                        <div className="w-full flex">
                            <div className="w-full">
                                <button className="text-lg cursor-pointer rounded bg-green-500 py-1 px-3 text-white font-bold hover:shadow-sm hover:bg-green-600 outline-none focus:outline-none"
                                    type='button'
                                    style={{ transition: 'all .4s ease' }}
                                    onClick={() => setShowModal(true)}
                                >
                                    NEW QUESTION
                                </button>
                                {showModal ? (
                                    <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                        
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-6xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                            <h3 className="text-3xl font-semibold">
                                                Question
                                            </h3>
                                            <button
                                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                onClick={() => setShowModal(false)}
                                            >
                                                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                                </span>
                                            </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                                <input type="text" placeholder="Question.." className="h-12 px-2 leading-relaxed w-full rounded border outline-none focus:outline-none"/>
                                            
                                            </div>
                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                                onClick={() => setShowModal(false)}
                                            >
                                                Annuler
                                            </button>
                                            <button
                                                className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                                onClick={() => setShowModal(false)}
                                            >
                                                Poster
                                            </button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                    </>
                                ) : null}
                                                        </div>
                            <div className="w-2/3 flex border-grey-light border float-right">
                                <input className="w-full rounded ml-1 outline-none focus:outline-none" type="text" placeholder="Search..."/>
                                <button className="bg-green-500 shadow hover:bg-grey-lightest outline-none focus:outline-none">
                                    <span className="w-auto flex justify-end items-center text-white p-2 hover:text-grey-darkest">
                                    <BsSearch classname="text-xs"/>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Menu />
                            
                        </div>
                    </div>
                    
                </div>
            </>
        )
}