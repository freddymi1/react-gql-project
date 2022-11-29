import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
// import 'react-light-accordion/demo/css/index.css';
import './style/Profile.css';
import { HiPlus, HiChevronDown } from "react-icons/hi";
export default class Profile extends React.Component{
    render(){
      
        return(
            <>
            <Accordion atomic={true}>
              <div className="w-full mx-auto shadow-lg">
                <div className="container mx-auto">
                <AccordionItem title="PROFILE STRENGTH: Basic" className="profil-content mb-4 font-semibold uppercase text-gray-500 dark:text-gray-300">
                  
                  <div className="profile-content p-4 space-y-3">
                    <div className="space-x-4 mt-4">
                      <span className="text-gray-500">
                        <HiPlus className="inline" size="1.5em" />
                      </span>
                      <span className="text-gray-500 text-lg">
                        Summary
                      </span>
                    </div>
                    <div className="space-x-4">
                      <span className="text-gray-500">
                        <HiPlus className="inline" size="1.5em" />
                      </span>
                      <span className="text-gray-500 text-lg">
                        Projects
                      </span>
                    </div>
                    <div className="space-x-4">
                      <span className="text-gray-500">
                        <HiPlus className="inline" size="1.5em" />
                      </span>
                      <span className="text-gray-500 text-lg">
                        Experience
                      </span>
                    </div>
                    <div className="space-x-4">
                      <span className="text-gray-500">
                        <HiPlus className="inline" size="1.5em" />
                      </span>
                      <span className="text-gray-500 text-lg">
                        Skills
                      </span>
                    </div>
                  </div>
                </AccordionItem>
                
                
              </div>
            </div>
          </Accordion>
        </>
      )
    }
}