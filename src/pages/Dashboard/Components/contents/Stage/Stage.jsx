import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {FaLaptopCode} from 'react-icons/fa';
import { STUDENT_X_STAGES_BY_STUDENT_ID } from '../../../../../services/queries/StudentXStageQueries';

const currentUser = sessionStorage.getItem('currentUser');

const StageCard = ({ sxs }) => {
  return(
    <Link key={sxs.id} to={'/path/' + sxs.stage.path.id}>
      <div className="h-32 block w-full">
          <div className='h-32 flex flex-row   shadow-md rounded-sm'>
              <div className="flex items-center bg-gray-600 justify-center flex-shrink-0 top-0 bottom-o left-0 w-24 text-red-500">
                  <img className="w-16 h-16" src="images/html.png" />
              </div>
              <div className="flex flex-col bg-gray-50 border-l-2 border-gray-50 flex-grow p-2">
                  <div className="font-bold uppercase text-md text-gray-600">{sxs.stage.title}</div>
                  <div className="font-semibold pt-2 text-sm text-left text-gray-600">
                      <p>
                      {sxs.stage.description.slice <= 80
                      ? sxs.stage.description
                      : sxs.stage.description.slice(0, 80) + ' ...'}
                      </p>
                  </div>
              </div>

          </div>
          <div className='w-100 rounded-b-xl -mt-8'>
              <p className='font-semibold pt-2 pr-2 text-right  text-gray-600' style={{fontSize:"10px"}}>
                {sxs.createdAt + ' - ' + sxs.updatedAt}
            </p>
          </div>
      </div>
    </Link>
  )
}

const StageComponent = ({ data }) => {
  return (
    <>
      <div className='w-full py-4  border-gray-500'>
        <div className='w-full px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {data.length !== 0 ? (
            data.map((sxs) => (
              <StageCard sxs={sxs} />
            ))
          ) : (
            <div className='flex flex-row w-full justify-center bg-white text-center block'>
              <h1 className='mb-4 font-semibold uppercase text-gray-500 dark:text-gray-300'>
                AUCUNE ETAPE SUIVI
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}


const Stage = (props) => {
  const { loading, error, data } = useQuery(
    STUDENT_X_STAGES_BY_STUDENT_ID(JSON.parse(currentUser).data.data.id)
  );

  if (error) return <p>error :(</p>;

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
    <>
      <StageComponent data={ data.studentXStagesByStudentId } />
    </>
  );
};

export default Stage;
