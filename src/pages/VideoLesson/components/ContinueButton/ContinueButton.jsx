import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom'

const ContinueButton = (props) => {
    let [ isRedirect, setIsRedirect ] = useState(false)

    if(isRedirect){
        return <Redirect to={ "/course/" + props.courseId + "/lesson/" + props.lessonId } />
    }
    return (
        <>
            <button
                className="bg-green-700 w-full px-6 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-3 shadow hover:shadow-lg outline-none focus:outline-none"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={
                    e => {
                        setIsRedirect(true)
                    }
                }
                >
                Continuer
            </button>
        </>
    )
}

export default ContinueButton;