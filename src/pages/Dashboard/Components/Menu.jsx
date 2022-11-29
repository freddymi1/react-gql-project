import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import { STUDENT_X_PATHS_BY_STUDENT_ID } from '../../../services/queries/StudentXPathQueries'; //'../../../services/queries/StudentXPathQueries';
import { STUDENT_X_STAGES_BY_STUDENT_ID } from '../../../services/queries/StudentXStageQueries';
import { STUDENT_X_CODE_BY_STUDENT_ID } from '../../../services/queries/StudentXCodeQueries';
import { HiMenu } from 'react-icons/hi';
import Activity from './contents/Activity/Activity';

import Parkour from './contents/Parkour/Parkour';
import Stage from './contents/Stage/Stage';
import Module from './contents/Module/Module';
import Course from './contents/Course/Course';
import Lesson from './contents/Lesson/Lesson';
import Codes from './contents/Code/Codes';
import './Styles/Menu.css';
const currentUser = sessionStorage.getItem('currentUser');

const TabsComponent = ({
  color,
  openTab,
  setOpenTab,
  SXPData,
  SXSData,
  SXCData,
  countModule,
  countLesson,
  countCourse,
  SetCountModule,
  setCountCourse,
  setCountLesson,
}) => {
  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="w-full ">
          <ul
            className="flex mb-0 list-none overflow-y-hidden flex-row overflow-x-scroll  md:overflow-hidden"
            role="tablist"
          >
            <li className="-mb-px flex-auto last:mr-0 text-center">
              <a
                className={
                  'block text-xs py-2 text-center justify-center font-bold uppercase px-5 space-y-1 leading-normal ' +
                  (openTab === 1
                    ? 'text-gray-50 bg-' + color + '-700'
                    : 'text-' + color + '-500 bg-gray-100')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <span className="flex justify-center items-center text-center">
                  <HiMenu
                    className="flex justify-center items-center text-center"
                    size="2rem"
                  />
                </span>
                <span className="block tracking-widest">ACTIVITES</span>
              </a>
            </li>
            <li className="-mb-px flex-auto last:mr-0 text-center">
              <a
                className={
                  'block text-xs py-2 text-center justify-center font-bold uppercase px-5 leading-normal ' +
                  (openTab === 2
                    ? 'text-gray-50 bg-' + color + '-700'
                    : 'text-' + color + '-600 bg-gray-100')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <span
                  className="flex justify-center items-center text-center"
                  style={{ fontSize: '1.5rem' }}
                >
                  {SXPData ? SXPData.length : '0'}
                </span>
                <span className="block tracking-widest">PARCOURS</span>
              </a>
            </li>
            <li className="-mb-px flex-auto last:mr-0 text-center">
              <a
                className={
                  'block text-xs py-2 text-center justify-center font-bold uppercase px-5 leading-normal ' +
                  (openTab === 3
                    ? 'text-gray-50 bg-' + color + '-700'
                    : 'text-' + color + '-600 bg-gray-100')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <span
                  className="flex justify-center items-center text-center"
                  style={{ fontSize: '1.5rem' }}
                >
                  {SXSData ? SXSData.length : 0}
                </span>
                <span className="block tracking-widest">ETAPES</span>
              </a>
            </li>
            <li className="-mb-px flex-auto last:mr-0 text-center">
              <a
                className={
                  'block text-xs py-2 text-center justify-center font-bold uppercase px-5 leading-normal ' +
                  (openTab === 4
                    ? 'text-gray-50 bg-' + color + '-700'
                    : 'text-' + color + '-600 bg-gray-100')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <span
                  className="flex justify-center items-center text-center"
                  style={{ fontSize: '1.5rem' }}
                >
                  {countModule}
                </span>
                <span className="block tracking-widest">MODULES</span>
              </a>
            </li>
            <li className="-mb-px flex-auto last:mr-0 text-center">
              <a
                className={
                  'block text-xs py-2 text-center justify-center font-bold uppercase px-5 leading-normal ' +
                  (openTab === 5
                    ? 'text-gray-50 bg-' + color + '-700'
                    : 'text-' + color + '-600 bg-gray-100')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                <span
                  className="flex justify-center items-center text-center"
                  style={{ fontSize: '1.5rem' }}
                >
                  {countCourse}
                </span>
                <span className="block tracking-widest">COURS</span>
              </a>
            </li>
            <li className="-mb-px flex-auto last:mr-0 text-center">
              <a
                className={
                  'block text-xs py-2 text-center justify-center font-bold uppercase px-5 leading-normal ' +
                  (openTab === 6
                    ? 'text-gray-50 bg-' + color + '-700'
                    : 'text-' + color + '-600 bg-gray-100')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                <span
                  className="flex justify-center items-center text-center"
                  style={{ fontSize: '1.5rem' }}
                >
                  {countLesson}
                </span>
                <span className="block tracking-widest">LECONS</span>
              </a>
            </li>
            <li className="-mb-px flex-auto last:mr-0 text-center">
              <a
                className={
                  'block text-xs py-2 text-center justify-center font-bold uppercase px-5 leading-normal ' +
                  (openTab === 7
                    ? 'text-gray-50 bg-' + color + '-700'
                    : 'text-' + color + '-600 bg-gray-100')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
                data-toggle="tab"
                href="#link7"
                role="tablist"
              >
                <span
                  className="flex justify-center items-center text-center"
                  style={{ fontSize: '1.5rem' }}
                >
                  {SXCData ? SXCData.length : '0'}
                </span>
                <span className="block tracking-widest">CODES</span>
              </a>
            </li>
          </ul>
          <div className="relative  h-auto flex flex-auto min-w-0 break-words bg-white w-full mb-6">
            <div className="py-5 flex-auto ">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <Activity />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <Parkour />
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <Stage />
                </div>
                <div className={openTab === 4 ? 'block' : 'hidden'} id="link4">
                  <Module count={SetCountModule} />
                </div>
                <div className={openTab === 5 ? 'block' : 'hidden'} id="link5">
                  <Course count={setCountCourse} />
                </div>
                <div className={openTab === 6 ? 'block' : 'hidden'} id="link6">
                  <Lesson count={setCountLesson} />
                </div>
                <div className={openTab === 7 ? 'block' : 'hidden'} id="link7">
                  <Codes />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Tabs = ({ color }) => {
  const [countModule, SetCountModule] = useState(0);
  const [countLesson, setCountLesson] = useState(0);
  const [countCourse, setCountCourse] = useState(0);
  const [openTab, setOpenTab] = React.useState(1);

  const { loading: SXPLoading, error: SXPError, data: SXPData } = useQuery(
    STUDENT_X_PATHS_BY_STUDENT_ID(JSON.parse(currentUser).data.data.id)
  );
  const { loading: SXSLoading, error: SXSError, data: SXSData } = useQuery(
    STUDENT_X_STAGES_BY_STUDENT_ID(JSON.parse(currentUser).data.data.id)
  );
  const { loading: SXCLoading, error: SXCError, data: SXCData } = useQuery(
    STUDENT_X_CODE_BY_STUDENT_ID(JSON.parse(currentUser).data.data.id)
  );
  if (SXCLoading) return <p>Loding sxc...</p>;
  if (SXCError) return <p>Erreur</p>;
  if (SXCData) console.log(SXCData.studentXCodesByStudentId.length);

  return (
    <>
      <TabsComponent
        color={ color }
        openTab={ openTab } 
        setOpenTab={ setOpenTab } 
        SXPData={ SXPData ? SXPData.studentXPathsByStudentId : null } 
        SXSData={ SXSData ? SXSData.studentXStagesByStudentId : null } 
        SXCData={ SXCData ? SXCData.studentXCodesByStudentId : null } 
        countModule={ countModule }
        countLesson={ countLesson }
        countCourse={ countCourse }
        SetCountModule={ SetCountModule } 
        setCountCourse={ setCountCourse } 
        setCountLesson={ setCountLesson }
      />
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="green" />
    </>
  );
}
