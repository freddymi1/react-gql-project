import React from 'react';
import ListCourse from './Component/ListCours';
export default class NewCourse extends React.Component{
    render(){
        return(
            <>
                <div className="container py-3 px-6 mx-auto">
                    <h1 className="mb-4 text-2xl font-semibold text-gray-500 dark:text-gray-300">
                        Nouvelle cours
                    </h1>
                    <div className="w-full flex">
                        <div className="w-full">
                            <button className="text-lg cursor-pointer rounded bg-green-500 py-1 px-3 text-white font-bold hover:shadow-sm hover:bg-green-600 outline-none focus:outline-none"
                                type='button'
                                style={{ transition: 'all .4s ease' }}
                                
                            >
                                NEW QUESTION
                            </button>
                            
                        </div>
                        
                    </div>
                    <div className="mt-8">
                        <ListCourse />
                    </div>
                </div>
            </>
        )
    }
}