import React from 'react';

export default class Radiobtn extends React.Component{
    render(){
        return (
            <>
                <div className="flex flex-col">
                    <div className="flex flex-col">
                        <label className="inline-flex items-center mt-3">
                            <input type="radio" name="quizz" className="form-radio h-5 w-5 text-indigo-600"/><span className="ml-2 text-gray-700">Quizz 1</span>
                        </label>

                        <label className="inline-flex items-center mt-3">
                            <input type="radio" name="quizz" className="form-radio h-5 w-5 text-purple-600"/><span className="ml-2 text-gray-700">Quizz 2</span>
                        </label>

                        <label className="inline-flex items-center mt-3">
                            <input type="radio" name="quizz" className="form-radio h-5 w-5 text-pink-600"/><span className="ml-2 text-gray-700">Quizz 3</span>
                        </label>
                    </div>
                </div>
            </>
        )
    }
}