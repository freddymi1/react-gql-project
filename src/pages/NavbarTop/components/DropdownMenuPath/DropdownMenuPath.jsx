import React from "react";

import { useQuery } from '@apollo/client';

import { PAGINATE_PATHS } from '../../../../services/queries/PathsQueries';

import "../../styles/dropdownMenu.css";
import CardPath from "./CardPath/CardPath";
import Navsticky from "./Sticky/Navsticky";

function DropdownMenuPath(props) {
  const { loading, error, data } = useQuery(PAGINATE_PATHS (1, 10));
    

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <div className="z-40 absolute w-full bg-white border-r border-b border-green-100 p-5 overflow-x-scroll shadow">
        
        <div className="content-path flex flex-row">

        {
          data.paths.map(path => (
            <CardPath key={ path.id } title={ path.title } description={ path.description } id={ path.id } handleSetPathTitle={ props.handleSetPathTitle } closeDropdownMenu={ props.closeDropdownMenu } />
          ))
        }

        </div>
        
        

      </div>
      {/* Sticky navmenu */}
      {/* <div className="z-50 w-72 h-auto float-right text-center sticky bg-gray-50 transform translate-y-7 right-8 py-6 shadow-md">
        <Navsticky paths={ data.paths }  closeDropdownMenu={ props.closeDropdownMenu } />
      </div> */}
      {/* Fin sticky navmenu */}
    </>
  )
}

export default DropdownMenuPath;