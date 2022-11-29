import { useMutation, useQuery } from '@apollo/client';
import React, {useState, useRef} from 'react';
// import { CREATE_pathS } from '../../services/mutations/Mutationspaths'
import { ALL_PATHS } from '../../services/queries/PathsQueries'

export default function TestQM(){
    
    const { data, error, loading} = useQuery(ALL_PATHS)

    if(loading) return <p>Loading path...</p>
    if(error) return <p>Error path ()</p>
    

    return(
        <>
            <div className="px-4 pb-32 pt-4 w-full overflow-y-auto">
                <h1>TEST Query et Mutation</h1>
                {/* <h2>Total students: {countStudentData.countStudents}</h2> */}
                <hr />
                <div className="w-full">
                    
                    <h2>List tout path</h2>
                    <table className="w-full m-auto">
                        <thead>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Picture</th>
                            <th>Description</th>
                        </thead>
                        <tbody>
                        {
                            data.allPaths.map(path => (
                                <tr>
                                    <td key={path.id}>{path.id}</td>
                                    <td key={path.title}>{path.title}</td>
                                    <td key={path.pic}>{path.pic}</td>
                                    <td key={path.description}>{path.description}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                
                
                
            </div>
        </>
    )
}