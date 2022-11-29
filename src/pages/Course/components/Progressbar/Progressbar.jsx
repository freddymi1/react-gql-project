import React from 'react'
import { RiCheckDoubleLine } from "react-icons/ri";
import ExoProgress from './ExoProgress';
import VideoLesson from './VideoLesson';

import LessonProgress from './LessonProgress';
import QuizzProgress from './QuizzProgress';


export default class Progressbar extends React.Component{
    render(){
        return (
            <>
            
                <div className="w-full mx-auto px-0 mt-5">	
                    <div className="flex pb-3">
                        <div className="w-1/6 md:w-2/3 align-center items-center align-middle content-center flex">
                            <div className="w-full bg-gray-100 items-center align-middle align-center flex-1">
                                <div className="bg-yellow-300 text-xs leading-none py-1 text-center text-grey-darkest rounded w-full"></div>
                            </div>
                        </div>

                        <VideoLesson isAchieved={ true } />


                        <div className="w-1/6 align-center items-center align-middle content-center flex">
                            <div className="w-full bg-gray-100 items-center align-middle align-center flex-1">
                                <div className="bg-yellow-300 text-xs leading-none py-1 text-center text-grey-darkest rounded w-full"></div>
                            </div>
                        </div>
                        
                        <LessonProgress isAchieved={ true } />

                        <div className="w-1/6 align-center items-center align-middle content-center flex">
                            <div className="w-full bg-gray-100 items-center align-middle align-center flex-1">
                                <div className="bg-gray-200 text-xs leading-none py-1 text-center text-grey-darkest rounded w-full"></div>
                            </div>
                        </div>

                        <QuizzProgress />
                        

                        <div className="w-1/6 align-center items-center align-middle content-center flex">
                            <div className="w-full bg-gray-100 items-center align-middle align-center flex-1">
                                <div className="bg-gray-200 text-xs leading-none py-1 text-center text-grey-darkest rounded w-full"></div>
                            </div>
                        </div>

                        <ExoProgress />


                        
                        <div className="w-1/6 md:w-2/3 align-center items-center align-middle content-center flex">
                            <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                                <div className="bg-gray-200 text-xs leading-none py-1 text-center text-grey-darkest rounded w-full"></div>
                            </div>
                        </div>
                    
                        		
                    </div>
                    
                </div>
                    
            </>
        )
    }
}