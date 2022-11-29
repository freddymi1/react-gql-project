import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { RECENT_STUDENT_X_PATHS } from '../../../../../../services/queries/StudentXPathQueries';
import { RECENT_STUDENT_X_STAGES } from '../../../../../../services/queries/StudentXStageQueries';
import { RECENT_STUDENT_X_LEARNINGS } from '../../../../../../services/queries/StudentXLearningQueries';
import { RECENT_STUDENT_X_COURSES } from '../../../../../../services/queries/StudentXCourseQueries';
import { RECENT_STUDENT_X_LESSONS } from '../../../../../../services/queries/StudentXLessonQueries';

import { RECENT_STUDENT_X_PATHS_IS_ACHIEVED } from '../../../../../../services/queries/StudentXPathQueries';
import { RECENT_STUDENT_X_STAGES_IS_ACHIEVED } from '../../../../../../services/queries/StudentXStageQueries';
import { RECENT_STUDENT_X_LEARNINGS_IS_ACHIEVED } from '../../../../../../services/queries/StudentXLearningQueries';
import { RECENT_STUDENT_X_COURSES_IS_ACHIEVED } from '../../../../../../services/queries/StudentXCourseQueries';
import { RECENT_STUDENT_X_LESSONS_IS_ACHIEVED } from '../../../../../../services/queries/StudentXLessonQueries';

import RecentCardPath from './Components/RecentCards/RecentCardPath';
import RecentCardStage from './Components/RecentCards/RecentCardStage';
import RecentCardLearning from './Components/RecentCards/RecentCardLearning';
import RecentCardCourse from './Components/RecentCards/RecentCardCourse';
import RecentCardLesson from './Components/RecentCards/RecentCardLesson';

import RecentBadgePath from './Components/RecentBadges/CardBadgePath';
import RecentBadgeStage from './Components/RecentBadges/CardBadgeStage';
import RecentBadgeLearning from './Components/RecentBadges/CardBadgeLearning';
import RecentBadgeCourse from './Components/RecentBadges/CardBadgeCourse';
import RecentBadgeLesson from './Components/RecentBadges/CardBadgeLesson';

const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

const Recent = () => {
  const { loading: SXPLoading, error: SXPError, data: SXPData } = useQuery(
    RECENT_STUDENT_X_PATHS(currentUser.data.data.id)
  );

  const { loading: SXSLoading, error: SXSError, data: SXSData } = useQuery(
    RECENT_STUDENT_X_STAGES(currentUser.data.data.id)
  );

  const { loading: SXLLoading, error: SXLError, data: SXLData } = useQuery(
    RECENT_STUDENT_X_LEARNINGS(currentUser.data.data.id)
  );

  const { loading: SXCLoading, error: SXCError, data: SXCData } = useQuery(
    RECENT_STUDENT_X_COURSES(currentUser.data.data.id)
  );

  const { loading: SXLSLoading, error: SXLSError, data: SXLSData } = useQuery(
    RECENT_STUDENT_X_LESSONS(currentUser.data.data.id)
  );

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

  // RECENT-PATH

  if (SXPLoading) return <p>Loading...</p>;
  if (SXPError) return <p>Error :(</p>;
  // if (SXPData) console.log(SXPData);

  if (SXPiALoading) return <p>Loading...</p>;
  if (SXPiAError) return <p>Error :(</p>;
  if (SXPiAData) console.log(SXPiAData);

  // RECENT-STAGE

  if (SXSLoading) return <p>Loading...</p>;
  if (SXSError) return <p>Error :(</p>;
  // if (SXSData) console.log(SXSData);

  if (SXSiALoading) return <p>Loading...</p>;
  if (SXSiAError) return <p>Error :(</p>;
  if (SXSiAData) console.log(SXSiAData);

  // RECENT-LEARNING

  if (SXLLoading) return <p>Loading...</p>;
  if (SXLError) return <p>Error :(</p>;
  // if (SXLData) console.log(SXLData);

  if (SXLiALoading) return <p>Loading...</p>;
  if (SXLiAError) return <p>Error :(</p>;
  if (SXLiAData) console.log(SXLiAData);

  // RECENT-COURSE

  if (SXCLoading) return <p>Loading...</p>;
  if (SXCError) return <p>Error :(</p>;
  // if (SXCData) console.log(SXCData);

  if (SXCiALoading) return <p>Loading...</p>;
  if (SXCiAError) return <p>Error :(</p>;
  if (SXCiAData) console.log(SXCiAData);

  // RECENT-LESSON

  if (SXLSLoading) return <p>Loading...</p>;
  if (SXLSError) return <p>Error :(</p>;
  // if (SXLSData) console.log(SXLSData);

  if (SXLSiALoading) return <p>Loading...</p>;
  if (SXLSiAError) return <p>Error :(</p>;
  if (SXLSiAData) console.log(SXLSiAData);

  let cardPath1 = [];
  let cardStage1 = [];
  let cardLearning1 = [];
  let cardCourse1 = [];
  let cardLesson1 = [];

  SXPData.recentStudentXPaths.map((sxp) => {
    // console.log(sxp.createdAt);
    cardPath1.push(
      <RecentCardPath
        key={new Date(sxp.createdAt.replace(/-/g, ' '))}
        pathTitle={sxp.path.title}
        createdAt={sxp.createdAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  for (let i = cardPath1.length - 1; i >= 0; i--) {
    for (let j = 0; j < cardPath1.length; j++) {
      if (cardPath1[i]) {
        if (cardPath1[j]) {
          if (
            cardPath1[i].props.pathTitle === cardPath1[j].props.pathTitle &&
            i !== j
          ) {
            cardPath1.splice(i, 1);
          }
        }
      }
    }
  }

  SXSData.recentStudentXStages.map((sxs) => {
    cardStage1.push(
      <RecentCardStage
        key={new Date(sxs.createdAt.replace(/-/g, ' '))}
        stageTitle={sxs.stage.title}
        createdAt={sxs.createdAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  for (let i = cardStage1.length - 1; i >= 0; i--) {
    for (let j = 0; j < cardStage1.length; j++) {
      if (cardStage1[i]) {
        if (cardStage1[j]) {
          if (
            cardStage1[i].props.stageTitle === cardStage1[j].props.stageTitle &&
            i !== j
          ) {
            cardStage1.splice(i, 1);
          }
        }
      }
    }
  }

  SXLData.recentStudentXLearnings.map((sxl) => {
    cardLearning1.push(
      <RecentCardLearning
        key={new Date(sxl.createdAt.replace(/-/g, ' '))}
        learningTitle={sxl.learning.title}
        createdAt={sxl.createdAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  for (let i = cardLearning1.length - 1; i >= 0; i--) {
    for (let j = 0; j < cardLearning1.length; j++) {
      if (cardLearning1[i]) {
        if (cardLearning1[j]) {
          if (
            cardLearning1[i].props.learningTitle ===
              cardLearning1[j].props.learningTitle &&
            i !== j
          ) {
            cardLearning1.splice(i, 1);
          }
        }
      }
    }
  }

  SXCData.recentStudentXCourses.map((sxc) => {
    cardCourse1.push(
      <RecentCardCourse
        key={new Date(sxc.createdAt.replace(/-/g, ' '))}
        courseTitle={sxc.course.title}
        createdAt={sxc.createdAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  for (let i = cardCourse1.length - 1; i >= 0; i--) {
    for (let j = 0; j < cardCourse1.length; j++) {
      if (cardCourse1[i]) {
        if (cardCourse1[j]) {
          if (
            cardCourse1[i].props.courseTitle ===
              cardCourse1[j].props.courseTitle &&
            i !== j
          ) {
            cardCourse1.splice(i, 1);
          }
        }
      }
    }
  }

  SXLSData.recentStudentXLessons.map((sxls) => {
    cardLesson1.push(
      <RecentCardLesson
        key={new Date(sxls.createdAt.replace(/-/g, ' '))}
        lessonTitle={sxls.lesson.title}
        createdAt={sxls.createdAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  for (let i = cardLesson1.length - 1; i >= 0; i--) {
    for (let j = 0; j < cardLesson1.length; j++) {
      if (cardLesson1[i]) {
        if (cardLesson1[j]) {
          if (
            cardLesson1[i].props.lessonTitle ===
              cardLesson1[j].props.lessonTitle &&
            i !== j
          ) {
            cardLesson1.splice(i, 1);
          }
        }
      }
    }
  }

  // BADGE

  let cardPath2 = [];
  let cardStage2 = [];
  let cardLearning2 = [];
  let cardCourse2 = [];
  let cardLesson2 = [];

  SXPiAData.recentStudentXPathsIsAchieved.map((sxp) => {
    // console.log(sxp.createdAt);
    cardPath2.push(
      <RecentBadgePath
        key={new Date(sxp.createdAt.replace(/-/g, ' '))}
        badge={'pathBadge'}
        cardPath2={sxp.path.title}
        createdAt={sxp.createdAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  SXSiAData.recentStudentXStagesIsAchieved.map((sxs) => {
    cardStage2.push(
      <RecentBadgeStage
        key={new Date(sxs.createdAt.replace(/-/g, ' '))}
        badge={'StageBadge'}
        stageTitle={sxs.stage.title}
        createdAt={sxs.createdAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  SXLiAData.recentStudentXLearningsIsAchieved.map((sxl) => {
    cardLearning2.push(
      <RecentBadgeLearning
        key={new Date(sxl.createdAt.replace(/-/g, ' '))}
        badge={'learningBadge'}
        learningTitle={sxl.learning.title}
        createdAt={sxl.createdAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  SXCiAData.recentStudentXCoursesIsAchieved.map((sxc) => {
    cardCourse2.push(
      <RecentBadgeCourse
        key={new Date(sxc.createdAt.replace(/-/g, ' '))}
        badge={'courseBadge'}
        courseTitle={sxc.course.title}
        createdAt={sxc.createdAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  SXLSiAData.recentStudentXLessonsIsAchieved.map((sxls) => {
    cardLesson2.push(
      <RecentBadgeLesson
        key={new Date(sxls.createdAt.replace(/-/g, ' '))}
        badge={'lessonBadge'}
        lessonTitle={sxls.lesson.title}
        createdAt={sxls.createdAt.replace(/-/g, ' ')}
        userName={currentUser.data.data.name}
      />
    );
  });

  // let cardPath1 = [];
  // let cardStage1 = [];
  // let cardLearning1 = [];
  // let cardCourse1 = [];
  // let cardLesson1 = [];

  let cards = [];
  cards.push(
    cardPath1,
    cardStage1,
    cardLearning1,
    cardCourse1,
    cardLesson1,
    cardPath2,
    cardStage2,
    cardLearning2,
    cardCourse2,
    cardLesson2
  );

  cards = cards.flat().sort((a, b) => new Date(b.key) - new Date(a.key));
  console.log(cards.flat());
  return (
    <div className="pb-60">
      <h1 className="text-center md:text-left mb-4 px-6 py-4 font-semibold uppercase text-gray-500 dark:text-gray-300">
        MOST RECENT
      </h1>
      {cards[0]}
      {cards[1]}
      {cards[2]}
      {cards[3]}
      {cards[4]}
      {/* {cards[47]} */}
    </div>
  );
};

export default Recent;
