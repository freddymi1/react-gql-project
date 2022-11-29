import React from "react";

import { BiEuro } from "react-icons/bi";
import { Link } from "react-router-dom";

const StackCard = (props) => {
  return(
    <Link to={ "/stack/" + props.path.id }>
    <div className="w-96 p-4 bg-green-50 rounded-lg shadow-lg m-4">
      <div className="rounded-lg h-1/3 overflow-hidden">
        <img className="rounded-lg w-full" src="https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyODkucG5n/original/VUZ6SV.png" alt="logo"/>
      </div>
      <p className="text-left text-2xl text-gray-600 font-bold mt-8">
        { props.path.title }
        <span className="relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-5 py-2 bg-purple-600 text-white text-lg">20 &nbsp;<BiEuro className="inline-block mb-1" /></span>
      </p>
      
      <p className="text-left font-light p-2 mt-8">
        { props.path.description } 
      </p>
    </div>
    </Link>
  )
}

export default StackCard;