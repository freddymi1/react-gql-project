import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';


const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

function LessonCard(props) {
    const dateCreated = new Date(props.createdAt)
    const dateUpdated = new Date(props.updatedAt)

    const dateInterval = Math.ceil(dateCreated - dateUpdated) / 1000 * 60

    if (props.lesson.lessonVideo) {
        return (
            <>
                {
                    props.lesson.courseXLessons.map(courseXL => (
                        <Link to={"/course/" + courseXL.course.id + "/video_lesson/" + props.lesson.lessonVideo.id}>
                            <div className="h-32 block w-full">
                                <div className='h-32 flex flex-row  bg-green-600 shadow-md rounded-sm'>
                                    <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 text-red-500">
                                        <img className="w-16 h-16" src={"http://82.165.206.170" + props.lesson.pic} />
                                    </div>
                                    <div className="flex flex-col border-l-2 border-gray-50 flex-grow p-2">
                                        <div className="font-bold uppercase text-md text-gray-50">{props.lesson.title}</div>
                                        <div className="font-semibold pt-2 text-sm text-left text-white">
                                            <p>
                                                {props.lesson.content.slice(0, 100)}
                                            </p>
                                        </div>
                                    </div>
    
                                </div>
                                <div className='w-100 rounded-b-xl -mt-8'>
                                    <p className='font-semibold pt-2 pr-2 text-right text-sm  text-gray-100'>
                                        {dateInterval} minutes
                                </p>
                                </div>
                            </div>
    
                        </Link>
                    ))
                }
    
            </>
        );
    } else {
        return (
            <>
                {
                    props.lesson.courseXLessons.map(courseXL => (
                        <Link to={"/course/" + courseXL.course.id + "/lesson/" + props.lesson.id}>
                            <div className="h-32 block w-full">
                                <div className='h-32 flex flex-row  bg-green-600 shadow-md rounded-sm'>
                                    <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 text-red-500">
                                        <img className="w-16 h-16" src={"http://82.165.206.170" + props.lesson.pic} />
                                    </div>
                                    <div className="flex flex-col border-l-2 border-gray-50 flex-grow p-2">
                                        <div className="font-bold uppercase text-md text-gray-50">{props.lesson.title}</div>
                                        <div className="font-semibold pt-2 text-sm text-left text-white">
                                            <p>
                                                {props.lesson.content.slice(0, 100)}
                                            </p>
                                        </div>
                                    </div>
    
                                </div>
                                <div className='w-100 rounded-b-xl -mt-8'>
                                    <p className='font-semibold pt-2 pr-2 text-right text-sm  text-gray-100'>
                                        {dateInterval} minutes
                                </p>
                                </div>
                            </div>
    
                        </Link>
                    ))
                }
    
            </>
        );
    }



};

export default LessonCard;


