import React from 'react';
import ContaintCourse from './ContaintCourse';
//import Sidebar from './Sidebar';
export default class CourseContent extends React.Component{
    render(){
        return(
            <>
                <div className="flex w-full">
                    {/* <div className="w-1/12">
                        <Sidebar/>
                    </div> */}
                    <div className="w-full">
                        <ContaintCourse/>
                    </div>
                </div>
            </>
        )
    }
}