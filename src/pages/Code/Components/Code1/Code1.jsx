import React from 'react';
import { Link } from "react-router-dom";
import { MdComment } from 'react-icons/md';
import { AiFillLike } from 'react-icons/ai'
import { RiRadioButtonLine } from 'react-icons/ri'


export default function Code1( props ) {

  return (
    <>

        <Link to={ props.codeData.languages === '["html","css","javascript"]' ? "/web_code/" + props.codeData.id : "/code/" + JSON.parse(props.codeData.languages)[0] + "/" + props.codeData.id }>

        <div className="items-center text-gray-800">
          <div className="py-4 w-full">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 cursor-pointer py-4 border-b-2 border-gray-400">
                <div className="h-24 flex flex-row">
                  <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 rounded-sm text-red-500">
                    <img className="w-16 h-16" src={ props.codeData.student.image ? props.codeData.student.image : "images/avatar.png"} />
                    <label className="">
                      <RiRadioButtonLine className="block -ml-6 mt-12 text-yellow-400" size="1.2em" />
                    </label>
                  </div>

                  <div className="block p-4">
                    <div className="text-md font-bold text-gray-500">Animated Youtube Logo</div>
                    <div className="font-bold text-sm text-gray-400">Mode Tech</div>
                    <div className="mt-2 space-x-4 flex">
                      <label className="px-2 bg-gray-300 cursor-pointer">
                        <span className="text-gray-500 pt-6"
                          style={{ fontSize: "12px" }}
                        >{ props.codeData.languages === '["html","css","javascript"]' ? "web" : JSON.parse(props.codeData.languages)[0] }</span>
                      </label>
                      <label className="space-x-1 cursor-pointer">
                        <AiFillLike className="inline text-gray-400" size="1.2em" />
                        <span className="text-gray-500 pt-6"
                          style={{ fontSize: "12px" }}
                        >+114</span>
                      </label>
                      <label className="space-x-1 cursor-pointer">
                        <MdComment className="inline text-gray-500" size="1.2em" />
                        <span className="text-gray-500 pt-6"
                          style={{ fontSize: "12px" }}
                        >309</span>
                      </label>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        
        </div>

        </Link>

    </>
  )
}