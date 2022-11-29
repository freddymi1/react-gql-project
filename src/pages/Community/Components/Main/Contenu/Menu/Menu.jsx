import React from "react";
import Course from "./Pages/Course/Course";
import Exercice from './Pages/Exercice/Exercice';
import Answers from './Pages/Answers/Answers';
import Questions from './Pages/Questions/Questions';

const Tabs = ({ bgcolor, textColor }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="w-full">
        <div className="bg-gray-200 h-12 flex flex-row overflow-x-scroll overflow-y-hidden  md:overflow-hidden">
          <ul
            className="main-menu flex list-none pb-4 flex-row"
            role="tablist"
          style={{width:"1000%"}}>
            <li className="-mb-px text-center last:mr-0 text-center">
              <a
                className={
                  "block text-xs text-center font-bold py-5 md:py-4 px-8 leading-normal " +
                  (openTab === 1
                    ? "text-gray-400 bg-" + bgcolor + "-50"
                    : "text-" + textColor + "-500 -mb-20")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <span className="block">Exercice</span>
              </a>
            </li>
            <li className="-mb-px text-center last:mr-0 text-center">
              <a
                className={
                  "block text-xs text-center font-bold py-5 md:py-4 px-6 leading-normal " +
                  (openTab === 2
                    ? "text-gray-400 bg-" + bgcolor + "-50"
                    : "text-" + textColor + "-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <span className="block">Cours</span>
              </a>
            </li>
            
            <li className="-mb-px text-center last:mr-0 text-center">
              <a
                className={
                  "block text-xs text-center font-bold py-5 md:py-4 px-6 leading-normal " +
                  (openTab === 3
                    ? "text-gray-400 bg-" + bgcolor + "-50"
                    : "text-" + textColor + "-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <span className="block">Nouveau course</span>
              </a>
            </li>
            <li className="-mb-px text-center last:mr-0 text-center">
              <a
                className={
                  "block text-xs text-center font-bold py-5 md:py-4 px-6 leading-normal " +
                  (openTab === 4
                    ? "text-gray-400 bg-" + bgcolor + "-50"
                    : "text-" + textColor + "-500")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                <span className="block">Nouveau exercice</span>
              </a>
            </li>
            
          </ul>
        </div>
          <div className="relative border-t-2 border-gray-200 flex flex-col min-w-0 break-words w-full mb-6">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Exercice />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Course />
                </div>
                
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Questions />
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <Answers />
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
      <Tabs bgcolor="gray"  textColor="gray"/>
    </>
  );
}