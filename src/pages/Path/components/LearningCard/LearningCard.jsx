import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Modal from 'react-modal';
import { useQuery } from '@apollo/client';

// import BuyLearning from './components/BuyLearning/BuyLearning';
import {
  COUNT_COURSES,
  COUNT_IS_ACHIEVED_COURSES,
} from '../../../../services/queries/LearningXCourseQueries';

const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
const currentPath = JSON.parse(sessionStorage.getItem('currentPath'));

const LearningCard = currentUser
  ? (props) => {
      const [showBuyModal, setShowBuyModal] = useState(false);

      const {
        loading: countCoursesLoading,
        error: countCoursesError,
        data: countCoursesData,
      } = useQuery(COUNT_COURSES(props.learning.id));

      // console.log('learning_id: ' + props.learning.id);

      
      const {
        loading: countIACLoading,
        error: countIACError,
        data: countIACData,
      } = useQuery(
        COUNT_IS_ACHIEVED_COURSES(
          props.learning.id,
          currentUser.data.data.id,
          true
        )
      );

      let res;
      if (countCoursesData && countIACData) {
        res =
          (countIACData.countIsAchievedCourses /
            countCoursesData.countCourses) *
          100;
      } else {
        res = 0;
      }

      // console.log(countIACData);
      // console.log(countCoursesData);
      // console.log('resultat:' + res);

      const styles = { width: `${res >= 0 ? res : 0}%` };

      const handleOpenModal = () => setShowBuyModal(true);

      const handleCloseModal = () => setShowBuyModal(false);

      return (
        <>
          {props.isActive ? (
            <>
              <Link to={'/learning/' + props.learning.id} className="flex-auto">
                <div className="shadow-md bg-green-600 rounded-lg m-2">
                  <div className="pl-5 pt-5 pr-5">
                    <img
                      className='block mx-auto h-7 rounded-full sm:mx-0 sm:flex-shrink-0'
                      src='images/html.png'
                      alt='logo'
                    />
                    <div className="mt-3 block text-center space-y-20 sm:text-left">
                      <div className="space-y-0.5">
                        <p className="text-lg text-white font-base">
                          {props.learning.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-100 rounded-b-xl mt-24">
                    {/* progress bar */}
                    <div
                      className="rounded-b-xl h-2 bg-yellow-300"
                      style={styles}
                    ></div>
                  </div>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link
                to={'/stack-payment/' + currentPath.id}
                className="flex-auto"
              >
                <div className="shadow-md bg-gray-300 rounded-lg m-2">
                  <div className="pl-5 pt-5 pr-5">
                    <img
                      className='block mx-auto h-7 rounded-full sm:mx-0 sm:flex-shrink-0'
                      src='images/html.png'
                      alt='logo'
                    />
                    <div className="mt-3 block text-center space-y-20 sm:text-left">
                      <div className="space-y-0.5">
                        <p className="text-lg text-gray-500 font-light">
                          {props.learning.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-100 rounded-b-xl mt-24">
                    <div className="rounded-b-xl h-2 w-0 bg-yellow-300"></div>
                  </div>
                </div>
              </Link>
            </>
          )}
        </>
      );
    }
  : (props) => {
      const [showBuyModal, setShowBuyModal] = useState(false);
      const handleOpenModal = () => setShowBuyModal(true);
      const handleCloseModal = () => setShowBuyModal(false);
      return (
        <>
          <Link to={'/stack-payment/' + currentPath.id} className="flex-auto">
            <div className="shadow-md bg-gray-300 rounded-lg m-2">
              <div className="pl-5 pt-5 pr-5">
                <img
                  className='block mx-auto h-7 rounded-full sm:mx-0 sm:flex-shrink-0'
                  src='images/html.png'
                  alt='logo'
                />
                <div className="mt-3 block text-center space-y-20 sm:text-left">
                  <div className="space-y-0.5">
                    <p className="text-lg text-gray-500 font-light">
                      {props.learning.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-100 rounded-b-xl mt-24">
                <div className="rounded-b-xl h-2 w-0 bg-yellow-300"></div>
              </div>
            </div>
          </Link>
        </>
      );
    };

export default LearningCard;
