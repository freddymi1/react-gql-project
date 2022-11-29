import React from 'react';
import { BiMessageRoundedDetail } from "react-icons/bi";

export default class Title extends React.Component{
    render(){
        return (
            <>
                <div className="container w-full">
                    <div className="w- flex flex-row items-center justify-between">
                        <h1 className="text-gray-500 uppercase font-black text-3xl">RUBY</h1>
                        <p className="text-gray-400">
                            <BiMessageRoundedDetail  className="inline" size="2em" />
                            <span className="inline pl-3">10 commentaires</span>
                        </p>
                    </div>
                </div>
            </>
        )
    }
}