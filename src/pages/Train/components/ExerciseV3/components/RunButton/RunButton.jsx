import React from 'react';

export default class Button extends React.Component{
    render(){
        return (
            <button
                className="bg-green-700 w-full px-6 text-white rounded active:bg-indigo-800 text-sm font-bold uppercase py-3 shadow hover:shadow-lg outline-none focus:outline-none"
                type="button"
                style={{ transition: "all .15s ease" }}
                >
                RUN
            </button>
        )
    }
}