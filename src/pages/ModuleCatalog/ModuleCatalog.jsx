import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ModuleCatalogComponent from './Components/ModuleCatalogComponent';

import {
  ALLSTAGES,
  PAGINATE_STAGES,
} from '../../services/queries/StagesQueries';

export default function ModuleCatalog() {
  // const {id} = useParams()
  const { stage_id } = useParams();

  const {
    loading: allStageLoading,
    error: allStageError,
    data: allStageData,
  } = useQuery(ALLSTAGES);

  // const {loading: allStageLoading, error: allStageError, data: allStageData} = useQuery(ALLSTAGES);

  const {
    loading: stageLoading,
    error: stageError,
    data: stageData,
  } = useQuery(PAGINATE_STAGES(1, 10));

  if (allStageLoading) return <p>Loading...</p>;
  if (allStageError) return <p>Error</p>;
  if (stageLoading) return <p>Loading...</p>;
  if (stageError) return <p>Error</p>;
  // if(showStageData) console.log(showStageData)

  return (
    <>
      <ModuleCatalogComponent
        allStageData={allStageData}
        stageData={stageData}
      />
    </>
  );
}
