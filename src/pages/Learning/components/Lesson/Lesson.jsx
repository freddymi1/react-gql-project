import React, {useState} from "react";
import {Link} from 'react-router-dom'
import {FaLock, FaLockOpen, FaCheck} from 'react-icons/fa';
function Lesson(props) {
  const ress = props.lesson.ressources.map(ressource =>
    <p key={ressource.link}>{ressource.link}</p>
  )
  // console.log(ress)
  const [ countComment, setCountComment ] = useState(0)
  if(props.isAchieved){
    return(
      <>
          <div className={ "lofc" + props.courseId + " relative lg:right-11 xl:right-12 block items-center flex flex-row md:w-full lg:w-4/5 mt-11" }>
            <div className="relative right-1.5 p-4 w-28 flex justify-center">
              <span className="block w-4 h-4 bg-red-700 rounded-full"></span>
            </div>
            <div className="w-3/5">
              <Link to={ "/course/" + props.courseId + "/video_lesson/" + props.lesson.lessonVideo.id }>
              <div className="w-full h-full p-4 rounded-md bg-red-700 leading-relaxed">
                <p className="text-white font-lg text-left font-bold">{ props.lesson.title }</p>
                <p className="text-white font-light text-left">
                <span className="inline pl-3">{ countComment } commentaires</span>
                <FaCheck size="2em" className="text-gray-50 -mt-4 float-right" style={{zIndex:"999"}}/>
                </p>
              </div>
              </Link>
            </div>
            <div className="h-2 w-14 bg-gray-300"></div>
            <div className="w-2/5">
              <div className="w-full h-full p-4 rounded-md bg-red-700">
                <a href="#" target="_blank">
                  <p className="text-white hover:text-blue-400 font-lg text-left font-bold" style={{transition:".4s"}}>{ ress }</p>
                </a>
              </div>
            </div>
          </div>
      </>
    )
  }
  if(props.isActive && props.lesson.lessonVideo !== null) {
    return(
      <>
          <div className={ "lofc" + props.courseId + " relative lg:right-11 xl:right-12 block items-center flex flex-row md:w-full lg:w-4/5 mt-11" }>
            <div className="relative right-1.5 p-4 w-28 flex justify-center">
              <span className="block w-4 h-4 bg-green-700 rounded-full"></span>
            </div>
            <div className="w-3/5">
              <Link to={ "/course/" + props.courseId + "/video_lesson/" + props.lesson.lessonVideo.id }>
              <div className="w-full h-full p-4 rounded-md bg-green-700 leading-relaxed">
                <p className="text-white font-lg text-left font-bold">{ props.lesson.title }</p>
                <p className="text-white font-light text-left">
                <span className="inline pl-3">{ countComment } commentaires</span>
                <FaLockOpen size="2em" className="text-gray-50 -mt-4 float-right" style={{zIndex:"999"}}/>
                </p>
              </div>
              </Link>
            </div>
            <div className="h-2 w-14 bg-gray-300"></div>
            <div className="w-2/5">
              <div className="w-full h-full p-4 rounded-md bg-green-700">
                <a href="#" target="_blank">
                  <p className="text-white hover:text-blue-400 font-lg text-left font-bold" style={{transition:".4s"}}>{ ress }</p>
                </a>
              </div>
            </div>
          </div>
      </>
    )
  }


  if(props.isActive) {
    return(
      <>
          <div className={ "lofc" + props.courseId + " relative lg:right-11 xl:right-12 block items-center flex flex-row md:w-full lg:w-4/5 mt-11" }>
            <div className="relative right-1.5 p-4 w-28 flex justify-center">
              <span className="block w-4 h-4 bg-gray-300 rounded-full"></span>
            </div>
            <div className="w-3/5">
              <Link to={ "/course/" + props.courseId + "/lesson/" + props.lesson.id }>
              <div className="w-full h-full p-4 rounded-md bg-green-700 leading-relaxed">
                <p className="text-white font-lg text-left font-bold">{ props.lesson.title }</p>
                <p className="text-white font-light text-left">
                  18 comments
                </p>
                <FaLockOpen size="2em" className="text-gray-50 -mt-6 float-right" style={{zIndex:"999"}}/>
              </div>
              </Link>
            </div>
            <div className="h-2 w-14 bg-gray-300"></div>
            <div className="w-2/5">
              <div className="w-full h-full p-4 rounded-md bg-green-700">
                <a href="#">
                  <p className="text-white hover:text-blue-400 font-lg text-left font-bold">{ ress }</p>
                </a>
              </div>
            </div>
          </div>
      </>
    )
  }

  if(props.isActive === false && props.lesson.lessonVideo !== null) {
    return (
      <>
        <div className={ "lofc" + props.courseId + " relative lg:right-11 xl:right-12 block items-center flex flex-row md:w-full lg:w-4/5 mt-11" }
        >
          <div className="relative right-1.5 p-4 w-28 flex justify-center">
            <span className="block w-4 h-4 bg-gray-300 rounded-full"></span>
          </div>
          <div className="w-3/5">
            <Link to={ "/course/" + props.courseId + "/video_lesson/" + props.lesson.lessonVideo.id }>
            <div className="w-full h-full p-4 rounded-md bg-gray-500 leading-relaxed">
              <p className="text-white font-lg text-left font-bold">{ props.lesson.title }</p>
              <p className="text-white font-light text-left">
              <span className="inline pl-3">{ countComment } commentaires</span>
              </p>
              <FaLock size="2em" className="text-gray-50 -mt-12 float-right" style={{zIndex:"999"}}/>
            </div>
            
            </Link>
          </div>
          <div className="h-2 w-14 bg-gray-300"></div>
          <div className="w-2/5">
            <div className="w-full h-full py-2 px-4 rounded-md bg-gray-500">
              <a href="#">
                <p className="transition duration-500 text-white hover:text-blue-400 font-lg text-left font-bold">{ ress }</p>
              </a>
            </div>
          </div>
        </div>
  
      </>
    )
  }

  return (
    <>
      <div className={ "lofc" + props.courseId + " relative lg:right-11 xl:right-12 block items-center flex flex-row md:w-full lg:w-4/5 mt-11" }>
        <div className="relative right-1.5 p-4 w-28 flex justify-center">
          <span className="block w-4 h-4 bg-gray-300 rounded-full"></span>
        </div>
        <div className="w-3/5">
          <Link to={ "/course/" + props.courseId + "/lesson/" + props.lesson.id }>
            <div className="w-full h-full p-4 rounded-md bg-green-500 leading-relaxed">
              <p className="text-white font-lg text-left font-bold">{ props.lesson.title }</p>
              <p className="text-white font-light text-left">
                18 comments
              </p>
            </div>
            <div>
              <FaLock size="2em" className="text-gray-50" style={{zIndex:"999"}}/>
            </div>
          </Link>
        </div>
        <div className="h-2 w-14 bg-gray-300"></div>
        <div className="w-2/5">
          <div className="w-full h-full p-4 rounded-md bg-gray-500">
            <a href="#">
              <p className="text-white hover:text-blue-400 font-lg text-left font-bold">{ ress }</p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Lesson;