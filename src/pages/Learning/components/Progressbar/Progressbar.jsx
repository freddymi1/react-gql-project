import React from 'react';
import { useQuery } from '@apollo/client';

import {COUNT_LESSON, COUNT_IS_ACHIEVED_LESSON }from '../../../../services/queries/StudentXLessonQueries';

const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
sessionStorage.removeItem('SXLs');
function Progressbar (props){
    console.log(props.course)
    const { loading: countLLoading, error: countLError, data: countLData } = useQuery(COUNT_LESSON(
        props.course.id
    ));
    const {
        loading: countIALLoading,
        error: countIALError,
        data: countIALData,
      } = useQuery(
        COUNT_IS_ACHIEVED_LESSON(
          props.course.id,
          currentUser.data.data.id,
          true
        )
      );
    if(countLLoading) return <p>Loading</p>
    // if(countLError) return <p>Error</p>
    if(countLData) console.log(countLData.countLessons)
    if(countIALLoading) return <p>Loading</p>
    // if(countIALError) return <p>Error</p>
    if(countIALData) console.log(countIALData.countIsAchievedLessons)
    

    let width;
    if (countLData && countIALData) {
    width =
        (countIALData.countIsAchievedLessons /
        countLData.countLessons) *
        100;
    } else {
    width = 0;
    }
    const styles = { width: `${width >= 0 ? width : 0}%` };
    console.log(styles)
    return(
        <>
            <div className="w-full bg-gray-300 rounded-lg">
                <div className="p-2 bg-yellow-300 rounded-lg" style={styles}></div>
            </div>
        </>
    )

}
export default Progressbar;