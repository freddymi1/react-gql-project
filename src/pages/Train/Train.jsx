import React from "react"
import { useParams } from "react-router-dom"
import { useQuery } from '@apollo/client';

import { SHOW_COURSE } from '../../services/queries/CoursesQueries';
import { SHOW_LESSON } from '../../services/queries/LessonsQueries';

import ExerciseV1 from "./components/ExerciseV1/ExerciseV1"
import ExerciseV2 from "./components/ExerciseV2/ExerciseV2"
import ExerciseV3 from "./components/ExerciseV3/ExerciseV3"

const currentUser = sessionStorage.getItem("currentUser")

const Train = () => {
  const { lesson_id, course_id } = useParams()
  const { loading: lessonLoading, error: lessonError, data: lessonData } = useQuery(SHOW_LESSON(lesson_id));
  const { loading: courseLoading, error: courseError, data: courseData } = useQuery(SHOW_COURSE(course_id));

  if(lessonData){
    const language = JSON.parse(lessonData.lesson.exercise.language)
    const languageFilter = language.filter( l => l.item_text === "css" || l.item_text === "htmlembbed" || l.item_text === "HTML5")
    if(language.length === 1){
      return <ExerciseV2 exercise={ lessonData.lesson.exercise } />
    }

    if(language.length > 1 && languageFilter.length >= 1){
      return <ExerciseV1 exercise={ lessonData.lesson.exercise } />
    }

    return <ExerciseV3 exercise={ lessonData.lesson.exercise } />
  }


  return (
    <h1>
      TRAIN
    </h1>
  )
}

export default Train;