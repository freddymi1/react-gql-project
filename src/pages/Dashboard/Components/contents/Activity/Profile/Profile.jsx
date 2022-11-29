import React, { useState } from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';

import AvatarEditor from './components/AvatarEditor/AvatarEditor';
import InfosEditor from './components/InfosEditor/InfosEditor';

import './style/Profile.css';


const Profile = (props) => {
  const [ avatar, setAvatar ] = useState("")
  return (
    <>
      <Accordion atomic={true}>
        <div className="w-full mx-auto shadow-lg">
            <AccordionItem title="PROFILE BASIC" className="profil-content mb-4 font-semibold uppercase text-gray-500 dark:text-gray-300">

              <div className="flex flex-row mb-8">
                <AvatarEditor setAvatar={ setAvatar } />
                <InfosEditor avatar={ avatar } />
              </div>

            </AccordionItem>


        </div>
      </Accordion>
    </>
  )
}

export default Profile