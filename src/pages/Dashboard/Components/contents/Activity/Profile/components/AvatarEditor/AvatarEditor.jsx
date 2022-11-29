import React, { useState, useEffect } from "react";
import { FiCamera } from "react-icons/fi";
import { RiCloseCircleLine } from 'react-icons/ri';
import Modal from 'react-modal';

import "./style/AvatarEditor.css";

import ImageEditor from "./components/ImageEditor/ImageEditor";


const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    margin: '0 40px 40px 40px',
  },
};

Modal.setAppElement('#root');

const currentUser = sessionStorage.getItem("currentUser");

const AvatarEditor = (props) => {
  const user = JSON.parse(currentUser).data.data
  const [ modalIsOpen, setModalIsOpen ] = useState(false)
  const [ initImage, setInitImage ] = useState('http://localhost:3000/images/avatar.png')
  useEffect(() => {
    props.setAvatar(initImage);
    if(user.image !== null && initImage === 'http://localhost:3000/images/avatar.png'){
      setInitImage(user.image)
    }
  })
  return(
    <>
      <div className="flex w-2/4 md:1/4">
        <div className="w-full relative">
          <img 
            className="w-2/3 lg:w-1/4 xl:w-1/6 m-auto rounded-full border-4 border-light-blue-500 border-opacity-25" 
            src={
              initImage
            }
            alt="profil avatar" />
          <button className="text-gray-100 bg-gray-500 rounded-full p-2 avatar-camera" onClick={ e => setModalIsOpen(true) }>
            <FiCamera size="1.25em" />
          </button>
        </div>
      </div>
      <Modal
        isOpen={ modalIsOpen }
        onRequestClose={ () => setModalIsOpen(false) }
        style={customStyles}
        className='modal bg-gray-50'
        overlayClassName='overlay-modal'
      >
        <button
          className='w-auto sticky top-0 float-right'
          type='button'
          style={{ transition: 'all .15s ease' }}
          onClick={ () => setModalIsOpen(false) }
        >
          <RiCloseCircleLine
            className='inline-block float-right text-gray-600 hover:text-green-700'
            size='2em'
          />
        </button>
        <ImageEditor sourceImage={ initImage } updateImage={ setInitImage } />
      </Modal>
    </>
  )
}

export default AvatarEditor;
