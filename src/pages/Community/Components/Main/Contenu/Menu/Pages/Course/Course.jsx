import React from 'react';
import Discuss1 from './Component/Discuss1/Discuss1';
import Discuss2 from './Component/Discuss2/Discuss2';
import Discuss3 from './Component/Discuss3/Discuss3';
export default function MostRecent(){
    return(
        <>
            <div className="w-full space-y-4">
                <Discuss1 />
                <Discuss2 />
                <Discuss3 />
                <div className="flex flex-row">
                    <div className="mx-auto justify-center space-x-2">
                        <button className="w-8 h-8 cursor-pointer bg-green-400 text-center text-lg font-bold text-white active:bg-green-500"
                        style={{lineHeight:"2rem"}}>
                            1
                        </button>
                        <button className="w-8 h-8 m-auto cursor-pointer bg-gray-400 text-center text-lg font-bold text-white"
                        style={{lineHeight:"2rem"}}>
                            2
                        </button>
                        <button className="w-8 h-8 m-auto cursor-pointer bg-white text-center text-lg font-bold text-gray-400"
                        style={{lineHeight:"2rem"}}>
                            ...
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}