import React from 'react';

import { useParams } from 'react-router-dom';

import './styles/style.css';

import Stage from './components/Stage/Stage';

import { useQuery } from '@apollo/client';

import { SHOW_PATH } from '../../services/queries/PathsQueries';
import { COUNT_STUDENT_X_STAGE } from '../../services/queries/StudentXStageQueries';
import { COUNT_STUDENT_X_LEARNING } from '../../services/queries/StudentXLearningQueries';
import { COUNT_STUDENT_X_COURSE } from '../../services/queries/StudentXCourseQueries';

import PathComponent1 from './components/PathComponent1';
import PathComponent2 from './components/PathComponent2';

const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

sessionStorage.removeItem('SXLs');

const Path = currentUser
  ? () => {
      let { id } = useParams();

      const {
        loading: pathLoading,
        error: pathError,
        data: pathData,
      } = useQuery(SHOW_PATH(id));
      // if (pathData) console.log(id);
      const {
        loading: countSXSLoading,
        error: countSXSError,
        data: countSXSData,
      } = useQuery(COUNT_STUDENT_X_STAGE(id, currentUser.data.data.id, true));

      const {
        loading: countSXLLoading,
        error: countSXLError,
        data: countSXLData,
      } = useQuery(
        COUNT_STUDENT_X_LEARNING(id, currentUser.data.data.id, true)
      );

      const {
        loading: countSXCLoading,
        error: countSXCError,
        data: countSXCData,
      } = useQuery(COUNT_STUDENT_X_COURSE(id, currentUser.data.data.id, true));

      let currentPath = sessionStorage.getItem('currentPath');

      if (!currentPath && pathData) {
        sessionStorage.setItem('currentPath', JSON.stringify(pathData.path));
      } else {
        if (pathData) {
          sessionStorage.setItem('currentPath', JSON.stringify(pathData.path));
        }
      }

      let learningCount = 0;
      let courseCount = 0;

      if (pathLoading) return <p>Loading...</p>;
      if (pathError) return <p>Error :(</p>;

      if (pathData) {
        // console.log(pathData);
        pathData.path.stages.map((s) => {
          learningCount += s.learnings.length;
          s.learnings.map((l) => {
            courseCount += l.learningXCourses.length;
          });
        });
      }

      // if (countSXSData) console.log(countSXSData);
      // if (countSXLData) console.log(countSXLData);
      // if (countSXCData) console.log(countSXCData);
      // if (pathData) console.log(pathData.path.stages.learnings);

      const stageArray = [];
      pathData.path.stages.map((stage) =>
        stageArray.push(<Stage key={stage.id} stage={stage} />)
      );

      // console.log(stageArray.sort((a, b) => a.key - b.key));

      return (
        <>
          <PathComponent1
            pathData={pathData}
            stageArray={stageArray}
            learningCount={learningCount}
            courseCount={courseCount}
            countSXSData={countSXSData}
            countSXLData={countSXLData}
            countSXCData={countSXCData}
          />
        </>
      );
    }
  : () => {
      let { id } = useParams();

      const {
        loading: pathLoading,
        error: pathError,
        data: pathData,
      } = useQuery(SHOW_PATH(id));

      let currentPath = sessionStorage.getItem('currentPath');

      if (!currentPath && pathData) {
        sessionStorage.setItem('currentPath', JSON.stringify(pathData.path));
      } else {
        if (pathData) {
          sessionStorage.setItem('currentPath', JSON.stringify(pathData.path));
        }
      }

      let learningCount = 0;
      let courseCount = 0;

      if (pathLoading) return <p>Loading...</p>;
      if (pathError) return <p>Error :(</p>;

      if (pathData) {
        pathData.path.stages.map((s) => {
          learningCount += s.learnings.length;
          // console.log(s.learnings);
          s.learnings.map((l) => {
            courseCount += l.learningXCourses.length;
            // console.log(l.learningXCourses);
          });
        });
      }

      const stageArray = [];
      pathData.path.stages.map((stage) =>
        stageArray.push(<Stage key={stage.id} stage={stage} />)
      );

      return (
        <>
          <PathComponent2 pathData={pathData} stageArray={stageArray} />
        </>
      );
    };

export default Path;
