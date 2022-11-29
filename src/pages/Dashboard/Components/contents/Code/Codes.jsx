import React from 'react';
import {useQuery} from '@apollo/client';
import CardCode from './Components/CardCodes';

import {STUDENT_X_CODE_BY_STUDENT_ID} from '../../../../../services/queries/StudentXCodeQueries';
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
export default function Codes(){
    const {loading, error, data } = useQuery(STUDENT_X_CODE_BY_STUDENT_ID(currentUser.data.data.id))
    if (loading) {
		return (
			<>
				<div className="w-full py-4 mt-64 mx-auto border-gray-500">
					<div className="container pt-3 px-6 mx-auto">
						<div className="bg-white text-center block">
							<h2 className="mb-4 font-semibold uppercase text-green-500 dark:text-gray-300">
								LOADING...
							</h2>
						</div>
					</div>
				</div>
			</>
		)
	}
    if(error) return <p>Error</p>
	const listSXCode = []
    if(data){
        data.studentXCodesByStudentId.map((sxC) => {
			listSXCode.push(<CardCode key={sxC.id} code={sxC.code} codeStudent={sxC.student} createdAt={sxC.createdAt} updatedAt={sxC.updatedAt}/>)
		})
    }

    return (
        <>
            <div className="mt-4 p-6 w-full justify-items-auto">
				{
					listSXCode.length !== 0 ? (
						<div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {listSXCode}
                        </div>
					):(
						<div className="w-full text-center block   pt-8">
                            <h1 className="mb-4 font-semibold text-center text-gray-500 dark:text-gray-300">
                                Hi &nbsp;
                                <span className="text-red-400">{currentUser.data.data.name}</span>
                                , vous n'avez pas encore de creer de code!
                            </h1>
                        </div>
					)
				}
			</div>
        </>
    )
}