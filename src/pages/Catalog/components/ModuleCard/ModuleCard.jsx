import React from "react";

import { BiEuro } from "react-icons/bi";
import { Link } from "react-router-dom";

const ModuleCard = (props) => {
  return(
    <Link to={ "/module-payment/" + props.learning.id }>
    <div className="px-4 py-6 bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-12 w-12" src="https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyODkucG5n/original/VUZ6SV.png" alt="ChitChat Logo" />
      </div>
      <div className="w-full">
        <div className="text-xl font-medium text-gray-800">
          <span title={ props.learning.title }>
            { props.learning.title.split('').length <= 11 ? props.learning.title : (props.learning.title.slice(0, 11) + ' ...') }
          </span>
          {
            props.learning.price !== null && props.learning.price !== 0 ? (
              <span className="relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-3 py-1 bg-purple-600 text-white text-xs">
                20 &nbsp;<BiEuro className="inline-block mb-1" />
              </span>
            ) : (
              <span className="relative bottom-1 left-4 shadow rounded-l-lg float-right inline-block text-center px-3 py-1 bg-green-600 text-white text-xs">
                Gratuit
              </span>
            )
          }
        </div>
        <p className="text-gray-500">
          { props.learning.description.split('').length <= 10 ? props.learning.description : (props.learning.description.slice(0, 10) + ' ...') }
        </p>
      </div>
    </div>
    </Link>
  )
}

export default ModuleCard;