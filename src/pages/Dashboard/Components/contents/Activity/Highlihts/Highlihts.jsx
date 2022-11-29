import React, {useState, useRef} from 'react';
import { useQuery } from '@apollo/client';

import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdTrophy, IoMdStar} from 'react-icons/io';

import { STUDENT_X_PATHS_BY_STUDENT_ID } from '../../../../../../services/queries/StudentXPathQueries'

import { RECENT_STUDENT_X_PATHS_IS_ACHIEVED } from '../../../../../../services/queries/StudentXPathQueries';
import { RECENT_STUDENT_X_STAGES_IS_ACHIEVED } from '../../../../../../services/queries/StudentXStageQueries';
import { RECENT_STUDENT_X_LEARNINGS_IS_ACHIEVED } from '../../../../../../services/queries/StudentXLearningQueries';
import { RECENT_STUDENT_X_COURSES_IS_ACHIEVED } from '../../../../../../services/queries/StudentXCourseQueries';
import { RECENT_STUDENT_X_LESSONS_IS_ACHIEVED } from '../../../../../../services/queries/StudentXLessonQueries';
import { ALL_STUDENT_2,SHOW_STUDENT_2 } from '../../../../../../services/queries/StudentsQueries';

// import TotalXP from './Components/Xp/TotalXP';
import './Styles/Accordion.css';
import Chevron from './Components/Chevron/Chevron';

import RecentBadgePath from './Components/RecentBadges/CardBadgePath';
import RecentBadgeStage from './Components/RecentBadges/CardBadgeStage';
import RecentBadgeLearning from './Components/RecentBadges/CardBadgeLearning';
import RecentBadgeCourse from './Components/RecentBadges/CardBadgeCourse';
import RecentBadgeLesson from './Components/RecentBadges/CardBadgeLesson';


const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

const Highliht = () => {

  const [active, setActive] = useState("")
  const [height, setHeight] = useState("0px")
  const [rotate, setRotate] = useState("accordion_icon")

  const content = useRef(null);


  
  function toggleAccordion(){
    setActive(active === "" ? "active" : "")
    setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`)
    setRotate(active === "active" ? "accordion_icon" : "accordion_icon rotate")
    console.log(content.current.scrollHeight)
  }
  const {loading:stLoading, error:stError, data:stData} = useQuery(SHOW_STUDENT_2(currentUser.data.data.id))

  const {
    loading:AllStudentLoading,
    error: AllStudentError,
    data: AllStudentData
} = useQuery(ALL_STUDENT_2)
  
  const {
    loading: sxPLoading,
    error: sxPError,
    data: sxPData
  } = useQuery(STUDENT_X_PATHS_BY_STUDENT_ID(currentUser.data.data.id))
  
  // BADGES based on isAchieved

  const {
    loading: SXPiALoading,
    error: SXPiAError,
    data: SXPiAData,
  } = useQuery(RECENT_STUDENT_X_PATHS_IS_ACHIEVED(currentUser.data.data.id));

  const {
    loading: SXSiALoading,
    error: SXSiAError,
    data: SXSiAData,
  } = useQuery(RECENT_STUDENT_X_STAGES_IS_ACHIEVED(currentUser.data.data.id));

  const {
    loading: SXLiALoading,
    error: SXLiAError,
    data: SXLiAData,
  } = useQuery(
    RECENT_STUDENT_X_LEARNINGS_IS_ACHIEVED(currentUser.data.data.id)
  );

  const {
    loading: SXCiALoading,
    error: SXCiAError,
    data: SXCiAData,
  } = useQuery(RECENT_STUDENT_X_COURSES_IS_ACHIEVED(currentUser.data.data.id));

  const {
    loading: SXLSiALoading,
    error: SXLSiAError,
    data: SXLSiAData,
  } = useQuery(RECENT_STUDENT_X_LESSONS_IS_ACHIEVED(currentUser.data.data.id));

  // STUDENT-X-PATH
  if(sxPLoading) return <p>Loading sxp...</p>
  if(sxPError) return <p>Erreur sxp</p>

  // STUDENT-X-iA 
  if (SXPiALoading) return <p>Loading...</p>;
  if (SXPiAError) return <p>Error :(</p>;
  let BadgePath = SXPiAData.recentStudentXPathsIsAchieved.length
  // console.log(BadgePath)
 

  if (SXSiALoading) return <p>Loading...</p>;
  if (SXSiAError) return <p>Error :(</p>;
  let BadgeStage = SXSiAData.recentStudentXStagesIsAchieved.length
  // console.log(BadgeStage)
  
    

  if (SXLiALoading) return <p>Loading...</p>;
  if (SXLiAError) return <p>Error :(</p>;
  let BadgeLearning = SXLiAData.recentStudentXLearningsIsAchieved.length
  // console.log(BadgeLearning)
  

  if (SXCiALoading) return <p>Loading...</p>;
  if (SXCiAError) return <p>Error :(</p>;
  let BadgeCourse = SXCiAData.recentStudentXCoursesIsAchieved.length
  // console.log(BadgeCourse)
  
  if (SXLSiALoading) return <p>Loading...</p>;
  if (SXLSiAError) return <p>Error :(</p>;
  let BadgeLesson = SXLSiAData.recentStudentXLessonsIsAchieved.length
  // console.log(BadgeLesson)
  // Show-student
  if(stLoading) return <p>Loading...</p>
  if(stError) return <p>Error</p>
 
  // 5 1ere badge
  if(AllStudentLoading) return <p>Loading student...</p>
  if(AllStudentError) return <p>Student error...</p>

  let cards = [];
  // BADGE

  SXPiAData.recentStudentXPathsIsAchieved.map((sxp) => {
    // console.log(sxp.updatedAt);
    cards.push(
      <RecentBadgePath
        key={new Date(sxp.updatedAt.replace(/-/g, ' '))}
        badge={'pathBadge'}
        pathTitle={sxp.path.title}
        updatedAt={sxp.updatedAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  SXSiAData.recentStudentXStagesIsAchieved.map((sxs) => {
    cards.push(
      <RecentBadgeStage
        key={new Date(sxs.updatedAt.replace(/-/g, ' '))}
        badge={'StageBadge'}
        stageTitle={sxs.stage.title}
        updatedAt={sxs.updatedAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  SXLiAData.recentStudentXLearningsIsAchieved.map((sxl) => {
    cards.push(
      <RecentBadgeLearning
        key={new Date(sxl.updatedAt.replace(/-/g, ' '))}
        badge={'learningBadge'}
        learningTitle={sxl.learning.title}
        updatedAt={sxl.updatedAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  SXCiAData.recentStudentXCoursesIsAchieved.map((sxc) => {
    cards.push(
      <RecentBadgeCourse
        key={new Date(sxc.updatedAt.replace(/-/g, ' '))}
        badge={'courseBadge'}
        courseTitle={sxc.course.title}
        updatedAt={sxc.updatedAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  SXLSiAData.recentStudentXLessonsIsAchieved.map((sxls) => {
    cards.push(
      <RecentBadgeLesson
        key={new Date(sxls.updatedAt.replace(/-/g, ' '))}
        badge={'lessonBadge'}
        lessonTitle={sxls.lesson.title}
        updatedAt={sxls.updatedAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  
  cards = cards.sort((a, b) => new Date(b.key) - new Date(a.key));
  console.log(cards);
  // Total XP pour un student
  let myXp = stData.student.totalXp
  console.log(myXp)

  // Tout les XP des toutes les students
  let arrayXP = []

  AllStudentData.allStudents.map(function(xp) {
      arrayXP.push(xp.totalXp)
  })
  // Calcul de somme des valeurs dans le tableau arrayXP
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // console.log(arrayXP.reduce(reducer))
  let sommeXP = arrayXP.reduce(reducer)
  // Calcule de pourcentage d'un student par rapport a toutes les etudiants
  let rangeStudent = (myXp/sommeXP) * 100
  

  return (
    <>
      <div className="w-full mt-8 mx-auto px-6 border-gray-500 shadow-lg">
          <div className="bg-white block border-b-2 py-2 border-gray-400">
              <div className="bg-white block text-center md:text-left">
                  <label className=" mb-4 font-semibold uppercase text-gray-500 dark:text-gray-300">
                      HIGHLITHS
                  </label>
              </div>
              <div className="space-y-2 mt-4">
                  <div className="text-gray-500 space-x-4">
                    <IoMdStar className="inline" size="1.5em" />
                    <span classname="text-gray-500">
                        Total XP:&nbsp; 
                        <b className="text-green-500">
                        { myXp !== null ? myXp : '0'} XP
                        </b>
                    </span>
                  </div>
                      
                  <div className="text-gray-500 space-x-4">
                      <IoMdTrophy className="inline" size="1.5em" />
                      <span>Range: <b className="text-green-500 font-bold">
                        {rangeStudent.toFixed(3)}%</b>
                      </span>
                  </div>
                  
              </div>
          </div>

          <div className="py-4 space-y-3">
              <div>
                  <label className="text-gray-500 text-lg">Badges</label>
              </div>
              
              <div className="accordion_section">
                  <div className="accordion">
                      
                      <div className="accordion_title space-x-2">
                        
                          {
                            BadgePath !== 0 ?(
                              <div className="w-14 h-14 inline-block rounded-full bg-green-700 text-white text-center" style={{lineHeight:"3.6rem"}}>
                                <p className="title">P</p>
                              </div>
                            ):(
                              <div className="w-14 h-14 hidden inline-block rounded-full bg-gray-700 text-white text-center" style={{lineHeight:"3.6rem"}}>
                                <p className="title">{BadgePath}</p>
                              </div>
                            )
                          }
                          {
                            BadgeStage !== 0 ? (
                              <div className="w-14 h-14 inline-block rounded-full bg-green-700 text-white text-center" style={{lineHeight:"3.6rem"}}>
                                <p className="title">S</p>
                              </div>
                            ):(
                              <div className="w-14 h-14 hidden inline-block rounded-full bg-green-700 text-white text-center" style={{lineHeight:"3.6rem"}}>
                                <p className="title">{BadgeStage}</p>
                              </div>
                            )
                          }
                          {
                            BadgeLearning !== 0 ? (
                              <div className="w-14 h-14 inline-block rounded-full bg-green-700 text-white text-center" style={{lineHeight:"3.6rem"}}>
                                <p className="title">L</p>
                              </div>
                            ):(
                              <div className="w-14 h-14 hidden inline-block rounded-full bg-gray-700 text-white text-center" style={{lineHeight:"3.6rem"}}>
                                <p className="title">{BadgeLearning}</p>
                              </div>
                            )
                          }
                          {
                            BadgeCourse !== 0 ? (
                              <div className="w-14 h-14 inline-block rounded-full bg-green-700 text-white text-center" style={{lineHeight:"3.6rem"}}>
                                <p className="title">C</p>
                              </div>
                            ):(
                              <div className="w-14 h-14 hidden inline-block rounded-full bg-gray-700 text-white text-center" style={{lineHeight:"3.6rem"}}>
                                <p className="title">{BadgeCourse}</p>
                              </div>
                            )
                          }
                          {
                            BadgeLesson !== 0 ? (
                              <div className="w-14 h-14 inline-block rounded-full bg-green-700 text-white text-center" style={{lineHeight:"3.6rem"}}>
                                <p className="title">L</p>
                              </div>
                            ):(
                              <div className="w-14 h-14 hidden inline-block rounded-full bg-gray-700 text-white text-center" style={{lineHeight:"3.6rem"}}>
                                <p className="title">{BadgeLesson}</p>
                              </div>
                            )
                          }
                          
                          <div 
                            className={`w-14 h-14 cursor-pointer inline-block rounded-full bg-gray-300 text-gray-600 text-center ${active}`}
                            style={{lineHeight:"3.5rem"}}
                            onClick={toggleAccordion}
                            >
                              <FiMoreHorizontal className="inline" size="2em"/>
                          </div>
                      </div>
                      <Chevron className={`${rotate}`} size={"1.5em"} color={"#444"} position={"right"}/>
                  </div>
                  
                  <div
                      ref={content}
                      style={{maxHeight:`${height}`}}
                      className="accordion_content">
                        
                          {
                            cards.length !== 0 ? (
                              <div className='mt-4 p-6 w-full justify-items-auto'>
                                <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                  {cards.slice(0, 4)}
                                </div>
                              </div>
                            ):(
                              <div className="w-full text-center block   pt-8">
                                <h1 className="mb-4 font-semibold text-center text-gray-500 dark:text-gray-300">
                                  Hi &nbsp;
                                  <span className="text-red-400">{currentUser.data.data.name}</span>
                                  , vous n'avez pas encore de badge disponible!
                                </h1>
                              </div>
                            )
                          }                         
                          
                  </div>
              </div>

          </div>
          {/* <div className="w-full md:w-1/4 mx-auto py-4">
              <button
                  className="bg-gray-50 w-full px-6 text-gray-500 active:bg-indigo-800 text-sm font-bold uppercase py-3 shadow hover:shadow-lg outline-none focus:outline-none"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                  >
                  SHOW MORE
              </button>
          </div>  */}
    
    </div>
    </>
  );
};

export default Highliht;
