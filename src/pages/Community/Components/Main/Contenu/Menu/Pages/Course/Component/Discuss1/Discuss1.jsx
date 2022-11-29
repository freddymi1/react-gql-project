import React from 'react'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

function Discuss1() {
    return (
        <>
            <div className="pb-16 border-b-2 border-gray-200">
                <div className=" flex flex-wrap space-x-4">
                    <div className="block text-center">
                        <div className="flex">
                            <a href='#'>
                                <RiArrowUpSLine className='inline text-sm text-gray-500 font-bold' size='2em' />
                            </a>
                            <span className="inline text-sm text-gray-500 font-bold cursor-pointer">0</span>
                            <a href='#'>
                                <RiArrowDownSLine className='inline text-sm text-gray-500 font-bold' size='2em' />
                            </a>
                        </div>
                        <span className="text-gray-400 text-md">Votes</span>
                    </div>
                    
                    <div className="block">
                        <h3 className="text-gray-500 font-bold cursor-pointer hover:text-gray-600">Explain the question</h3>
                        <div className="flex space-x-2">
                            <button 
                                className="bg-green-400 text-white font-normal text-sm text-md px-2 rounded hover:bg-green-500" 
                                type="button"
                                style={{transition:"all .4s"}}
                                >
                                    clueless
                            </button>
                            <button 
                                className="bg-green-400 text-white font-normal text-sm text-md px-2 rounded hover:bg-green-500" 
                                type="button"
                                style={{transition:"all .4s"}}
                                >
                                    python
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex  float-right space-x-1">
                        <div className="block">
                            <h3 className="text-green-500 font-normal cursor-pointer text-right hover:text-green-600">benka</h3>
                            <span className="text-gray-400 text-md">3 hours ago</span>
                        </div>
                        <div>
                            <img src="images/Trending/apple.jpg" alt="Apple" className="rounded-full w-12"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discuss1
