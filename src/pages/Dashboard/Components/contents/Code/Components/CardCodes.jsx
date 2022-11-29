import React from 'react';
import { Link } from 'react-router-dom';
import { DiRubyRough, DiHtml5, DiPython  } from "react-icons/di";
export default function CardCode(props){
    const date1 = new Date(props.createdAt);
    const date2 = new Date(Date.now());

    const diffTime = Math.abs(date2 - date1);
    const timePassed = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(props.codeStudent.id)
    if(props.code.languages === '[\"html\",\"css\",\"javascript\"]'){
        return(
            <>
                <div className="w-full space-y-4">
                    <div className="w-full cursor-pointer hover:shadow">
                        <Link to={ props.code.languages === '["html","css","javascript"]' ? "/web_code/" + props.code.id : JSON.parse(props.code.languages)[0] }>
                            <div className="h-24  flex flex-row bg-white rounded-sm">
                                <div className="flex w-24 h-24 items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-16 rounded-sm bg-blue-600 text-red-500">
                                    <label className="text-sm font-bold text-gray-50">
                                        <DiHtml5 size="5em" />
                                    </label>
                                </div>
                                <div className="block w-full bg-gray-50 p-4">
                                    <div className="text-xl font-bold text-gray-500">Web</div>
                                    <div className='w-full mt-4 float-right'>
                                        <p className='font-semibold pt-2 pr-2 text-right text-sm  text-gray-500'>
                                            {timePassed + 'jours'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
    if(props.code.languages === '[\"ruby\"]'){
        return(
            <>
                <div className="w-full space-y-4">
                    <div className="w-full cursor-pointer hover:shadow">
                        <Link to='/new_web_code'>
                            <div className="h-24  flex flex-row bg-white rounded-sm">
                                <div className="flex w-24 h-24 items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-16 rounded-sm bg-blue-600 text-red-500">
                                    <label className="text-sm font-bold text-gray-50">
                                        <DiRubyRough size="5em" />
                                    </label>
                                </div>
                                <div className="block w-full bg-gray-50 p-4">
                                    <div className="text-xl font-bold text-gray-500">Ruby</div>
                                    <div className='w-full mt-4 float-right'>
                                        <p className='font-semibold pt-2 pr-2 text-right text-sm  text-gray-500'>
                                            {timePassed + 'jours'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
    if(props.code.languages === '[\"python\"]'){
        return(
            <>
                <div className="w-full space-y-4">
                    <div className="w-full cursor-pointer hover:shadow">
                        <Link to='/new_web_code'>
                            <div className="h-24  flex flex-row bg-white rounded-sm">
                                <div className="flex w-24 h-24 items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-16 rounded-sm bg-blue-600 text-red-500">
                                    <label className="text-sm font-bold text-gray-50">
                                        <DiPython size="5em" />
                                    </label>
                                </div>
                                <div className="block w-full bg-gray-50 p-4">
                                    <div className="text-xl font-bold text-gray-500">Python</div>
                                    <div className='w-full mt-4 float-right'>
                                        <p className='font-semibold pt-2 pr-2 text-right text-sm  text-gray-500'>
                                            {timePassed + 'jours'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
    
}