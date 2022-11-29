import React from 'react';
import Comment from '../Comment/Comment';
import { RiArrowGoBackFill } from 'react-icons/ri';

export default function VideoLessonCommentComponent(props){
    return(
        <>
            <div className='overflow-auto h-screen pb-32'>
                <button
                    onClick={(e) => props.history.goBack()}
                    className='flex items-center flex-row m-4 py-2 px-4 bg-green-700 text-lg text-white shadow-md rounded-lg w-max'
                >
                    <RiArrowGoBackFill className='text-lg font-bold' />
                    <span className='text-lg font-bold ml-2'>Back</span>
                </button>
                <Comment lessonVideoId={props.lessonVideoId} />
            </div>
        </>
    )
}