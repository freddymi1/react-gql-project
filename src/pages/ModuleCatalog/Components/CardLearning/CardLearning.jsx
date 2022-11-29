import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import BuyLearning from './BuyLearning/BuyLearning';
import {
  COUNT_COURSES,
  COUNT_IS_ACHIEVED_COURSES,
} from '../../../../services/queries/LearningXCourseQueries';

const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

const CardLearning = currentUser
  ? (props) => {
      const [showBuyModal, setShowBuyModal] = useState(false);
      const { data: countCoursesData } = useQuery(
        COUNT_COURSES(props.learning.id)
      );
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

      const styles = { width: `${res >= 0 ? res : 0}%` };

      const handleOpenModal = () => setShowBuyModal(true);

      const handleCloseModal = () => setShowBuyModal(false);

      let str = props.learning.description;
      return (
        <>
          {props.isActive ? (
            <>
              <Link to={'/learning/' + props.learning.id} className="flex-auto">
                <div className="h-32 flex flex-row  bg-green-600 shadow-md rounded-md">
                  <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 text-red-500">
                    <img
                      className="w-16 h-16"
                      src={'http://82.165.206.170' + props.learning.pic}
                    />
                  </div>
                  <div className="flex flex-col border-l-2 border-gray-50 flex-grow p-2">
                    <div className="font-bold uppercase text-md text-gray-50">
                      {props.learning.title}
                    </div>
                    <div className="font-semibold pt-2 text-sm text-left text-white">
                      {str.split('') <= 80 ? str : str.slice(0, 100) + ' ...'}
                    </div>
                  </div>
                  <div className="w-100 rounded-b-xl mt-24">
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
              <div
                className="h-32 flex flex-row bg-white shadow-md bg-gray-500 rounded-md"
                onClick={handleOpenModal}
              >
                <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 text-red-500">
                  <img
                    className="w-16 h-16"
                    src={'http://82.165.206.170' + props.learning.pic}
                  />
                </div>
                <div className="flex flex-col border-l-2 border-gray-50 flex-grow p-2">
                  <div className="font-bold uppercase text-md text-gray-50">
                    {props.learning.title}
                  </div>
                  <div className="font-semibold pt-2 text-sm text-left text-white">
                    {str.slice <= 80 ? str : str.slice(0, 100) + ' ...'}
                  </div>
                </div>
                <div className="w-100 rounded-b-xl mt-24">
                  <div className="rounded-b-xl h-2 w-0 bg-yellow-300"></div>
                </div>
              </div>
              <BuyLearning
                modalIsOpen={showBuyModal}
                closeModal={handleCloseModal}
                learning={props.learning}
              />
            </>
          )}
        </>
      );
    }
  : (props) => {
      const [showBuyModal, setShowBuyModal] = useState(false);
      const handleOpenModal = () => setShowBuyModal(true);
      const handleCloseModal = () => setShowBuyModal(false);
      let str = props.learning.description;
      return (
        <>
          <div
            className="h-32 flex flex-row bg-white shadow-md bg-gray-500 rounded-md"
            onClick={handleOpenModal}
          >
            <div className="flex items-center justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 bg-red-500 text-red-500">
              <img
                className="w-16 h-16"
                src={'http://82.165.206.170' + props.learning.pic}
              />
            </div>
            <div className="flex flex-col border-l-2 border-gray-50 flex-grow p-2">
              <div className="font-bold uppercase text-md text-gray-50">
                {props.learning.title}
              </div>
              <div className="font-semibold pt-2 text-sm text-left text-white">
                {str.slice <= 80 ? str : str.slice(0, 100) + ' ...'}
              </div>
            </div>
            <div className="w-100 rounded-b-xl mt-24">
              <div className="rounded-b-xl h-2 w-0 bg-yellow-300"></div>
            </div>
          </div>
          <BuyLearning
            modalIsOpen={showBuyModal}
            closeModal={handleCloseModal}
            learning={props.learning}
          />
        </>
      );
    };

export default CardLearning;
