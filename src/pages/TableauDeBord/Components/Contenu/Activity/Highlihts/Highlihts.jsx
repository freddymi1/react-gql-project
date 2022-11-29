import React from 'react';
import { IoMdStar, IoIosRibbon,IoMdTrophy } from "react-icons/io";
import { FiMoreHorizontal } from 'react-icons/fi';
import { BsCheck } from 'react-icons/bs';
export default class Highliht extends React.Component{
    render(){
        return(
            <>
              <div className="w-full mt-8 mx-auto border-gray-500 shadow-lg">
                <div className="container w-full pt-3 px-2 md:px-6 mx-auto">
                    <div className="bg-white block border-b-2 py-2 border-gray-400">
                        <div className="bg-white block text-center md:text-left">
                            <label className=" mb-4 font-semibold uppercase text-gray-500 dark:text-gray-300">
                                HIGHLITHS
                            
                            </label>
                            
                        </div>
                        <div className="space-y-2 mt-4">
                            <p className="text-gray-500 space-x-4">
                                <IoMdStar className="inline" size="1.5em" />
                                <span>30 XP . Level 1</span>
                            </p>
                            <p className="text-gray-500 space-x-4">
                                <IoMdTrophy className="inline" size="1.5em" />
                                <span>Top 25.84% this week</span>
                            </p>
                        </div>
                    </div>
                    <div className="py-4 space-y-3 border-b-2 border-gray-400">
                        <div>
                        <label className="text-gray-500 text-lg">Badges</label>
                        </div>
                        <ul className="space-x-2 md:space-x-4 inline-block">
                            <li className="w-16 h-16 inline-block rounded-full bg-green-700 text-white text-center" style={{lineHeight:"4rem"}}>
                                <BsCheck className="inline" size="1.5em"/>
                            </li>
                            <li className="w-16 h-16 inline-block rounded-full bg-gray-400 text-white text-center" style={{lineHeight:"4rem"}}>
                                <IoMdStar className="inline" size="1.5em"/>
                            </li>
                            <li className="w-16 h-16 inline-block rounded-full bg-gray-400 text-white text-center" style={{lineHeight:"4rem"}}>
                                <IoMdStar className="inline" size="1.5em"/>
                            </li>
                            <li className="w-16 h-16 inline-block rounded-full bg-gray-400 text-white text-center" style={{lineHeight:"4rem"}}>
                                <IoIosRibbon className="inline" size="1.5em"/>
                            </li>
                            <li className="w-16 h-16 inline-block rounded-full bg-gray-400 text-white text-center" style={{lineHeight:"4rem"}}>
                                <IoMdStar className="inline" size="1.5em"/>
                            </li> 
                            <li className="w-16 h-16 inline-block rounded-full bg-gray-300 text-white text-center" style={{lineHeight:"4rem"}}>
                                <FiMoreHorizontal className="inline" size="1.5em"/>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="w-full md:w-1/4 mx-auto py-4">
                        <button
                            className="bg-gray-50 w-full px-6 text-gray-500 active:bg-indigo-800 text-sm font-bold uppercase py-3 shadow hover:shadow-lg outline-none focus:outline-none"
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            >
                            SHOW MORE
                        </button>
                    </div>
                </div>
                
              </div>
            </>
        )
    }
}