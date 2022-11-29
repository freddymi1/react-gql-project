import React from 'react';

export default function Answers(){
    return(
        <>
            <div className="w-full text-center justify-center space-y-4">
                <label className="text-lg text-gray-400 font-bold">Sign in required</label>
                <p className="text-gray-500 text-sm">Please sign in to view your posts</p>
                <div className="w-full">
                    <div className="mx-auto justify-center">
                        <button className="w-1/3 px-3 cursor-pointer bg-green-400 text-center text-lg font-bold text-white active:bg-green-500 outline-none focus:outline-none"
                        style={{lineHeight:"2rem"}}>
                            Sign in
                        </button>
                        
                    </div>
                </div>
            </div>
        </>
    )
}