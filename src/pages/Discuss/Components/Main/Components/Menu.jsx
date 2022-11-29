import React from "react";
import MostRecent from "./Pages/MostRecent/MostRecent";
import Trending from './Pages/Trending/Trending';
import Unanswered from './Pages/Unanswered/Unanswered';
import Answers from './Pages/Answers/Answers';
import Questions from './Pages/Questions/Questions';

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="w-full flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-4 block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-700"
                    : "text-" + color + "-500 bg-gray-100")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Les plus de votes
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-4 block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-700"
                    : "text-" + color + "-500 bg-gray-100")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Les plus recents
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-4 block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-700"
                    : "text-" + color + "-500 bg-gray-100")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Pas de réponse
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-4 block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-" + color + "-700"
                    : "text-" + color + "-500 bg-gray-100")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                 Mes question
              </a>
            </li>
            <li className="-mb-px last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-4 block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-" + color + "-700"
                    : "text-" + color + "-500 bg-gray-100")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                 Mes reponses
              </a>
            </li>
          </ul>
          <div className="relative  h-screen pb-64 flex flex-col min-w-0 break-words bg-white w-full mb-6">
            <div className="py-5 flex-auto ">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Trending />
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <MostRecent />
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Unanswered />
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <Questions />
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <Answers />
                </div>
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
      <Tabs color="green" />
    </>
  );
}