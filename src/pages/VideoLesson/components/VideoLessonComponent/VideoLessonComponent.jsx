import React from 'react';
import { FiVideoOff } from "react-icons/fi";

import Progressbar from '../Progressbar/Progressbar';
import ContinueButton from '../ContinueButton/ContinueButton';  
import Title from '../Title/Title';
import baseUrl from '../../../../services/BaseUrl';

export default function VideoLessonComponent(props){
    if(props.course){
        return(
            <>
                <section className="bg-white">
                    <div className="container pt-3 pb-6 px-6 mx-auto">
                        <Progressbar courseId={ props.course.id } lessonVideoId={ props.lessonVideo.id } lessonId={ props.lessonVideo.lesson.id } />
                    </div>
                </section>
                {/* Section Titre */}
                <section className="bg-white">
                    <div className="container pb-6 px-6 mx-auto">
                        <Title course={ props.course } videoLessonId={ props.lessonVideo.id } />
                    </div>
                </section>
                <div className="block h-screen overflow-y-auto pb-96">
                    <section className="bg-white">
                        <div className="container pt-3 pb-2 px-6 mx-auto w-3/5" style={{ height: "53vh" }}>
                            {
                                props.lessonVideo.path ? (
                                    <iframe className="block w-full h-full"
                                    allowfullscreen=""
                                    src={ baseUrl() + props.lessonVideo.path } >
                                    </iframe>
                                ) : (
                                    <div className="block w-full h-full text-center bg-gray-100 pt-48">
                                        <FiVideoOff size="5em" className="inline-block text-gray-400" /><br/>
                                        <span className="text-gray-400 inline-block text-lg">Video indisponible</span>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                    {/* Fin Section Titre */}
                    <section className="bg-white">
                        <div className="container pb-2 px-6 mx-auto">
                            <div className="text-center w-full md:w-1/4 mt-8 mx-auto">
                                <ContinueButton courseId={ props.course.id } lessonId={ props.lessonVideo.lesson.id } />
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
    
}