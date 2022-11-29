import React from 'react';
import { Link } from 'react-router-dom';
import { RiFlagLine, RiQuestionAnswerLine, RiCodeSSlashLine, RiTeamLine, RiDashboard3Line } from "react-icons/ri";

const currentUser = sessionStorage.getItem('currentUser');

export default function NavbarBottom () {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 bg-gray-100 p-5 z-50">
        <ul className="flex flex-row justify-center">
          {
            currentUser ? (
              <>
              <li className="w-1/5 text-center">
                <Link to="/" className="text-gray-400 w-full">
                  <RiDashboard3Line size="1.5em" className="text-gray-400 inline-block" />
                  <span className="text-semibold ml-3 hidden sm:inline-block">Dashboard</span>
                </Link>
              </li>
              </>
            ) : (<></>)
          }
          <li className="w-1/5 text-center">
            <Link to="/catalogue" className="text-gray-400 w-full">
              <RiFlagLine size="1.5em" className="text-gray-400 inline-block" />
              <span className="text-semibold ml-3 hidden sm:inline-block">Catalogue</span>
            </Link>
          </li>
          {
            currentUser ? (
              <>
              <li className="w-1/5 text-center">
                <Link to="/" className="text-gray-400 w-full">
                  <RiTeamLine size="1.5em" className="text-gray-400 inline-block" />
                  <span className="text-semibold ml-3 hidden sm:inline-block">Communautes</span>
                </Link>
              </li>
              
              <li className="w-1/5 text-center">
                <Link to="/code" className="text-gray-400 w-full">
                  <RiCodeSSlashLine size="1.5em" className="text-gray-400 inline-block" />
                  <span className="text-semibold ml-3 hidden sm:inline-block">Code</span>
                </Link>
              </li>
              <li className="w-1/5 text-center">
                <Link to="/discuss" className="text-gray-400 w-full">
                  <RiQuestionAnswerLine size="1.5em" className="text-gray-400 inline-block" />
                  <span className="text-semibold ml-3 hidden sm:inline-block">Discussions</span>
                </Link>
              </li>
              </>
            ) : (<></>)
          }
        </ul>
      </div>
    </>
  )
}