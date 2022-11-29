import React from 'react'
import { useQuery } from "@apollo/client"
import { RiCheckDoubleLine } from "react-icons/ri";
import ExoProgress from './ExoProgress';
import VideoLesson from './VideoLesson';

import LessonProgress from './LessonProgress';
import QuizzProgress from './QuizzProgress';

import { STUDENT_X_LESSON_BY_ID_AND_STUDENT_ID } from "../../../../services/queries/StudentXLessonQueries"

const currentUser = sessionStorage.getItem("currentUser")

const Progressbar = (props) => {
    const { loading: SXLLoading, error: SXLError, data: SXLData } = useQuery(STUDENT_X_LESSON_BY_ID_AND_STUDENT_ID(props.lessonId, JSON.parse(currentUser).data.data.id))
    if(SXLData && SXLData.studentXLessonByStudentIdAndLessonId.isAchieved) {
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
                        
                        <LessonProgress isAchieved={ true } courseId={ props.courseId } lessonVideoId={ props.lessonVideoId }  />
    
                        <div className="w-1/6 align-center items-center align-middle content-center flex">
                            <div className="w-full bg-gray-100 items-center align-middle align-center flex-1">
                                <div className="bg-yellow-300 text-xs leading-none py-1 text-center text-grey-darkest rounded w-full"></div>
                            </div>
                        </div>
    
                        <QuizzProgress isAchieved={true} courseId={ props.courseId } lessonId={ props.lessonId } />
                        
    
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
                            <div className="bg-gray-200 text-xs leading-none py-1 text-center text-grey-darkest rounded w-full"></div>
                        </div>
                    </div>
                    
                    <LessonProgress isAchieved={ false } />

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

export default Progressbar;