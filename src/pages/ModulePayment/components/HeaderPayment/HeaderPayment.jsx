import React from "react";

import { BsPuzzle } from "react-icons/bs";
import { BiEuro } from "react-icons/bi";

const HeaderPayment = (props) => {
  return(
    <div className="w-full flex flex-row p-4 bg-gray-200">
      <div className="w-1/3 text-center">
        <BsPuzzle className="inline text-gray-500" size="5em" />
      </div>
      <div className="w-2/3 flex flex-col px-4 text-gray-700">
        <h2>{ props.learning.title }</h2>
        <p>{ props.learning.description }</p>
        <div className="relative">
          <span className="text-center w-32 py-2 rounded-md font-semibold text-white bg-indigo-500 ring-4 ring-indigo-300 float-right">{ props.learning.price ? props.learning.price : "0" }&nbsp;<BiEuro className="inline-block mb-1" /></span>
        </div>
      </div>
    </div>
  )
}

export default HeaderPayment;