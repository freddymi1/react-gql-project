import React from 'react'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
function Discuss2() {
    return (
        <>
            <div className="pb-16 border-b-2 border-gray-200">
                <div className=" flex flex-wrap space-x-4">
                    <div className="block text-center">
                        <div className="flex">
                            <a href='#'>
                                <RiArrowUpSLine className='inline text-sm text-gray-500 font-bold' size='2em' />
                            </a>
                            <span className="inline text-sm text-gray-500 font-bold cursor-pointer">2778</span>
                            <a href='#'>
                                <RiArrowDownSLine className='inline text-sm text-gray-500 font-bold' size='2em' />
                            </a>
                        </div>
                        <span className="text-gray-400 text-md">Votes</span>
                    </div>
                    {/* <div className="block text-center">
                        <h3 className="text-sm text-gray-500 font-bold cursor-pointer">1540</h3>
                        <span className="text-gray-400 text-md">Answers</span>
                    </div> */}
                    <div className="block">
                        <h3 className="text-gray-500 font-bold cursor-pointer hover:text-gray-600">Welcome to SoloLearn forum!</h3>
                        <div className="flex space-x-2">
                            <button 
                                className="bg-green-400 text-white font-bold text-sm text-md px-2 rounded hover:bg-green-500" 
                                type="button"
                                style={{transition:"all .4s"}}
                                >
                                    guidelines
                            </button>
                            <button 
                                className="bg-green-400 text-white font-bold text-sm text-md px-2 rounded hover:bg-green-500" 
                                type="button"
                                style={{transition:"all .4s"}}
                                >
                                    rules
                            </button>
                            <button 
                                className="bg-green-400 text-white font-bold text-sm text-md px-2 rounded hover:bg-green-500" 
                                type="button"
                                style={{transition:"all .4s"}}
                                >
                                    welcome
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex  float-right space-x-1">
                        <div className="block">
                            <h3 className="text-green-500 font-normal cursor-pointer text-right hover:text-green-600">benka</h3>
                            <span className="text-gray-400 text-md">31st May 2018, 12:00 PM</span>
                        </div>
                        <div className="rounded-full h-12 w-12">
                            <img src="images/Trending/profil1.jpg" alt="Apple" className=" rounded-full w-12"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discuss2
