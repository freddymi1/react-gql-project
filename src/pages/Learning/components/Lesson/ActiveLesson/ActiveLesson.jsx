import React, { useState } from 'react'
import Modal from 'react-modal';
import { Redirect } from 'react-router-dom';
import { RiCloseCircleLine } from 'react-icons/ri';
import { useQuery, useMutation } from '@apollo/client';

// import { INIT_STUDENT_X_LEARNING } from "../../../../../services/mutations/StudentXLearningMutations";
// import { STUDENT_X_LEARNING_BY_ID_AND_STUDENT_ID } from "../../../../../services/queries/StudentXLearningQueries";

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
    top: '7%',
    left: '10%',
    right: '10%',
    bottom: '10%',
    border: '1px solid #ccc',
    overflow: 'hidden',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    margin: '0 40px 40px 40px',
  },
};


const currentUser = sessionStorage.getItem("currentUser")


let ActiveLesson = (props) => {
  const [activeLesson, setActiveLesson] = useState(false)
//   const [initStudentXLearning, { loading: mutationLoading, error: mutationError, data: mutationData }] = useMutation(INIT_STUDENT_X_LEARNING, { onCompleted: () => { window.location.reload(false); } });
//   const { loading: learningLoading, error: learningError, data: learningData } = useQuery(STUDENT_X_LEARNING_BY_ID_AND_STUDENT_ID (props.learning.id, JSON.parse(currentUser).data.data.id));

//   const buyTheLearning = () => {
//     if(currentUser){
//       console.log(props.learning.id, JSON.parse(currentUser))
//       initStudentXLearning({ 
//         variables: {
//           isAchieved: false, 
//           studentId: parseInt(JSON.parse(currentUser).data.data.id), 
//           learningId: parseInt(props.learning.id) 
//         }
//       })
//       props.closeModal()
//     } else {
//       return <Redirect to="/login" />
//     }
//   }

  return(
    <>
      <Modal
        isOpen={ props.modalIsOpen }
        contentLabel="Example Modal"
        style={customStyles}
      >
        <button
          className='w-auto sticky top-0 float-right'
          type='button'
          style={{ transition: 'all .15s ease' }}
          onClick={() => props.closeModal() }
        >
          <RiCloseCircleLine
            className='inline-block float-right text-gray-600 hover:text-green-700'
            size='2em'
          />
        </button>
        <h2>{ props.lesson.title }</h2>
        <button 
            //   onClick={ e => buyTheLearning() }
              className="block py-2 px-4 mt-20 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
              Activer
        </button>
      </Modal>
    </>
  )
}


ActiveLesson = currentUser ? ActiveLesson : (
  (props) => {
    const buyTheLearning = () => {
      window.location.href = "/login"
    }
    return(
      <>
        <Modal
          isOpen={ props.modalIsOpen }
          contentLabel="Example Modal"
          style={customStyles}
        >
          <button
            className='w-auto sticky top-0 float-right'
            type='button'
            style={{ transition: 'all .15s ease' }}
            onClick={() => props.closeModal() }
          >
            <RiCloseCircleLine
              className='inline-block float-right text-gray-600 hover:text-green-700'
              size='2em'
            />
          </button>
          <h2>{ props.lesson.title }</h2>
          {/* <div>{ props.learning.description }</div> */}
          <button 
            onClick={ e => buyTheLearning() }
            className="block py-2 px-4 mt-20 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
            Acheter
          </button>
        </Modal>
      </>
    )
  }
)

export default ActiveLesson;

