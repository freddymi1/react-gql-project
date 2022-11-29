import React from "react";
import { HiMenu } from 'react-icons/hi'
import Activity from './Contenu/Activity/Activity';
import Code from './Contenu/Code/Code';
import Solutions from './Contenu/Solutions/Solutions';
import Posts from './Contenu/Posts/Posts';
import Questions from './Contenu/Questions/Questions';
import Answers from './Contenu/Answers/Answers';
import Comments from './Contenu/Comments/Comments';
import Courses from './Contenu/Courses/Courses';
import Lessons from './Contenu/Lessons/Lessons';

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="w-full">
        <div className="bg-gray-50 h-18 py-4 px-5 md:py-2 md:h-16 flex flex-row relative shadow  overflow-x-scroll  md:overflow-hidden">
          <ul
            className="flex list-none pb-4 flex-row space-x-4"
            role="tablist"
          >
            <li className="-mb-px text-center last:mr-0 text-center">
              <a
                className={
                  "block text-xs text-center font-bold uppercase px-5 space-y-1 leading-normal " +
                  (openTab === 1
                    ? "text-gray-400 border-b-2 border-" + color + "-500"
                    : "text-" + color + "-500 -mb-20")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <HiMenu className="block text-center ml-3" style={{fontSize:"2rem"}}/>
                <span className="block">ACTIVITY</span>
              </a>
            </li>
            <li className="-mb-px text-center last:mr-0 text-center">
              <a
                className={
                  "block text-xs text-center font-bold uppercase px-5 leading-normal " +
                  (openTab === 2
                    ? "text-gray-400 border-b-2 border-" + color + "-500"
                    : "text-" + color + "-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <span className="block text-center" style={{fontSize:"1.5rem"}}>0</span>
                <span className="block">CODE BITS</span>
              </a>
            </li>
            <li className="-mb-px text-center last:mr-0 text-center">
              <a
                className={
                  "block text-xs text-center font-bold uppercase px-5 leading-normal " +
                  (openTab === 3
                    ? "text-gray-400 border-b-2 border-" + color + "-500"
                    : "text-" + color + "-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <span className="block text-center" style={{fontSize:"1.5rem"}}>0</span>
                <span className="block">SOLUTIONS</span>
              </a>
            </li>
            <li className="-mb-px text-center last:mr-0 text-center">
              <a
                className={
                  "block text-xs text-center font-bold uppercase px-5 leading-normal " +
                  (openTab === 4
                    ? "text-gray-400 border-b-2 border-" + color + "-500"
                    : "text-" + color + "-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <span className="block text-center" style={{fontSize:"1.5rem"}}>0</span>
                <span className="block">POSTS</span>
              </a>
            </li>
            <li className="-mb-px text-center last:mr-0 text-center">
              <a
                className={
                  "block text-xs text-center font-bold uppercase px-5 leading-normal " +
                  (openTab === 5
                    ? "text-gray-400 border-b-2 border-" + color + "-500"
                    : "text-" + color + "-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                <span className="block text-center" style={{fontSize:"1.5rem"}}>0</span>
                <span className="block">QUESTIONS</span>
              </a>
            </li>
            <li className="-mb-px text-center last:mr-0 text-center">
              <a
                className={
                  "block text-xs text-center font-bold uppercase px-5 leading-normal " +
                  (openTab === 6
                    ? "text-gray-400 border-b-2 border-" + color + "-500"
                    : "text-" + color + "-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                <span className="block text-center" style={{fontSize:"1.5rem"}}>0</span>
                <span className="block">ANSWERS</span>
              </a>
            </li>
            <li className="-mb-px text-center last:mr-0 text-center">
              <a
                className={
                  "block text-xs text-center font-bold uppercase px-5 leading-normal " +
                  (openTab === 7
                    ? "text-gray-400 border-b-2 border-" + color + "-500"
                    : "text-" + color + "-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
                data-toggle="tab"
                href="#link7"
                role="tablist"
              >
                <span className="block text-center" style={{fontSize:"1.5rem"}}>0</span>
                <span className="block">COMMENTS</span>
              </a>
            </li>
            <li className="-mb-px text-center last:mr-0 text-center">
              <a
                className={
                  "block text-xs text-center font-bold uppercase px-5 leading-normal " +
                  (openTab === 8
                    ? "text-gray-400 border-b-2 border-" + color + "-500"
                    : "text-" + color + "-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(8);
                }}
                data-toggle="tab"
                href="#link8"
                role="tablist"
              >
                <span className="block text-center" style={{fontSize:"1.5rem"}}>0</span>
                <span className="block">COURSES</span>
              </a>
            </li>
            <li className="-mb-px text-center last:mr-0 text-center">
              <a
                className={
                  "block text-xs text-center font-bold uppercase px-5 leading-normal " +
                  (openTab === 9
                    ? "text-gray-400 border-b-2 border-" + color + "-500"
                    : "text-" + color + "-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(9);
                }}
                data-toggle="tab"
                href="#link9"
                role="tablist"
              >
                <span className="block text-center" style={{fontSize:"1.5rem"}}>0</span>
                <span className="block">LESSONS</span>
              </a>
            </li>
          </ul>
        </div>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Activity />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Code />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Solutions />
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <Posts />
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <Questions />
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                  <Answers />
                </div>
                <div className={openTab === 7 ? "block" : "hidden"} id="link7">
                  <Comments />
                </div>
                <div className={openTab === 8 ? "block" : "hidden"} id="link8">
                  <Courses />
                </div>
                <div className={openTab === 9 ? "block" : "hidden"} id="link9">
                  <Lessons />
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="gray" />;
    </>
  );
}