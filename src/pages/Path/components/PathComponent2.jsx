import React from 'react';

import { GoRepo, GoTasklist } from 'react-icons/go';
import { RiCodeBoxFill } from 'react-icons/ri';

const PathComponent2 = ({ pathData, stageArray }) => {
  // console.log(pathData);
  return (
    <>
      <div className="flex flex-row p-4">
        <div className="w-1/2 p-4 bg-green-50 rounded-lg">
          <div className="rounded-lg h-1/3 overflow-hidden">
            <img
              className="rounded-lg w-full"
              src="https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyODkucG5n/original/VUZ6SV.png"
              alt="logo"
            />
          </div>
          <p className="text-left text-4xl text-gray-600 font-bold mt-8">
            {pathData.path.title}
          </p>
          <div className="flex flex-row mt-5 text-semibold text-gray-500">
            <span className="grid grid-cols-2 grap-4 mr-5">
              <GoTasklist size="1.5em" className="text-gray-500 inline-block" />
              <span className="inline-block">
                &nbsp; 0/{pathData.path.stages.length}
              </span>
            </span>
            <span className="grid grid-cols-2 grap-4 mr-5">
              <GoRepo size="1.5em" className="text-gray-500 inline-block" />
              <span className="inline-block">0/90</span>
            </span>
            <span className="grid grid-cols-2 grap-4 mr-5">
              <RiCodeBoxFill
                size="1.5em"
                className="text-gray-500 inline-block"
              />
              <span className="inline-block">0/75</span>
            </span>
          </div>
          <p className="text-left font-light p-2 mt-8">
            {pathData.path.description}
          </p>
        </div>
        <div className="overflow-y-auto h-screen w-1/2 pl-4 pb-96">
          {stageArray.sort((a, b) => a.key - b.key)}
        </div>
      </div>
    </>
  );
};

export default PathComponent2;
