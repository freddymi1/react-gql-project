import React from 'react';
import { Link } from 'react-router-dom'
import { BiBookOpen } from "react-icons/bi";

let LessonProgress = (props) => {
  if(props.isAchieved){
    return(
      <>
        <Link to={ "/course/" + props.courseId + "/lesson/" + props.lessonVideoId }>
        <div className="flex-1">
          <div className="w-10 h-10 bg-yellow-300 mx-auto rounded-full text-lg text-white flex items-center">
            <span className="text-white text-center w-full">
              <BiBookOpen size="1.5em" className="text-white text-black inline-block" />
            </span>
          </div>
        </div>
        </Link>
      </>
    );
  }

  return(
    <>
      <div className="flex-1">
        <div className="w-10 h-10 bg-gray-300 mx-auto rounded-full text-lg text-white flex items-center">
          <span className="text-white text-center w-full">
            <BiBookOpen size="1.5em" className="text-white text-black inline-block" />
          </span>
        </div>
      </div>
    </>
  );
}

export default LessonProgress;