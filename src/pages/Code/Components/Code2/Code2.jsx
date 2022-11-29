import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { BiComment, BiLike } from 'react-icons/bi';


export default function Code2(){
    return(
        <>
        <div className="container pt-3 py-6 px-6 mx-auto">
            <div className="w-full">
                <label className="mb-4 font-semibold text-gray-500 dark:text-gray-300">
                    <img src="./images/html.png" alt="Logo html 5" className="w-7 inline mr-2"/>
                    HTML Basics
                    
                </label>
            </div>
            <div className="flex items-center text-gray-800">
                <div className="py-4 w-full">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="h-24 flex flex-row bg-white shadow-sm rounded-sm">
                                <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 rounded-sm text-red-500">
                                    <img className="w-16 h-16" src="images/avatar.png"/>
                                </div>
                                <div className="block bg-white p-4">
                                    <div className="text-md font-bold text-gray-500">Your Name</div>
                                    <div className="font-bold text-sm text-gray-400">Furniture Store title</div>
                                    <div className="mt-2">
                                        <label className="float-left space-x-1 cursor-pointer">
                                            <BiComment className="inline text-green-500" size="1.2em" />
                                            <span className="text-gray-500 pt-6"
                                            style={{fontSize:"12px"}}
                                            >309</span>
                                        </label>
                                        <label className="float-right space-x-1 cursor-pointer">
                                            <BiLike className="inline text-green-500" size="1.2em" />
                                            <span className="text-gray-500 pt-6"
                                            style={{fontSize:"12px"}}
                                            >20444</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="h-24 flex flex-row bg-white shadow-sm rounded-sm">
                                <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 rounded-sm text-red-500">
                                    <img className="w-16 h-16" src="images/avatar.png"/>
                                </div>
                                <div className="block bg-white p-4">
                                    <div className="text-md font-bold text-gray-500">Your Name</div>
                                    <div className="font-bold text-sm text-gray-400">Furniture Store title</div>
                                    <div className="mt-2">
                                        <label className="float-left space-x-1 cursor-pointer">
                                            <BiComment className="inline text-green-500" size="1.2em" />
                                            <span className="text-gray-500 pt-6"
                                            style={{fontSize:"12px"}}
                                            >309</span>
                                        </label>
                                        <label className="float-right space-x-1 cursor-pointer">
                                            <BiLike className="inline text-green-500" size="1.2em" />
                                            <span className="text-gray-500 pt-6"
                                            style={{fontSize:"12px"}}
                                            >20444</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="h-24 flex flex-row bg-white shadow-sm rounded-sm">
                                <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 rounded-sm text-red-500">
                                    <img className="w-16 h-16" src="images/avatar.png"/>
                                </div>
                                <div className="block bg-white p-4">
                                    <div className="text-md font-bold text-gray-500">Your Name</div>
                                    <div className="font-bold text-sm text-gray-400">Furniture Store title</div>
                                    <div className="mt-2">
                                        <label className="float-left space-x-1 cursor-pointer">
                                            <BiComment className="inline text-green-500" size="1.2em" />
                                            <span className="text-gray-500 pt-6"
                                            style={{fontSize:"12px"}}
                                            >309</span>
                                        </label>
                                        <label className="float-right space-x-1 cursor-pointer">
                                            <BiLike className="inline text-green-500" size="1.2em" />
                                            <span className="text-gray-500 pt-6"
                                            style={{fontSize:"12px"}}
                                            >20444</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 md:col-span-3">
                            <div className="h-24 flex flex-row bg-white shadow-sm rounded-sm">
                                <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 rounded-sm text-red-500">
                                    <img className="w-16 h-16" src="images/avatar.png"/>
                                </div>
                                <div className="block bg-white p-4">
                                    <div className="text-md font-bold text-gray-500">Your Name</div>
                                    <div className="font-bold text-sm text-gray-400">Furniture Store title</div>
                                    <div className="mt-2">
                                        <label className="float-left space-x-1 cursor-pointer">
                                            <BiComment className="inline text-green-500" size="1.2em" />
                                            <span className="text-gray-500 pt-6"
                                            style={{fontSize:"12px"}}
                                            >309</span>
                                        </label>
                                        <label className="float-right space-x-1 cursor-pointer">
                                            <BiLike className="inline text-green-500" size="1.2em" />
                                            <span className="text-gray-500 pt-6"
                                            style={{fontSize:"12px"}}
                                            >20444</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <label className="text-gray-400 text-sm">0/8 unlocked</label>
            </div>
        </div>
            
        </>
    )
}