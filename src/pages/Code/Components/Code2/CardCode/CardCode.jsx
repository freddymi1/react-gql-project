import React, { useState } from 'react';
import Modal from 'react-modal';
import { RiArrowRightSLine } from 'react-icons/ri';
import { IoMdText } from 'react-icons/io';
import { RiCloseCircleLine } from 'react-icons/ri';
const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
    },
        content: {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
        margin: '0 40px 40px 40px',
    },
};
  
Modal.setAppElement('#root');
export default function CardCatalogue(){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return(
        <>
        <div className="container pt-3 py-6 px-6 mx-auto">
            <div className="bg-white">
                <label className="mb-4 font-semibold text-gray-500 dark:text-gray-300">
                    <img src="./images/html.png" alt="Logo html 5" className="w-7 inline mr-2"/>
                    HTML Basics
                    <span className="text-blue-500 float-right cursor-pointer right-0">
                        SEE ALL
                        <RiArrowRightSLine className="inline -mt-1" size="1.5em" />
                    </span>
                </label>
            </div>
            <div className="flex items-center text-gray-800">
                <div className="py-4 w-full">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="h-32 flex flex-row bg-white shadow-sm rounded-sm">
                                <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 rounded-sm bg-red-100 text-red-500">
                                    <img className="w-16 h-16" src="images/html.png"/>
                                </div>
                                <div className="flex flex-col flex-grow bg-green-50 p-4">
                                    <div className="text-xl font-bold text-gray-500">EASY</div>
                                    <div className="font-bold text-md text-gray-400">Furniture Store title</div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="h-32 flex flex-row bg-white shadow-sm rounded-sm">
                                <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 rounded-sm bg-blue-200 text-red-500">
                                    <img className="w-16 h-16" src="images/html.png"/>
                                </div>
                                <div className="flex flex-col flex-grow bg-green-50 p-4">
                                    <div className="text-xl font-bold text-gray-500">MEDIUM</div>
                                    <div className="font-bold text-md text-gray-400">News Heading</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="h-32 flex flex-row bg-white shadow-sm rounded-sm">
                                <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 rounded-sm bg-green-500 text-red-500">
                                    <img className="w-16 h-16" src="images/html.png"/>
                                </div>
                                <div className="flex flex-col flex-grow bg-green-50 p-4">
                                    <div className="text-xl font-bold text-gray-500">EASY</div>
                                    <div className="font-bold text-md text-gray-400">News Quote</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="h-32 flex flex-row bg-white shadow-sm rounded-sm">
                                <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 rounded-sm bg-blue-400 text-red-500">
                                    <img className="w-16 h-16" src="images/html.png"/>
                                </div>
                                <div className="flex flex-col flex-grow bg-green-50 p-4">
                                    <div className="text-xl font-bold text-gray-500">EASY</div>
                                    <div className="font-bold text-md text-gray-400">Furniture Store title</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <label className="text-gray-400 text-sm">0/8 unlocked</label>
                <div className="text-lg -mt-6">
                                        
                    <button className="text-sm cursor-pointer p-2 text-gray-400 font-normal float-right hover:shadow-lg hover:bg-gray-300 outline-none focus:outline-none"
                        type='button'
                        style={{ transition: 'all .4s ease' }}
                        onClick={() => setModalIsOpen(true)}
                    >
                        <IoMdText className="inline mr-1" size="1.3em" />
                        Commentaire
                    </button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        style={customStyles}
                        className='modal'
                        overlayClassName='overlay-modal'
                        >
                        <div>
                            <button
                                className='w-auto sticky top-0 float-right'
                                type='button'
                                style={{ transition: 'all .15s ease' }}
                                onClick={() => setModalIsOpen(false)}
                            >
                                <RiCloseCircleLine
                                className='inline-block float-right text-gray-600 hover:text-green-700'
                                size='2em'
                                />
                            </button>
                            
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
            
        </>
    )
}