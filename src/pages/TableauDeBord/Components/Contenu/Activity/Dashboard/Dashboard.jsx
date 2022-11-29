import React from 'react';
import { IoMdStar } from "react-icons/io";
export default class Dashboard extends React.Component{
    render(){
        return(
            <>
              <div className="w-full py-4 mt-8 mx-auto border-gray-500 shadow-lg">
                <div className="container pt-3 px-6 mx-auto">
                    <div className="bg-white block text-center md:text-left">
                        <label className="mb-4 font-semibold uppercase text-gray-500 dark:text-gray-300">
                            DASHBOARD
                        
                        </label>
                        
                    </div>
                    <div className="py-4">
                        <div className="flex items-center text-gray-800">
                            <div className="w-full">
                                <div className="grid grid-cols-12">
                                <div className="col-span-12 md:border-r-2 border-gray-300 sm:col-span-6  md:col-span-4">
                                    <div className="flex flex-row bg-white rounded p-4">
                                    
                                        <div className="flex flex-col text-center flex-grow ml-4">
                                            <div className="font-bold text-lg font-bold">0</div>
                                            <div className="text-lg text-gray-500">VISITS THIS WEEK</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 md:border-r-2 border-gray-300 sm:col-span-6 md:col-span-4">
                                    <div className="flex flex-row bg-white rounded p-4">
                                    
                                        <div className="flex flex-col text-center flex-grow ml-4">
                                            <div className="font-bold text-lg font-bold">98203</div>
                                            <div className="text-lg text-gray-500">NEARBY LEARNERS</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 md:-mt-7 sm:col-span-6 md:col-span-4">
                                    <div className="flex flex-row bg-white rounded p-4">
                                    
                                        <div className="flex flex-col text-center flex-grow ml-4">
                                            <div className="text-lg text-gray-500">TOP</div>
                                            <div className="font-bold text-lg font-bold">25.87%</div>
                                            <div className="text-lg text-gray-500">THIS WEEK</div>
                                        </div>
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