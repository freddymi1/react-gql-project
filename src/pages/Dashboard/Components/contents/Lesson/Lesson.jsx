import React from 'react';
import {useQuery} from '@apollo/client'
import { 
    STUDENT_X_LESSONS_BY_STUDENT_ID 
} from '../../../../../services/queries/StudentXLessonQueries';

import LessonCard from './Components/LessonCard/LessonCard';

const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))
export default function Lesson (props){
    // const {student_id} = useParams()
    const {
        loading: studentXLLoading,
        error: studentXLError,
        data: studentXLData
    } = useQuery(STUDENT_X_LESSONS_BY_STUDENT_ID(currentUser.data.data.id))

    if(studentXLLoading) return <p>Loading...</p>
    if(studentXLError) return <p>Erreur</p>
    // console.log(studentXLData.studentXLessonsByStudentId)
    const listsXLesson = []
    
    
    

    if(studentXLLoading) return <p>LOADING</p>

    if(studentXLData){
        studentXLData.studentXLessonsByStudentId.map(sxLesson=>(
            listsXLesson.push(<LessonCard key={sxLesson.lesson.id} createdAt={sxLesson.createdAt} updatedAt = {sxLesson.updatedAt} lesson={sxLesson.lesson}/>)
        ))
    }
    for (let i = listsXLesson.length - 1; i >= 0; i--) {
        for (let j = 0; j < listsXLesson.length; j++) {
            if (listsXLesson[i]) {
                if (listsXLesson[j]) {
                    if (
                        listsXLesson[i].props.lesson.title ===
                        listsXLesson[j].props.lesson.title &&
                        i !== j
                    ) {
                        listsXLesson.splice(i, 1);
                    }
                }
            }
        }
    }
    props.count(listsXLesson.length)
    return(
        <>
            <div className="px-6 py-4 w-full justify-items-auto">
                {
                    listsXLesson.length !== 0 ?(
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {
                                listsXLesson
                            }
                        </div>
                    ):(
                        <div className="w-full text-center block   pt-8">
                            <h1 className="mb-4 font-semibold text-center text-gray-500 dark:text-gray-300">
                                Hi &nbsp;
                                <span className="text-red-400">{currentUser.data.data.name}</span>
                                , vous n'avez pas encore de lesson disponible!
                            </h1>
                        </div>
                    )
                }
            </div>
        </>
    )
}