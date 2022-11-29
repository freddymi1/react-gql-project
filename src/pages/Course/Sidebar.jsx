import React from 'react';
import { RiCheckDoubleLine } from 'react-icons/ri'

export default class Sidebar extends React.Component{
    render(){
        return(
            <>
                <div className="w-full">
                    
                    <div className="flex-1">
                        <div className="w-10 h-10 bg-yellow-300 mx-auto rounded-full text-lg text-white flex items-center">
                            <span className="text-white text-center w-full">
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 mt-7">
                        <div className="w-4 h-4 bg-yellow-300 mx-auto rounded-full text-lg text-white flex items-center">
                            
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-4 h-4 bg-gray-300 mx-auto rounded-full text-lg text-white flex items-center">
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-4 h-4 bg-gray-300 mx-auto rounded-full text-lg text-white flex items-center">
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-4 h-4 bg-gray-300 mx-auto rounded-full text-lg text-white flex items-center">
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-4 h-4 bg-gray-300 mx-auto rounded-full text-lg text-white flex items-center">
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-4 h-4 bg-gray-300 mx-auto rounded-full text-lg text-white flex items-center">
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-4 text-center justify-center right-0 mx-auto h-4 bg-gray-300 mx-auto rounded-full text-lg text-white flex items-center">
                        </div>
                    </div>
                </div>
            </>
        )
    }
}