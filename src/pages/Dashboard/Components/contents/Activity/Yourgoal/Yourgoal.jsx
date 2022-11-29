import React from 'react';
export default class Yourgoal extends React.Component{
    render(){
        return(
            <>
              <div className="w-full mt-8 py-4 mx-auto border-gray-500 shadow-lg">
                <div className="container pt-3 px-6 mx-auto">
                    <div className="bg-white block text-center md:text-left">
                        <label className=" mb-4 font-semibold uppercase text-gray-500 dark:text-gray-300">
                            YOUR GOAL
                        
                        </label>
                        
                    </div>
                    <div className="py-4">
                        <div className="flex items-center text-gray-800">
                            <div className="w-full">
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12 border-t-4 border-dashed sm:col-span-6  md:col-span-7">
                                        <div className="flex flex-row border-b-4 border-gray-400 bg-white rounded p-4">
                                        
                                            <div className="flex flex-col text-center flex-grow ml-4">
                                                <div className="font-bold text-lg font-bold">0</div>
                                                <div className="text-lg text-gray-500">VISITS THIS WEEK</div>
                                            </div>
                                        </div>
                                        <div className="space-x-12 md:space-x-32 flex py-4">
                                            <div className="text-gray-500 text-lg">F</div>
                                            <div className="text-gray-500 text-lg">S</div>
                                            <div className="text-gray-500 text-lg">S</div>
                                            <div className="text-gray-500 text-lg">M</div>
                                            <div className="text-gray-500 text-lg">T</div>
                                            <div className="text-gray-500 text-lg">W</div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 m-auto sm:col-span-6 md:col-span-5">
                                        <div className="flex mx-auto flex-row bg-white">
                                        
                                            <div className="w-24 h-24 rounded-full border-4 border-gray-400 text-center ml-4">
                                                <div className="font-bold text-lg font-bold" style={{lineHeight:"5rem"}}>0%</div>
                                                
                                            </div>
                                            <div className="text-lg text-gray-500 ml-4" style={{lineHeight:"5rem"}}>Daily Goal</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                </div>
              </div>
            </>
        )
    }
}