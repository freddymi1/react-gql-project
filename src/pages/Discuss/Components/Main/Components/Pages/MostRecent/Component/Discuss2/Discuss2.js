import React from 'react'

function Discuss2() {
    return (
        <>
            <div className="pb-16 border-b-2 border-gray-200">
                <div className=" flex flex-row space-x-4">
                    <div className="block text-center">
                        <h3 className="text-gray-500 font-bold cursor-pointer">0</h3>
                        <span className="text-gray-400 text-md">Votes</span>
                    </div>
                    <div className="block text-center">
                        <h3 className="text-gray-500 font-bold cursor-pointer">1</h3>
                        <span className="text-gray-400 text-md">Answers</span>
                    </div>
                    <div className="block">
                        <h3 className="text-gray-500 font-bold cursor-pointer hover:text-gray-600">
                        Write a program that prints a table on two columns - table that helps converting miles into kilometres
                        </h3>
                        <div className="flex space-x-2">
                            <button 
                                className="bg-green-400 text-white font-normal text-sm text-md px-2 rounded hover:bg-green-500" 
                                type="button"
                                style={{transition:"all .4s"}}
                                >
                                    guidelines
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
