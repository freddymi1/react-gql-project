import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { STUDENT_X_PATHS_BY_STUDENT_ID } from '../../../../../services/queries/StudentXPathQueries';

const currentUser = sessionStorage.getItem('currentUser');

const Parkour = (props) => {
  const { loading, error, data } = useQuery(
    STUDENT_X_PATHS_BY_STUDENT_ID(JSON.parse(currentUser).data.data.id)
  );

  if (error) return <p>error :(</p>;

  console.log(data);

  if (loading) {
    return (
      <>
        <div className='w-full py-4 mt-64 mx-auto border-gray-500'>
          <div className='container pt-3 px-6 mx-auto'>
            <div className='bg-white text-center block'>
              <h2 className='mb-4 font-semibold uppercase text-gray-500 dark:text-gray-300'>
                LOADING
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <p>
      <div className='w-full py-4  border-gray-500'>
        <div className='container pt-3 mx-auto'>
          {data.studentXPathsByStudentId.length !== 0 ? (
            data.studentXPathsByStudentId.map((sxp) => (
              <div
                key={sxp.id}
                className='w-96 p-4 bg-green-50 rounded-lg shadow m-4'
              >
                <Link to={'/path/' + sxp.id}>
                  <div className='rounded-lg h-1/3 overflow-hidden'>
                    <img
                      className='rounded-lg w-full'
                      src='https://img.itch.zone/aW1hZ2UvMjI0OTk4LzEwNjMyODkucG5n/original/VUZ6SV.png'
                      alt='logo'
                    />
                  </div>
                  <p className='text-left text-4xl text-gray-600 font-bold mt-8'>
                    {sxp.path.title}
                  </p>
                  <p className='text-left font-light p-2 mt-8'>
                    {sxp.path.description}
                  </p>
                  <p>
                    <b>Temps passe:</b>&nbsp;{' '}
                    {sxp.createdAt + ' - ' + sxp.updatedAt}
                  </p>
                </Link>
              </div>
            ))
          ) : (
            <div className='bg-white text-center block'>
              <h1 className='mb-4 font-semibold uppercase text-gray-500 dark:text-gray-300'>
                AUCUN PARCOURS SUIVI
              </h1>
            </div>
          )}
        </div>
      </div>
    </p>
  );
};

export default Parkour;
