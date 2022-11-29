import React, { useState } from 'react';
import { BiMessageRoundedDetail } from "react-icons/bi";

import Comment from '../Comment/Comment';

let Title = (props) => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ countComment, setCountComment ] = useState(0)

    let closeModal = () => {
        setIsOpen(false)
    }

    console.log("JJJJJJJJJJJJJJ", props.exercise.id)

    return(
        <>
            <div className="container w-full">
                <div className="w- flex flex-row items-center justify-between">
                    <h1 className="text-gray-500 uppercase font-black text-3xl">{ props.course.title }</h1>
                    <button className="text-gray-400" onClick={ e => setIsOpen(!isOpen) }>
                        <BiMessageRoundedDetail  className="inline" size="2em" />
                        <span className="inline pl-3">{ countComment } commentaires</span>
                    </button>
                </div>
            </div>
            <Comment isOpen={ isOpen } countComment={ setCountComment } closeModal={ closeModal } exerciseId={ props.exercise.id } />
        </>
    )
}

export default Title;